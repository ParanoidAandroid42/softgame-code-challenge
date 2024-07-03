export class RandomRichTextStageConfig {
  /**duration of create asset */
  static CreateAssetDuration = 2;

  /**random font size range to generate */
  static RandomRichTextFontSize = {
    min: 10,
    max: 50,
  };

  static SpecialTextOptions = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'game',
    'images',
    'fun',
    'text',
    '[card]',
    '[fire/fire01]',
    '[fire/fire03]',
    '[fire/wood]',
    'more text',
    'random',
    '[generalbutton_out]',
    '[home_out]',
  ];
}
