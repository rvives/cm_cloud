/* tslint:disable:no-unused-expression */
import {expect} from "chai";
import "mocha";
import {GwPromise, GwReject, GwResolve} from "../../embedded/GwPromise";

const makeExecResolverAtTime = (val: any, time: number = 0, counter: {"count": number}) => {
  return (res: GwResolve, rej: GwReject) => {
    setTimeout(() => {
      counter.count++;
      res(val);
    }, time);
  };
};

describe("GwPromise", () => {

  it("Should construct with null", () => {
    const prom = new GwPromise(null);
    expect(prom).to.be.instanceOf(GwPromise);
    expect(prom.isPending()).to.be.true;

  });

  it("Should construct with an executor", () => {
    const prom = new GwPromise(() => null);
    expect(prom).to.be.instanceOf(GwPromise);
    expect(prom.isPending()).to.be.true;

  });

  it("Instance should resolve correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        res("good");
        expect(prom).to.be.instanceOf(GwPromise);
        expect(prom.isFulfilled()).to.be.true;
        expect(prom.getResult()).to.equal("good");
        done();
      });
    };

    const prom = new GwPromise(exec);
    expect(prom.isPending()).to.be.true;
  });

  it("Instance should reject correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        rej("bad");
        setTimeout(() => {
          expect(prom).to.be.instanceOf(GwPromise);
          expect(prom.isRejected()).to.be.true;
          expect(prom.getResult()).to.equal("bad");
          done();
        });
      });
    };

    const prom = new GwPromise(exec);
    expect(prom.isPending()).to.be.true;
  });

  it("Instance should reject thrown error correctly", (done) => {
    const brokenError = new Error("broken");

    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        expect(prom).to.be.instanceOf(GwPromise);
        expect(prom.isRejected()).to.be.true;
        expect(prom.getResult()).to.equal(brokenError);
        done();
      });
      throw brokenError;
    };

    const prom = new GwPromise(exec);
    expect(prom.isPending()).to.be.false;
  });

  it("Then should return a promise", () => {
    const prom = new GwPromise(null);
    const subscriber = prom.then(undefined);

    expect(subscriber).to.be.instanceOf(GwPromise);
    expect(subscriber.isPending()).to.be.true;
  });

  it("Then should resolve correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        res("good");
      });
    };

    const thenResolve = (val: any) => {
      setTimeout(() => {
        expect(val).to.equal("good");
        expect(subscriber.isFulfilled()).to.be.true;
        done();
      });
    };

    const prom = new GwPromise(exec);
    const subscriber = prom.then(thenResolve);

    expect(subscriber.isPending()).to.be.true;
  });

  it("Then should reject correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        rej("bad");
      });
    };

    const thenReject = (val: any) => {
      setTimeout(() => {
        expect(val).to.equal("bad");
        expect(subscriber.isRejected()).to.be.true;
        done();
      });
    };

    const prom = new GwPromise(exec);
    const subscriber = prom.then(undefined, thenReject);

    expect(subscriber.isPending()).to.be.true;
  });

  it("Then should should fire correct functions when called on an already resolved Promise", (done) => {
    const i = 0;
    let totalMessage: string = "";

    const promise1 = new GwPromise((resolve) => {
      resolve(" --SUCCESS--" + i);
    });

    promise1.then((value: any) => {
      totalMessage += ". (3) First then:" + value;
    });

    totalMessage += "(1) After first then"; //1

    promise1.then((value: any) => {
      totalMessage += ". (4) Second then:" + value;
    });

    totalMessage += ". (2) After second then"; //2

    setTimeout(() => {
      promise1.then((value: any) => {
        setTimeout(() => {
          totalMessage += ". (6) Third, async, then:" + value;
          expect(totalMessage).to.equal("(1) After first then. (2) After second then. (3) First then: --SUCCESS--0. (4) Second then: --SUCCESS--0. (5) After third, async, then. (6) Third, async, then: --SUCCESS--0");
          done();
        });

      });
      totalMessage += ". (5) After third, async, then";
    });
  });

  it("finally should resolve correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        res("good");
      });
    };

    const finallyResolve = (shouldNotHaveAVal: any) => {
      setTimeout(() => {
        expect(shouldNotHaveAVal).to.be.undefined;
        //expect(subscriber.getResult()).to.equal(?);
        //expect(subscriber.isFulfilled()).to.be.true; //TODO: Is a finally promise supposed to be resolved
        done();
      });
    };

    const prom = new GwPromise(exec);
    const subscriber = prom.finally(finallyResolve);

    expect(subscriber.isPending()).to.be.true;
  });

  it("finally should reject correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        rej("bad");
      });
    };

    const finallyReject = (shouldNotHaveAVal: any) => {
      setTimeout(() => {
        expect(shouldNotHaveAVal).to.be.undefined;
        //expect(subscriber.getResult()).to.equal(?);
        //expect(subscriber.isFulfilled()).to.be.true; //TODO: Is a finally promise supposed to be rejected?
        done();
      });
    };

    const prom = new GwPromise(exec);
    const subscriber = prom.finally(finallyReject);

    expect(subscriber.isPending()).to.be.true;
  });

  it("finally should preserve fulfilled value", (done) => {
    let finallyCalled = false;
    new GwPromise((res) => setTimeout(() => res(2)))
      .then((val) => val * 2)
      .finally(() => finallyCalled = true)
      .then((val) => {
        expect(val).to.equal(4);
        expect(finallyCalled).to.be.true;
        done();
      });
  });

  it("finally should preserve rejected value", (done) => {
    let finallyCalled = false;
    new GwPromise((res) => setTimeout(() => res(2)))
      .then(() => { throw new Error("bad"); })
      .finally(() => finallyCalled = true)
      .then(v => done(new Error("Then should not have been called with value " + v)))
      .catch((error) => {
        expect(error.message).to.equal("bad");
        expect(finallyCalled).to.be.true;
        done();
      });
  });

  it("exception in finally after fulfillment should be catchable", (done) => {
    new GwPromise((res) => setTimeout(() => res(2)))
      .then((val) => val * 2)
      .finally(() => { throw new Error("Bad finally"); })
      .then(v => done(new Error("Then should not have been called with value " + v)))
      .catch((e) => {
        expect(e.message).to.equal("Bad finally");
        done();
      });
  });

  it("exception in finally after rejection should be catchable", (done) => {
    new GwPromise((res) => setTimeout(() => res(2)))
      .then(() => { throw new Error("Bad then"); })
      .finally(() => { throw new Error("Bad finally"); })
      .then(v => done(new Error("Then should not have been called with value " + v)))
      .catch((e) => {
        expect(e.message).to.equal("Bad finally");
        done();
      });
  });

  it("catch should reject correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        rej("bad");
      });
    };

    const thenReject = (val: any) => {
      setTimeout(() => {
        expect(val).to.equal("bad");
        expect(subscriber.isRejected()).to.be.true;
        done();
      });
    };

    const prom = new GwPromise(exec);
    const subscriber = prom.catch(thenReject);

    expect(subscriber.isPending()).to.be.true;
  });

  it("catch chained after then should reject correctly", (done) => {
    const exec = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        rej("bad");
      });
    };

    const thenResolve = (val: any) => {
      setTimeout(() => {
        done(new Error("Then callback called on failing promise"));
      });
    };

    const thenReject = (val: any) => {
      setTimeout(() => {
        expect(val).to.equal("bad");
        expect(subscriber.isRejected()).to.be.true;
        done();
      });
    };

    const prom = new GwPromise(exec);
    const subscriber = prom.then(thenResolve).catch(thenReject);

    expect(subscriber.isPending()).to.be.true;
  });

  it("catch should chain failure from a then", (done) => {
    const exec1 = (res: GwResolve, rej: GwReject) => {
      setTimeout(() => {
        res("good");
      });
    };

    const then2 = (val: any) => {
      throw new Error("catch should catch this");
    };

    let caught = false;

    const catch3 = (rej: any) => {
      expect(rej).to.be.instanceOf(Error);
      expect(rej.message).to.equal("catch should catch this");
      expect(prom1.isFulfilled()).to.be.true;
      expect(prom2.isRejected()).to.be.true;
      caught = true;
    };

    const prom1 = new GwPromise(exec1);
    const prom2 = prom1.then(then2);
    const prom3 = prom2.catch(catch3);
    prom3.finally(() => {
      setTimeout(() => {
        expect(prom3.isRejected()).to.be.true;
        expect(caught).to.be.true;
        done();
      });
    });

    expect(prom1.isPending()).to.be.true;
  });

  it("catch that catches failure should chain to then", (done) => {
    new GwPromise(() => { throw new Error("Failure"); })
      .catch(e => e.message + " becomes success")
      .then(v => {
        expect(v).to.equal("Failure becomes success");
        done();
      }).catch(e => done(new Error("Error should have been handled by initial catch: " + e)));
  });

  it("catch handles failed promise returned by then", (done) => {
    new GwPromise((res) => res("Good"))
      .then(v => new GwPromise((res, rej) => setTimeout(rej("Bad"))), () => done(new Error("Early reject")))
      .catch(e => e + " can be improved")
      .then(v => {
        expect(v).to.equal("Bad can be improved");
        done();
      }).catch(e => done(new Error("Error should have been handled by initial catch: " + e)));
  });

  it("catch handles failed promise returned by then after finally", (done) => {
    let finallyCalled = false;
    new GwPromise((res) => res("Good"))
      .then(v => new GwPromise((res, rej) => setTimeout(rej("Bad"))), () => done(new Error("Early reject")))
      .catch(e => e + " can be improved")
      .finally(() => finallyCalled = true)
      .then(v => {
        expect(v).to.equal("Bad can be improved");
        expect(finallyCalled).to.be.true;
        done();
      }).catch(e => done(new Error("Error should have been handled by initial catch: " + e)));
  });

  it("Then registered after catch has handled error is successful", (done) => {
    const promise = new GwPromise(() => { throw new Error("Failure"); })
      .catch(e => {
        setTimeout(() => {
          promise.then(v => {
            expect(v).to.equal("Failure is often an option");
            done();
          });
        });
        return e.message + " is often an option";
      });
  });

  it("Catch registered after promise resolved handles error", (done) => {
    const promise = new GwPromise(() => { throw new Error("Failure"); })
      .finally(() => {
        setTimeout(() => {
          promise.catch(e => {
            expect(e.message).to.equal("Failure");
            done();
          });
        });
      });
  });

  it("promise that resolves to fulfilled promise should fulfil correctly", (done) => {
    const innerPromise = new GwPromise((res) => {
      setTimeout(() => {
        res("good");
      });
    });

    const outerPromise = new GwPromise((res) => {
      setTimeout(() => {
        res(innerPromise);
      });
    });

    outerPromise.then((value) => {
      expect(outerPromise.isFulfilled()).to.be.true;
      expect(outerPromise.getResult()).to.equal("good");
      expect(value).to.equal("good");
      done();
    });
    expect(outerPromise.isPending()).to.be.true;
  });

  it("promise that resolves to rejected promise should fulfil correctly", (done) => {
    const innerPromise = new GwPromise((res, rej) => {
      setTimeout(() => {
        rej("bad");
      });
    });

    const outerPromise = new GwPromise((res) => {
      setTimeout(() => {
        res(innerPromise);
      });
    });

    outerPromise.catch((value) => {
      expect(outerPromise.isRejected()).to.be.true;
      expect(outerPromise.getResult()).to.equal("bad");
      expect(value).to.equal("bad");
      done();
    });
    expect(outerPromise.isPending()).to.be.true;
  });

  //TODO: there is debate over whether static resolve should resolve async or not
  it("static resolve should return a promise", () => {
    const prom = GwPromise.resolve("good");
    expect(prom).to.be.instanceOf(GwPromise);
    expect(prom.isFulfilled()).to.be.true;
    expect(prom.getResult()).to.equal("good");
  });

  it("static reject should return a promise", () => {
    const prom = GwPromise.reject("bad");
    expect(prom).to.be.instanceOf(GwPromise);
    expect(prom.isRejected()).to.be.true;
    expect(prom.getResult()).to.equal("bad");
  });

  it("static race should follow first promise with correct value", (done) => {
    const proms: GwPromise[] = [];
    const counter = {count: 0};

    for (let i = 1; i < 10; i++) {
      proms.push(new GwPromise(makeExecResolverAtTime(i, i, counter)));
    }

    const raceProm = GwPromise.race(proms);
    expect(raceProm.isPending()).to.be.true;

    const thenRace = raceProm.then((val: any) => {
      setTimeout(() => {
        expect(val).to.equal(1);
        expect(raceProm.isFulfilled()).to.be.true;
        expect(proms[0].isFulfilled()).to.be.true;
        expect(proms[0].getResult()).to.equal(val);

        done();
      });
    });
  });

  it("static all should return after all resolved, with correct order", (done) => {
    const proms: GwPromise[] = [];
    const counter = {count: 0};

    for (let i = 1; i < 10; i++) {
      proms.push(new GwPromise(makeExecResolverAtTime(i, i, counter)));
    }

    const allProm = GwPromise.all(proms);
    expect(allProm.isPending()).to.be.true;

    const thenAll = allProm.then((val: any) => {
      setTimeout(() => {
        expect(val).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(allProm.isFulfilled()).to.be.true;
        expect(proms[0].isFulfilled()).to.be.true;
        expect(proms[8].isFulfilled()).to.be.true;
        expect(counter.count).to.equal(9);

        expect(proms[0].getResult()).to.equal(1);
        expect(proms[8].getResult()).to.equal(9);

        done();
      });
    });
  });
});
