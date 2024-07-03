import { ISpriteTextConfig } from "../../interfaces/IAssetConfig";
import { Sprite } from "./Sprite";
import * as PIXI from 'pixi.js';
import { Text } from "./Text";

  export class SpriteText extends Sprite {
    private _text: PIXI.Text;

    /**
     * running when loading class
     * @param x - position x
     * @param y - position y
     * @param w - width
     * @param h - height
     * @param c - spritetext config
     * @param p - parent
     */
    constructor(x: number, y: number, w: number, h: number, c: ISpriteTextConfig, p?: PIXI.Container) {
      super(x, y, w, h, c.sConfig, p);
      this._text = new Text(0, 0, c.tConfig, this);
      if (c.name) this.name = c.name;
    }

    public get textAsset() {
      return this._text;
    }
  }
