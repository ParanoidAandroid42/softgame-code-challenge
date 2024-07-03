import { ITextConfig } from "../../interfaces/IAssetConfig";
import { Button, ButtonOptions } from "./Button";
import { Text } from "./Text";

export interface ButtonTextOptions extends ButtonOptions {
  textConfig: ITextConfig;
}

export class ButtonText extends Button {
  private _text: Text;

  constructor(options: ButtonTextOptions) {
    super(options);
    this._text = new Text(0, 0, options.textConfig, this);
    if (options.config.name) this.name = options.config.name;
  }

  public get textAsset() {
    return this._text;
  }
}
