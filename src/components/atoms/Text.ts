import { ITextConfig } from "interfaces/IAssetConfig";

interface TextOptions {
  x: number;
  y: number;
  config: ITextConfig;
  parent?: PIXI.Container;
}

export class Text extends PIXI.Text {
  constructor(options: TextOptions) {
    const { x, y, config, parent } = options;
    super(config.text, config.textStyle);
    if (config.name) this.name = config.name;
    this.position.set(x, y);
    this.anchor.set(0.5, 0.5);
    parent && parent.addChild(this);
  }

  /**
   * change text config
   */
  public setTextConfig(config: ITextConfig) {
    this.style = new PIXI.TextStyle(config.textStyle);
    this.text = config.text;
  }
}
