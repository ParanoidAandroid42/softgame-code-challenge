import { IButtonConfig, ITextConfig } from "interfaces/IAssetConfig";

export class GenericAssetConfig {
  /**general button's config*/
  static GeneralButton: IButtonConfig = {
    frames: {
      out: 'generalbutton_out',
      over: 'generalbutton_over',
      down: 'generalbutton_down',
      disabled: 'generalbutton_disabled',
    },
    name: 'generalButton',
  };

  /** general text's style*/
  static GeneralTextStyle: PIXI.TextStyleOptions = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    fill: '#d08f38',
    stroke: 0x000000,
    strokeThickness: 3,
    align: 'center',
  };

  /** generic text's config*/
  static GenericText: ITextConfig = {
    text: 'Generic Text',
    textStyle: GenericAssetConfig.GeneralTextStyle,
    name: 'Generic Text',
  };

  /** menu text's config*/
  static MenuText: ITextConfig = {
    text: 'Menu',
    textStyle: GenericAssetConfig.GeneralTextStyle,
    name: 'Menu Text',
  };

  /**restart button text's config*/
  static MenuButton: IButtonConfig = {
    frames: {
      out: 'home_out',
      over: 'home_over',
      down: 'home_down',
      disabled: 'home_disabled',
    },
    name: 'Menu Button',
  };
}
