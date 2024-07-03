/** running like dictionary*/
interface Tickers<T> {
  [K: string]: T;
}

export class TickerManager extends PIXI.ticker.Ticker {
  private tickers: Tickers<PIXI.ticker.Ticker> = {};
  private gTime!: number;
  public static instance: TickerManager;

  /** Ticker constructor*/
  constructor() {
    super();
    TickerManager.instance = this;
  }

  /**
   * add timeout function
   * @param key -unique key for ticker
   * @param duration - duration of function
   * @param callback - callback function
   * @param loop - loop : boolean
   */
  public addTimeout(key: string, duration: number, callback: Function, loop: boolean) {
    if (!this.tickers[key]) {
      let ticker = new PIXI.ticker.Ticker();
      ticker.autoStart = true;
      this.tickers[key] = ticker;
      this.gTime = new Date().getTime();
      this.tickers[key].add(this.addLoop.bind(this, key, duration, callback, loop));
    }
  }

  /**
   * update game
   * @param key - unique key for ticker
   * @param duration - duration of function
   * @param callback - callback function
   * @param loop - loop : boolean
   */
  private addLoop(key: string, duration: number, callback: Function, loop: boolean) {
    var g_TICK = duration * 1000; // convert to sn  - 1000msn = 1 sn
    var timeNow = new Date().getTime();
    var timeDiff = timeNow - this.gTime;
    if (timeDiff < g_TICK) {
      return;
    }
    callback.call('', this);
    if (loop) {
      this.gTime = new Date().getTime();
    } else {
      this.tickers[key].remove(this.addLoop.bind(this));
    }
  }

  /**
   * remove ticker
   * @param key - ticker's key
   */
  public removeTicker(key: string) {
    this.tickers[key].destroy();
    delete this.tickers[key];
  }

  public getTickers() {
    return this.tickers;
  }
}
