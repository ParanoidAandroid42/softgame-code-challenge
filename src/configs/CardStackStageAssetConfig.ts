import { ISpriteConfig, IButtonConfig, ITextConfig, IButtonTextConfig } from "interfaces/IAssetConfig";

  export class CardStackStageAssetConfig {
    /** card sprite's config */
    static CardSprite: ISpriteConfig = {
      frame: 'card',
      name: 'card',
    };

    static CardStackGeneralTextStyle = {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '14px',
      fontWeight: 'bold',
      fill: '#d08f38',
      stroke: 0x000000,
      strokeThickness: 3,
      align: 'center',
    };

    static CardStackGeneralButtonStyle: IButtonConfig = {
      frames: {
        out: 'generalbutton_out',
        over: 'generalbutton_over',
        down: 'generalbutton_down',
        disabled: 'generalbutton_disabled',
      },
      name: 'generalButton',
    };

    /** restart text's config*/
    static RestartText: ITextConfig = {
      text: 'Restart',
      textStyle: CardStackStageAssetConfig.CardStackGeneralTextStyle as PIXI.TextStyle,
      name: 'Restart Text',
    };

    /** play text's config */
    static PlayText: ITextConfig = {
      text: 'Play',
      textStyle: CardStackStageAssetConfig.CardStackGeneralTextStyle as PIXI.TextStyle,
      name: 'Play Text',
    };

    /** restart button text's config*/
    static RestartButton: IButtonTextConfig = {
      bConfig: CardStackStageAssetConfig.CardStackGeneralButtonStyle,
      tConfig: CardStackStageAssetConfig.PlayText,
      name: 'Restart Button Text',
    };
  }
