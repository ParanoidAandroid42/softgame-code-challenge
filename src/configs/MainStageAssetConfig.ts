import { ITextConfig, IButtonTextConfig } from "interfaces/IAssetConfig";
import { GenericAssetConfig } from "configs/GenericAssetConfig";

export class MainStageAssetConfig {
  /**first task text's config*/
  static FirstTaskText: ITextConfig = {
    text: 'First Task',
    textStyle: GenericAssetConfig.GeneralTextStyle as PIXI.TextStyle,
    name: 'First Text',
  };

  /**second task text's config*/
  static SecondTaskText: ITextConfig = {
    text: 'Second Task',
    textStyle: GenericAssetConfig.GeneralTextStyle as PIXI.TextStyle,
    name: 'Second Text',
  };

  /** third task text's config*/
  static ThirdTaskText: ITextConfig = {
    text: 'Third Task',
    textStyle: GenericAssetConfig.GeneralTextStyle as PIXI.TextStyle,
    name: 'Third Text',
  };

  /** first task button text's config*/
  static FirstTaskButtonText: IButtonTextConfig = {
    bConfig: GenericAssetConfig.GeneralButton,
    tConfig: MainStageAssetConfig.FirstTaskText,
    name: 'First Task Button Text',
  };

  /** second task button text's config*/
  static SecondTaskButtonText: IButtonTextConfig = {
    bConfig: GenericAssetConfig.GeneralButton,
    tConfig: MainStageAssetConfig.SecondTaskText,
    name: 'First Task Button Text',
  };

  /** third task button text's config*/
  static ThirdTaskButtonText: IButtonTextConfig = {
    bConfig: GenericAssetConfig.GeneralButton,
    tConfig: MainStageAssetConfig.ThirdTaskText,
    name: 'Third Task Button Text',
  };
}
