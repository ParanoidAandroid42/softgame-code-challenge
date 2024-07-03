import { ISpriteTextConfig } from "interfaces/IAssetConfig";
import { Sprite } from "atoms/Sprite";
import { Text } from "atoms/Text";

interface SpriteTextOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  config: ISpriteTextConfig;
  parent?: PIXI.Container;
}

export class SpriteText extends Sprite {
  private _text: PIXI.Text;

  /**
   * running when loading class
   * @param options - spritetext options
   */
  constructor(options: SpriteTextOptions) {
    const { x, y, width, height, config, parent } = options;
    super({ x, y, width, height, config: config.sConfig, parent });
    this._text = new Text({
      x: 0,
      y: 0,
      config: config.tConfig,
      parent: this,
    });
    if (config.name) this.name = config.name;
  }

  public get textAsset() {
    return this._text;
  }
}
