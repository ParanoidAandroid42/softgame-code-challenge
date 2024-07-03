﻿import { ITextConfig } from "../../interfaces/IAssetConfig";
import * as PIXI from 'pixi.js';

export class Text extends PIXI.Text {
  /**
   *  running when loading class
   * @param x - position x
   * @param y - position y
   * @param c - text config
   * @param p - parent
   */
  constructor(x: number, y: number, c: ITextConfig, p?: PIXI.Container) {
    super(c.text, c.textStyle);
    if (c.name) this.name = c.name;
    this.position.set(x, y);
    this.anchor.set(0.5, 0.5);
    p && p.addChild(this);
  }

  /**
   * change text config
   * @param config - ITextConfig
   */
  public setTextConfig(config: ITextConfig) {
    this.style = new PIXI.TextStyle(config.textStyle);
    this.text = config.text;
  }
}
