import { StatElement } from "../components/atoms/StatElement";
import { GameConfig, StageNames } from "../configs/GameConfig";
import { DisplayManager } from "../managers/DisplayManager";
import { StageManager } from "../managers/StageManager";
import { TickerManager } from "../managers/TickerManager";
import { MainStage } from "../stages/MainStage";

export class GameController {
  private displayManager: DisplayManager;
  private stageManager: StageManager;

  constructor() {
    //ticker for timer
    new TickerManager();
    //view of the game according to resolution 1280x720
    this.displayManager = new DisplayManager(GameConfig.DisplayResolution.width, GameConfig.DisplayResolution.height);
    //view of the stage according to resolution Display's Resolution
    this.stageManager = new StageManager(0, 0, this.displayManager.getRendererContainer());
    //started to MainStage Stage
    this.stageManager.startStage(MainStage, StageNames.Menu);
    //stat is showing fps performance
    new StatElement();
  }
}
