import { Orientation } from "configs/GameConfig";
import { Container, ContainerOptions } from "elements/Container";

export interface StageOptions extends ContainerOptions {
  game?: any;
}

export abstract class Stage extends Container {
  public game: any;

  /**
   * Stage constructor
   * @param options - Stage options
   */
  constructor(options: StageOptions = {}) {
    super(options);
    this.game = options.game;
  }

  /**
   * Running when loading stage
   * @param args - any arguments
   */
  public abstract init(...args: any[]): void;

  /**
   * Running when destroying stage
   */
  public abstract dispose(): void;

  /**
   * Method to be implemented for setting visual elements in portrait orientation.
   */
  public abstract setVisualPortrait(): void;

  /**
   * Method to be implemented for setting visual elements in landscape orientation.
   */
  public abstract setVisualLandscape(): void;

  /**
   * Initializes display events to handle orientation changes.
   */
  public initDisplayEvents(): void {
    this.game && this.game.on('orientationChanged', this.onOrientationChanged.bind(this));
  }

  /**
   * Handles orientation changes and sets visual elements accordingly.
   * @param value - The new orientation value
   */
  public onOrientationChanged(value: any): void {
    switch (value) {
      case Orientation.Landscape:
        this.setVisualLandscape();
        break;
      case Orientation.Portrait:
        this.setVisualPortrait();
        break;
    }
  }
}
