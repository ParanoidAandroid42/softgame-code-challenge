import { Orientation } from "../../configs/GameConfig";
import { Container } from "./Container";
import * as PIXI from 'pixi.js';

export abstract class Stage extends Container {
  public game: any;
  /**
   * displaymanager constructor
   * @param {number} x - Stage's positionX
   * @param {number} y - Stage's positionY
   * @param {number} n - Stage's name
   * @param {number} p - Stage's parent
   */
  constructor(x?: number, y?: number, p?: PIXI.Container, n?: string) {
    super(x, y, p, n);
  }

  /**
   * running when loading stage
   * @param args - any arguments
   */
  public abstract init(...args: any[]): void;

  /**
   * running when destroying stage
   */
  public abstract dispose(): void;
  /*
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
