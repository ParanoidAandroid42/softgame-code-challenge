export interface RichTextOptions {
  text: string;
  maxWidth: number;
  textStyle?: Partial<PIXI.TextStyle>;
}

/**
 * RichText class for displaying styled text and inline images within a PIXI.Container.
 * The text can include inline images using the format '[imageName]'.
 */
export class RichText extends PIXI.Container {
  private textStyle: Partial<PIXI.TextStyle>;
  private maxWidth: number;
  private currentText: string;

  /**
   * Creates an instance of RichText.
   * @param options - Configuration options for the RichText component.
   *    - text: The initial text content, which can include inline images using the format '[imageName]'.
   *    - maxWidth: The maximum width of the text container. Text will wrap to new lines if it exceeds this width.
   *    - textStyle: Optional PIXI.TextStyle configuration for styling the text.
   *
   * The RichText component allows for mixing text and images inline. Images are specified using square brackets.
   *
   * Usage example:
   * ```typescript
   * const richText = new RichText({
   *   text: "This is a text with an inline image [imageName].",
   *   maxWidth: 500,
   *   textStyle: { fill: 0xffffff, fontSize: 24 }
   * });
   * ```
   *
   * Key considerations:
   * - Use the format `[imageName]` within the text string to specify where images should appear.
   * - Ensure that the `imageName` matches a texture key available in the PIXI.Texture cache.
   * - The `maxWidth` property controls the wrapping of the text and ensures that it does not exceed the specified width.
   * - The `textStyle` property allows customization of the text appearance using PIXI.TextStyle options.
   */
  constructor(options: RichTextOptions) {
    super();
    this.textStyle = options.textStyle || {};
    this.maxWidth = options.maxWidth;
    this.currentText = options.text;
    this.updateText(options.text);
  }

  /**
   * Update text with inline images
   * @param text A string that can contain [img1], [img2], etc. for images
   */
  public updateText(text: string) {
    this.currentText = text;
    this.removeChildren();
    const elements = this.parseText(text);
    this.buildElements(elements);
  }

  /**
   * Update text style
   */
  public updateTextStyle(textStyle: Partial<PIXI.TextStyle>) {
    this.textStyle = { ...this.textStyle, ...textStyle };
    this.updateText(this.currentText);
  }

  /**
   * Parse the input text to identify inline images and text
   */
  private parseText(text: string): string[] {
    const regex = /(\[.*?\])|([^[\]\n]+)|(\n)/g;
    return text.match(regex) || [];
  }

  /**
   * Build PIXI elements based on parsed text
   * @param elements An array of parsed text and image elements
   */
  private buildElements(elements: string[]) {
    let currentPos = new PIXI.Point(0, 0);
    let currentLineHeight = 0;
    let currentLine: PIXI.Container[] = [];

    elements.forEach((element) => {
      const container = this.createElement(element);

      // If the element doesn't fit in the current line, move to the next line
      if (currentPos.x + container.width > this.maxWidth) {
        if (currentLine.length > 0) {
          this.positionElements(currentLine, currentPos.y);
          currentLine = [];
          currentPos.x = 0;
          currentPos.y += currentLineHeight;
          currentLineHeight = 0;
        }
      }

      container.position.set(currentPos.x, currentPos.y);
      currentPos.x += container.width;
      currentLine.push(container);

      if (container.height > currentLineHeight) {
        currentLineHeight = container.height;
      }
    });

    // Position any remaining elements
    if (currentLine.length > 0) {
      this.positionElements(currentLine, currentPos.y);
    }
  }

  /**
   * Create a PIXI element (text or image) based on the parsed element
   */
  private createElement(element: string): PIXI.Container {
    if (element.startsWith('[')) {
      const imageName = element.substring(1, element.length - 1);
      return new PIXI.Sprite(PIXI.Texture.from(imageName));
    } else {
      return new PIXI.Text(element, this.textStyle);
    }
  }

  /**
   * Position elements on the same line at the given y-coordinate
   */
  private positionElements(line: PIXI.Container[], y: number) {
    line.forEach((element) => {
      this.addChild(element);
      element.position.y = y;
    });
  }

  /**
   * Get the current text of the RichText component
   */
  public getText(): string {
    return this.currentText;
  }
}
