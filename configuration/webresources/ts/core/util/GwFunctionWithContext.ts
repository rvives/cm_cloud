export class GwFunctionWithContext {
  constructor (readonly context: object, readonly func: Function) {}

  execute (...args: any[]): any {
    return this.func.apply(this.context, args);
  }
}
