import { DisplayObject } from "pixi.js";
import { Button } from "atoms/Button";
import { ButtonText } from "atoms/ButtonText";
import { Sprite } from "atoms/Sprite";
import { Container } from "elements/Container";
import { Stage } from "elements/Stage";
import { CardStackStageAssetConfig } from "configs/CardStackStageAssetConfig";
import { CardStackStageConfig } from "configs/CardStackStageConfig";
import { GenericAssetConfig } from "configs/GenericAssetConfig";
import { DisplayManager } from "managers/DisplayManager";
import { StageManager } from "managers/StageManager";
import { TimelineMax } from "gsap";

export class CardStackStage extends Stage {
  private container!: Container;
  private cards: Sprite[] = [];
  private displayWidth = DisplayManager.instance.getWidth();
  private displayHeight = DisplayManager.instance.getHeight();
  private animationTimeline: TimelineMax = new TimelineMax({ paused: true });
  private restartButton!: ButtonText;
  private restart: boolean = false;

  /** Called when loading the stage */
  public init() {
    // Create the main container
    this.container = new Container({
      x: 0,
      y: 0,
      name: 'CardStackStage',
    });
    this.restartButton = new ButtonText({
      x: 640,
      y: 654,
      width: 200,
      height: 100,
      config: CardStackStageAssetConfig.RestartButton.bConfig,
      callback: this.cardButtonUp.bind(this),
      parent: this.container,
      textConfig: CardStackStageAssetConfig.RestartButton.tConfig,
    });
    this.restartButton.isEnabled = false;

    // Create the menu button
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

    // Create card assets
    this.createCardAssets(CardStackStageConfig.CardCounter);
    this.initDisplayEvents();
  }

  /** Handler for card button click */
  private cardButtonUp() {
    this.restart = !this.restart;

    if (this.restart) {
      this.restartButton.textAsset.setTextConfig(CardStackStageAssetConfig.RestartText);
      this.animationTimeline.play();
    } else {
      this.restartButton.textAsset.setTextConfig(CardStackStageAssetConfig.PlayText);
      this.animationTimeline.restart();
      this.animationTimeline.paused(true);
    }
  }

  /** Sequentially animates each card with a 1-second delay */
  private playCardAnimations() {
    // Clear any previous animations if they exist
    this.animationTimeline.clear();

    for (let i = 0, l = this.cards.length; i < l; i++) {
      const card = this.cards[l - 1 - i]; // Get card from the end to the start
      const yOffset = i * 1.5;
      const rotationAngle = (Math.random() - 0.5) * 0.2;

      // Start each card's animation with a staggered delay
      this.animationTimeline.to(
        card,
        CardStackStageConfig.CardAnimationDuration,
        {
          x: (5 / 6) * this.displayWidth,
          y: this.displayHeight / 3 + yOffset,
          rotation: rotationAngle,
          onStart: () => {
            this.container.addChild(card as unknown as DisplayObject);
          },
        },
        i * CardStackStageConfig.CardAnimationDelay,
      );
    }
  }

  /** Creates card assets initially */
  private createCardAssets(totalCards: number) {
    for (let i = 0; i < totalCards; i++) {
      const x = this.displayWidth / 6;
      const y = this.displayHeight / 3 + i * 1.5;
      const rotationAngle = (Math.random() - 0.5) * 0.1;
      const card = new Sprite({
        x,
        y,
        width:196,
        height:281,
        config: CardStackStageAssetConfig.CardSprite,
        parent: this.container,
      });
      card.rotation = rotationAngle;
      this.cards.push(card);
      this.container.addChild(card);
    }
    this.restartButton.isEnabled = true;
    this.playCardAnimations(); // Start animation
  }

  /** Called when destroying the stage */
  public dispose() {
    this.animationTimeline.kill();
    this.cards.forEach((card) => card.destroy());
  }

  public setVisualPortrait(): void {
    // Set visual elements for portrait orientation if needed -scale or reposition elements-
    // Currently it is not required according the assignment
  }
  public setVisualLandscape(): void {
    // Set visual elements for landscape orientation if needed -scale or reposition elements-
    // Currently it is not required according the assignment
  }
}
