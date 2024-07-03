import { GameController } from "../controllers/GameController";
import * as PIXI from "pixi.js";

export class ResourceManager {
  constructor() {
    this.initProperties();
  }

  /**
   * ResourceManager manager's init function
   */
  private async initProperties() {
    // Load assets using PIXI.Assets
    await PIXI.Assets.load('assets/sprites/ui.json');
    await PIXI.Assets.load('assets/sprites/particle.png');

    new GameController();
  }
}
