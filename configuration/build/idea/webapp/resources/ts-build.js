const fs = require('fs');
const path = require('path');
const webpack = require("webpack");
const { Linter, Configuration } = require("tslint");

/**
 * This file expects 2 arguments
 * 1. --js-output: a list of output directories concatenated with "+"
 * 2. --env: "production" or "development"
 */

const JS_OUTPUT_PATH_ARGUMENT_SEPARATOR = "+";
let outputDirs = [];
let environment = "production"; //default to production

process.argv.forEach(function (val, index) {
  function nextArg() {
    return index + 1 < process.argv.length ? process.argv[index + 1] : "";
  }

  function hasNextArg() {
    const next = nextArg();
    return next && !next.startsWith("--");
  }

  if (val === "--js-output") {
    if (hasNextArg()) {
      outputDirs = nextArg().split(JS_OUTPUT_PATH_ARGUMENT_SEPARATOR);
    }
  } else if (val === "--env") {
    if (hasNextArg()) {
      const devOrProd = nextArg();
      if (devOrProd === "dev" || devOrProd === "development") {
        environment = "development";
      } else if (devOrProd === "prod" || devOrProd === "production") {
        environment = "production";
      } else {
        console.warn("Unknown value passed to --env : " + devOrProd);
      }
    }
  }
});

function isProduction() {
  return environment === "production";
}

const getExportLineForFile = (fileName) => {
  const normalizedFileName = path.sep === "/" ? fileName : fileName.split(path.sep).join("/");
  return "export * from \"" + normalizedFileName.replace(".ts", "") + "\";";
};

const writeIndexFile = (dir, prefix, paths) => {
  const indexPath = path.resolve(dir, prefix + "-index.ts");

  let finalString = "/* tslint:disable:no-import-side-effect */";

  paths.forEach((fileName) => {
    finalString += "\n";
    finalString += getExportLineForFile(fileName);
  });

  const fd = fs.openSync(indexPath, 'w');
  fs.writeSync(fd, finalString);
  fs.closeSync(fd);
  return indexPath;
};

const buildTsPaths = (filePaths, filter, dir) => {
  const prefix = dir.replace(tsRootDir, ".") + path.sep;
  const dirs = [];

  fs.readdirSync(dir).forEach((fileName) => {
    const subPath = path.resolve(dir, fileName);
    if (filter(subPath)) {
      const statObj = fs.statSync(subPath);
      if (statObj.isDirectory()) {
        dirs.push(subPath);
      } else if(fileName.indexOf(".ts") > -1 && fileName.indexOf(".d.ts") === -1) {
        filePaths.push(prefix + fileName);
      }
    }
  });

  dirs.forEach(buildTsPaths.bind(this, filePaths, filter))
};

const escapeForRegExp = (s) => {
  return s.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
};

const exactMatchRegExpFor = (s) => {
  return new RegExp("^" + escapeForRegExp(s) + "$");
};

const stripExtension = (s) => {
  return s.replace(/\.[^\.]*$/, "");
};

function lintTypeScript(rootDir) {
  const tsConfigPath = path.resolve(rootDir, "tsconfig.json");
  const program = Linter.createProgram(tsConfigPath, rootDir);
  const linter = new Linter({"fix": true}, program);
  const files = Linter.getFileNames(program);
  files.forEach(file => {
    const fileContents = program.getSourceFile(file).getFullText();
    const config = Configuration.findConfiguration(path.resolve(rootDir, "tslint.json"), file).results;
    linter.lint(file, fileContents, config);
  });

  let output = linter.getResult().output.trim();
  if(output.length > 0) {
    console.info(output);
  }
  if(linter.getResult().errorCount > 0) {
    throw new Error("Linting failed with " + linter.getResult().errorCount + " errors.");
  }
}

//
// Transpiles TypeScript and build combined webpack files
//
function transpileTypeScript(rootDir, outputFileName, entryPoint, callback) {

  let webpackConfig = {
    entry: entryPoint,
    // Output to build directory, use Universal Module Definition for modules
    output: {
      path: outputDirs[0],
      filename: outputFileName,
      libraryTarget: "umd"
    },
    // Specifies how modules are resolved; need to tell webpack about TypeScript files, add aliases for jQuery
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        JQuery: "jquery",
        jQuery: "jquery"
      }
    },
    // Specify the "loaders" that process the input
    module: {
      rules: [
        // TODO: upgrade to ts-loader, exclude is broken in awesome typescript loader,
          // We just never noticed due to file structure, so it's parsing a lot of wasted stuff
        {
          test: /\.ts?$/,
          loader: path.resolve(__dirname, 'node_modules/awesome-typescript-loader'),
          exclude: /node_modules/,
          options: {
            reportFiles: [
              "./ts/core/**/*", "./ts/comp/**/*", "./ts/embedded/**/*"
            ],
            configFileName: "./tsconfig.json"
          }
        },
        // Source map loader, extracts source maps from JavaScript libraries (jQuery, d3) to be processed by webpack
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        }
      ]
    },
    plugins: [
      // Plugin to minimize app-ts.js
      //new webpack.optimize.UglifyJsPlugin({ include: exactMatchRegExpFor(outputFileName), minimize: true }), //TODO enable when stable
      // Plugin to add source map to app-ts-debug.js
      new webpack.SourceMapDevToolPlugin({ include: outputFileName })
    ]
  };

  function copyToAdditionalDirectoriesIfNeeded () {
    for (let i = 1; i < outputDirs.length; i++) {
      const additionalDir = outputDirs[i];
      fs.copyFileSync(path.resolve(outputDirs[0], outputFileName), path.resolve(additionalDir, outputFileName), fs.constants.COPYFILE_FICLONE);
    }
  }

  webpack(webpackConfig, function (wpErr, wpStats) {
    if (wpErr) {
      throw new Error(wpErr.toString());
    } else {
      const compilation = wpStats.compilation;
      if(compilation.errors && compilation.errors.length > 0) {
        throw new Error(wpStats.toString());
      }

      copyToAdditionalDirectoriesIfNeeded();

      console.info(wpStats.toString());
      if (callback) {
        callback();
      }
    }
  });

}

//
// Main program
//

const tsRootDir = path.resolve(__dirname, "ts");

console.info("\nTEMP Disabled Linting TypeScript files with TSLint...");
//lintTypeScript(tsRootDir); //TODO: will replace with eslint in phase 2

const nodeModulesDir = path.resolve(__dirname, "node_modules");
const testDir = path.resolve(tsRootDir, "test");
const embeddedDir = path.resolve(tsRootDir, "embedded");

console.info("\nGenerating index file for internal TypeScript...");

function filterForInternalTypeScript(path) {
  return path !== nodeModulesDir && path !== testDir && path !== embeddedDir;
}

const internalTsPaths = [];
buildTsPaths(internalTsPaths, filterForInternalTypeScript, tsRootDir);
const internalEntryPoint = writeIndexFile(tsRootDir, "internal", internalTsPaths.sort());

console.info("\nTranspiling internal TypeScript...");
transpileTypeScript(tsRootDir, "app-ts.js", internalEntryPoint, function() {

  fs.unlinkSync(internalEntryPoint);

  console.info("\nGenerating index file for embedded TypeScript...");

  function filterForEmbeddedTypeScript(path) {
    return path.startsWith(embeddedDir);
  }

  const embeddedTsPaths = [];
  buildTsPaths(embeddedTsPaths, filterForEmbeddedTypeScript, tsRootDir);
  const embeddedEntryPoint = writeIndexFile(tsRootDir, "embedded", embeddedTsPaths.sort());

  console.info("\nTranspiling embedded TypeScript...");
  transpileTypeScript(tsRootDir, "gw-embedded-ts.js", embeddedEntryPoint, function() {
    fs.unlinkSync(embeddedEntryPoint);
  });

});
