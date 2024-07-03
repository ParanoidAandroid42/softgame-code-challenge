export interface RichTextOptions {
  text: string;
  maxWidth: number;
  textStyle?: Partial<PIXI.TextStyle>;
}

export class RichText extends PIXI.Container {
  private _textStyle: Partial<PIXI.TextStyle>;
  private _maxWidth: number;
  private _currentText: string;

  constructor(options: RichTextOptions) {
    super();
    this._textStyle = options.textStyle || {};
    this._maxWidth = options.maxWidth;
    this._currentText = options.text;
    this.updateText(options.text);
  }

  /**
   * Update text with inline images
   * @param text A string that can contain [img1], [img2], etc. for images
   */
  public updateText(text: string) {
    this._currentText = text;
    this.removeChildren();
    const elements = this.parseText(text);
    this.buildElements(elements);
  }

  /**
   * Update text style
   */
  public updateTextStyle(textStyle: Partial<PIXI.TextStyle>) {
    this._textStyle = { ...this._textStyle, ...textStyle };
    this.updateText(this._currentText);
  }

  /**
   * Parse the input text to identify inline images and text
   */
  private parseText(text: string): string[] {
    const regex = /(\[.*?\])|([^[\]\n]+)|(\n)/g;
    const list: string[] = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      list.push(match[0]);
    }
    return list;
  }

  /**
   * Build PIXI elements based on parsed text
   * @param elements An array of parsed text and image elements
   */
  private buildElements(elements: string[]) {
    let currentPos = new PIXI.Point(0, 0);
    let currentLineHeight = 0;
    let currentLine: PIXI.Container[] = [];

    for (const element of elements) {
      const container = this.createElement(element);

      // If the element doesn't fit in the current line, move to the next line
      if (currentPos.x + container.width > this._maxWidth) {
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
    }

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
      return new PIXI.Text(element, this._textStyle);
    }
  }

  /**
   * Position elements on the same line at the given y-coordinate
   */
  private positionElements(line: PIXI.Container[], y: number) {
    for (const element of line) {
      this.addChild(element);
      element.position.y = y;
    }
  }

  /**
   * Get the current text of the RichText component
   */
  public getText(): string {
    return this._currentText;
  }
}
