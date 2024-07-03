import { IButtonConfig, IButtonFrames } from "../../interfaces/IAssetConfig";
import { Container } from "../elements/Container";
import { Sprite, Texture } from "pixi.js";

/** Button states enum */
export enum ButtonStates {
  Disabled = 'Disabled',
  Down = 'Down',
  Out = 'Out',
  Over = 'Over',
}
export interface ButtonOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  config: IButtonConfig;
  parent?: Container;
  callback?: Function;
}

/** Button class */
export class Button extends Sprite {
  private frames: IButtonFrames;
  private _state: ButtonStates = ButtonStates.Out;
  private _callback: Function | null = null;
  private _isEnabled: boolean = true;
  protected _zIndex: number = 0;

  constructor(options: ButtonOptions) {
    super();
    this.width = options.width;
    this.height = options.height;
    this.anchor.set(0.5, 0.5);
    this.position.set(options.x, options.y);
   // this.buttonMode = true;
    this.interactive = true;
    this.frames = options.config.frames;
    this._callback = options.callback || null;
    this.name = options.config.name || 'button';
    options.parent && options.parent.addChild(this);
    this.state = ButtonStates.Out;
    this.initEvents();
  }

  /**
   * Initialize events
   */
  private initEvents() {
    this.on('pointerdown', this.onButtonDown, this);
    this.on('pointerup', this.onButtonUp, this);
    this.on('pointerover', this.onButtonOver, this);
    this.on('pointerout', this.onButtonOut, this);
    this.on('pointertap', this.onButtonOut, this);
  }

  /**
   * Handle button down event
   */
  private onButtonDown() {
    this.state = ButtonStates.Down;
  }

  /**
   * Handle button up event
   */
  private onButtonUp() {
    if (this._callback) {
      this._callback.call(null, this);
    }
    this.state = ButtonStates.Out;
  }

  /**
   * Handle button over event
   */
  private onButtonOver() {
    this.state = ButtonStates.Over;
  }

  /**
   * Handle button out event
   */
  private onButtonOut() {
    this.state = ButtonStates.Out;
  }

  /**
   * Set button state and change texture accordingly
   */
  public set state(state: ButtonStates) {
    this._state = state;
    this.texture = Texture.from(this.frames[state.toLowerCase() as keyof IButtonFrames]);
  }

  public get state() {
    return this._state;
  }

  /**
   * Enable or disable the button
   * @param enable - Enable state
   */
  public set isEnabled(enable: boolean) {
    this._isEnabled = enable;
    this.state = enable ? ButtonStates.Out : ButtonStates.Disabled;
    this.interactive = enable;
  }

  public get isEnabled() {
    return this._isEnabled;
  }

  public get zIndex() {
    return this._zIndex;
  }

  public set zIndex(zIndex) {
    this._zIndex = zIndex;
  }
}
