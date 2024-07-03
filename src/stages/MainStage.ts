import { ButtonText } from "../components/atoms/ButtonText";
import { Stage } from "../components/elements/Stage";
import { StageNames } from "../configs/GameConfig";
import { MainStageAssetConfig } from "../configs/MainStageAssetConfig";
import { StageManager } from "../managers/StageManager";
import { CardStackStage } from "./CardStackStage";
import { FireParticleStage } from "./FireParticleStage";
import { RandomRichTextStage } from "./RandomRichTextStage";

export class MainStage extends Stage {
  private stageMap = {
    [StageNames.FirstTask]: CardStackStage,
    [StageNames.SecondTask]: RandomRichTextStage,
    [StageNames.ThirdTask]: FireParticleStage,
    [StageNames.Menu]: MainStage
  };

  /** running when loading stage */
  public init() {
    /** create buttontexts */
    new ButtonText({
      x: 640,
      y: 180,
      width: 250,
      height: 130,
      config: MainStageAssetConfig.FirstTaskButtonText.bConfig,
      callback: this.changeStage.bind(this, StageNames.FirstTask),
      parent: this,
      textConfig: MainStageAssetConfig.FirstTaskButtonText.tConfig,
    });

    new ButtonText({
      x: 640,
      y: 360,
      width: 250,
      height: 130,
      config: MainStageAssetConfig.SecondTaskButtonText.bConfig,
      callback: this.changeStage.bind(this, StageNames.SecondTask),
      parent: this,
      textConfig: MainStageAssetConfig.SecondTaskButtonText.tConfig,
    });

    new ButtonText({
      x: 640,
      y: 540,
      width: 250,
      height: 130,
      config: MainStageAssetConfig.ThirdTaskButtonText.bConfig,
      callback: this.changeStage.bind(this, StageNames.ThirdTask),
      parent: this,
      textConfig: MainStageAssetConfig.ThirdTaskButtonText.tConfig,
    });

    this.initDisplayEvents();
  }

  public setVisualPortrait(): void {
    // Set visual elements for portrait orientation if needed -scale or reposition elements-
    // Currently it is not required according the assignment
  }
  public setVisualLandscape(): void {
    // Set visual elements for landscape orientation if needed -scale or reposition elements-
    // Currently it is not required according the assignment
  }

  /**
   * change stage according to stagename
   * @param stage - stage name
   */
  private changeStage(stage: StageNames) {
    // Remove the current stage
    StageManager.instance.removeStage(StageNames.Menu);

    // Start the new stage using the mapped stage handler
    if (this.stageMap[stage]) {
      StageManager.instance.startStage(this.stageMap[stage], stage);
    } else {
      console.error('Invalid stage name provided:', stage);
    }
  }

  /** running when destroying stage*/
  public dispose() {}
}
