import { ISpriteConfig } from "../../interfaces/IAssetConfig";
import * as PIXI from 'pixi.js';

  export class Sprite extends PIXI.Sprite {
    /**
     *  running when loading class
     * @param x - position x
     * @param y - position y
     * @param w - width
     * @param h - height
     * @param c - SpriteConfig
     * @param p - parent
     */
    constructor(x: number, y: number, w: number, h: number, c: ISpriteConfig, p?: PIXI.Container<PIXI.DisplayObject>) {
      super(PIXI.utils.TextureCache[c.frame]);
     // PIXI.Texture.addTextureToCache[c.frame];
      this.width = w;
      this.height = h;
      c.name ? (this.name = c.name) : (this.name = 'sprite');
      this.anchor.set(0.5, 0.5);
      this.position.set(x, y);
      p && p.addChild(this);
    }
  }
