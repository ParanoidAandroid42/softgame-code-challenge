import { ISpriteConfig } from "interfaces/IAssetConfig";

interface SpriteOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  config: ISpriteConfig;
  parent?: PIXI.Container;
}

export class Sprite extends PIXI.Sprite {
  /**
   *  running when loading class
   * @param options - sprite options
   */
  constructor(options: SpriteOptions) {
    const { x, y, width, height, config, parent } = options;
    super(PIXI.utils.TextureCache[config.frame]);

    this.width = width;
    this.height = height;
    this.name = config.name ? config.name : 'sprite';
    this.anchor.set(0.5, 0.5);
    this.position.set(x, y);
    parent && parent.addChild(this);
  }
}
