import { Container } from "../components/elements/Container";
import { Stage } from "../components/elements/Stage";
import { StageNames } from "../configs/GameConfig";
import { MainStage } from "../stages/MainStage";

  /** running like dictionary*/
  interface StageCore<T> {
    [K: string]: T;
  }

  export class StageManager {
    private stages: StageCore<Stage> = {};
    private stageContainer: Container;
    public static instance: StageManager;

    /**
     * stage manager's constructor
     * @param {number} x - Stage's PositionX
     * @param {number} y - Stage's PositionY
     * @param {number} p - Stage's Parent
     */
    constructor(x: number, y: number, p: PIXI.Container) {
      StageManager.instance = this;
      this.stageContainer = new Container(x, y, p, 'StageContainer');
    }

    /** creted stage if the stage was not created before.*/
    public createStage(stage: any, stageName: string) {
      if (this.stages[stageName] == null) {
        this.stages[stageName] = new stage();
        this.stages[stageName].name = stageName;
        this.stageContainer.addChild(this.stages[stageName]);
      }
    }

    /**
     * running when menu button up
     */
    public backMenuButtonUp(name: string) {
      StageManager.instance.removeStage(name);
      StageManager.instance.startStage(MainStage, StageNames.Menu);
    }

    /**
     * started stege's init function if the stage was created before.
     * @param {any}  stage - Stage type
     * @param {string} stageName - Stage name for added to stage dictionary
     */
    public startStage(stage: any, stageName: StageNames) {
      this.createStage(stage, stageName);
      this.stages[stageName].init();
    }

    /**
     * @param {string} stageName - Stage name for getting from stage dictionary
     * getting stege' if the stage was created before.
     */
    public getStage(stageName: StageNames): Stage {
      //get stage if the stage was created before.
      return this.stages[stageName];
    }

    /**
     * @param {string} stageName - Stage name for removing from stage dictionary
     * remove stage if the stage was created before.
     */
    public removeStage(stageName: string) {
      this.stages[stageName].dispose();
      this.stages[stageName].destroy({ children: true, baseTexture: true });
      delete this.stages[stageName];
    }

    /**
     * getting main container
     */
    public getStageContainer(): Container {
      return this.stageContainer;
    }
  }
