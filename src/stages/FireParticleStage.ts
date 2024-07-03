import { Button } from "../components/atoms/Button";
import { Emitter } from "../components/atoms/Emitter";
import { Sprite } from "../components/atoms/Sprite";
import { Container } from "../components/elements/Container";
import { Stage } from "../components/elements/Stage";
import { FireParticleStageAssetConfig } from "../configs/FireParticleStageAssetConfig";
import { GenericAssetConfig } from "../configs/GenericAssetConfig";
import { StageManager } from "../managers/StageManager";
import * as PIXI from 'pixi.js';
import { SimpleLightmapFilter } from 'pixi-filters';

export class FireParticleStage extends Stage {
  private container!: Container;
  private particleContainer!: Container;
  private particleFogContainer!: Container;
  private particleAddContainer!: Container;
  private particleGlowContainer!: Container;
  private particleSparksContainer!: Container;

  private woodSprite!: Sprite;

  private fEmitter!: Emitter;
  private aEmitter!: Emitter;
  private gEmitter!: Emitter;
  private sEmitter!: Emitter;

  /** Called when loading the stage */
  public init() {
    // Create the main container
    this.container = new Container(0, 0, this, 'Container');

    // Create the wood sprite
    this.woodSprite = new Sprite(722, 613, 200, 75, FireParticleStageAssetConfig.WoodSPrite, this.container);

    // Create containers for particles
    this.particleContainer = new Container(718, 607, this.container, 'ParticleContainer');
    this.particleContainer.scale.set(2, 2);
    this.particleFogContainer = new Container(0, -25, this.particleContainer, 'particleFogContainer');
    this.particleSparksContainer = new Container(0, -45, this.particleContainer, 'particleSparksContainer');
    this.particleSparksContainer.scale.set(2, 1);
    this.particleGlowContainer = new Container(0, 0, this.particleContainer, 'particleGlowContainer');
    this.particleAddContainer = new Container(0, 0, this.particleContainer, 'particleAddContainer');

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

    const smallParticles = FireParticleStageAssetConfig.FireSmallParticles.map((p) => p.frame);

    // Create particle emitters
    this.fEmitter = new Emitter(smallParticles, FireParticleStageAssetConfig.fireGeneralEmitter, this.particleFogContainer);
    this.gEmitter = new Emitter(smallParticles, FireParticleStageAssetConfig.fireGlowEmitter, this.particleGlowContainer);

    this.aEmitter = new Emitter(smallParticles, FireParticleStageAssetConfig.fireGeneralEmitter, this.particleAddContainer);
    this.aEmitter.particleBlendMode = PIXI.BLEND_MODES.ADD;

    this.sEmitter = new Emitter(
      FireParticleStageAssetConfig.FireParticle.frame,
      FireParticleStageAssetConfig.fireSparkEmitter,
      this.particleAddContainer,
    );

    // Add filters to the wood sprite
    const particleTexture = PIXI.Texture.from(FireParticleStageAssetConfig.FireParticle.frame);
    const simpleLightFilterBlack = new SimpleLightmapFilter(particleTexture, 0x0);
    const simpleLightFilterSunshine = new SimpleLightmapFilter(particleTexture, 0xca7e40);
    this.woodSprite.filters = [simpleLightFilterSunshine, simpleLightFilterBlack];
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

  /** Called when destroying the stage */
  public dispose() {
    this.fEmitter.destroy();
    this.gEmitter.destroy();
    this.aEmitter.destroy();
    this.sEmitter.destroy();
  }
}
