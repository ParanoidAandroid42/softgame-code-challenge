export class RandomRichTextStageConfig {
  /**duration of create asset */
  static CreateAssetDuration = 2;

  /**random font size range to generate */
  static RandomFontSize = {
    min: 10,
    max: 50,
  };

  /**
   * Options for generating random rich text content.
   * This array includes both text and image placeholders. Images are specified using square brackets.
   * Example: "I am [imageName] text" where "imageName" corresponds to a texture in the PIXI.Texture cache.
   */
  static RandomTextElements = [
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

  /**
   * Configuration for the range of text sizes to be generated randomly.
   * This defines the minimum and maximum number of words that can be included in the generated text.
   * Example: { min: 5, max: 10 } means the generated text will contain between 5 and 10 words.
   */
  static RandomTextSizeRange = {
    min: 5,
    max: 10,
  };
}
