import { Button } from "../components/atoms/Button";
import { Container } from "../components/elements/Container";
import { RichText } from "../components/elements/RichText";
import { Stage } from "../components/elements/Stage";
import { GameConfig } from "../configs/GameConfig";
import { GenericAssetConfig } from "../configs/GenericAssetConfig";
import { RandomRichTextStageConfig } from "../configs/RandomRichTextStageConfig";
import { StageManager } from "../managers/StageManager";
import { TickerManager } from "../managers/TickerManager";
import * as PIXI from 'pixi.js';

export class RandomRichTextStage extends Stage {
  private container!: Container;
  private richText!: RichText;
  private textStyle!: Partial<PIXI.TextStyle>;

  /** running when loading stage */
  public init() {
    this.container = new Container(0, 0, this, 'Container');

    // Create RichText component
    this.textStyle = { fill: 0xffffff, fontSize: this.generateRandomFontSize() };
    const initialText = this.generateRandomText();
    this.richText = new RichText(initialText, GameConfig.DisplayResolution.width - 100, this.textStyle);
    this.container.addChild(this.richText);

    const callback: Function = StageManager.instance.backMenuButtonUp;
    new Button({
      x: 1245,
      y: 35,
      width: 70,
      height: 70,
      config: GenericAssetConfig.MenuButton,
      callback: callback.bind(this, this.name),
      parent: this.container,
    });

    // Center the RichText component
    this.setCenterRandomRichTextPosition();

    // Start generating random text with images every [RandomRichTextStageConfig.CreateAssetDuration] seconds
    TickerManager.instance.addTimeout(
      'RandomText',
      RandomRichTextStageConfig.CreateAssetDuration,
      this.updateRandomContent.bind(this),
      true,
    );
    this.initDisplayEvents();
  }

  /**
   * Generate random text with images
   */
  private generateRandomText(): string {
    const options = RandomRichTextStageConfig.SpecialTextOptions;
    const size = Math.floor(Math.random() * 10 + 5);
    let text = '';
    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * options.length);
      text += options[randomIndex] + ' ';
    }
    return text.trim();
  }

  /**
   * Generate random font size
   */
  private generateRandomFontSize(): number {
    return Math.floor(
      Math.random() * RandomRichTextStageConfig.RandomRichTextFontSize.max + RandomRichTextStageConfig.RandomRichTextFontSize.min,
    );
  }

  /**
   * Center the RichText component on the screen
   */
  private setCenterRandomRichTextPosition() {
    this.richText.position.set(
      (GameConfig.DisplayResolution.width - this.richText.width) / 2,
      (GameConfig.DisplayResolution.height - this.richText.height) / 2,
    );
  }

  /**
   * Update the text and text style in the RichText component
   */
  private updateRandomContent() {
    const newText = this.generateRandomText();
    const newFontSize = this.generateRandomFontSize();
    this.richText.updateText(newText);
    this.richText.updateTextStyle({
      fill: this.textStyle.fill,
      fontSize: newFontSize,
    });

    // Re-center the RichText component
    this.setCenterRandomRichTextPosition();
  }

  public setVisualPortrait(): void {
    // Set visual elements for portrait orientation if needed -scale or reposition elements-
    // Currently it is not required according the assignment
  }
  public setVisualLandscape(): void {
    // Set visual elements for landscape orientation if needed -scale or reposition elements-
    // Currently it is not required according the assignment
  }

  /** running when destroying stage */
  public dispose() {
    TickerManager.instance.removeTicker('RandomText');
  }
}
