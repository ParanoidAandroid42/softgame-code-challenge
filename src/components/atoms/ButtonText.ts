import { ITextConfig } from "interfaces/IAssetConfig";
import { Button, ButtonOptions } from "atoms/Button";
import { Text } from "atoms/Text";

export interface ButtonTextOptions extends ButtonOptions {
  textConfig: ITextConfig;
}

export class ButtonText extends Button {
  private text: Text;

  constructor(options: ButtonTextOptions) {
    super(options);
    this.text = new Text({
      x: 0,
      y: 0,
      config: options.textConfig,
      parent: this,
    });
    
    if (options.config.name) this.name = options.config.name;
  }

  public get textAsset() {
    return this.text;
  }
}
