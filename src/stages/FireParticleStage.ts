import { Button } from 'atoms/Button';
import { Emitter } from 'atoms/Emitter';
import { Sprite } from 'atoms/Sprite';
import { Container } from 'elements/Container';
import { Stage } from 'elements/Stage';
import { FireParticleStageAssetConfig } from 'configs/FireParticleStageAssetConfig';
import { GenericAssetConfig } from 'configs/GenericAssetConfig';
import { StageManager } from 'managers/StageManager';

export class FireParticleStage extends Stage {
  private container!: Container;
  private particleContainer!: Container;
  private particleFogContainer!: Container;
  private particleAddContainer!: Container;
  private particleGlowContainer!: Container;
  private particleSparksContainer!: Container;

  private fEmitter!: Emitter;
  private aEmitter!: Emitter;
  private gEmitter!: Emitter;
  private sEmitter!: Emitter;

  /** Called when loading the stage */
  public init() {
    // Create the main container
    this.container = new Container({
      x: 0,
      y: 0,
      name: 'FireParticleStage',
      parent: this,
    });

    // Create the wood sprite
    // Create the wood sprite
    const woodSprite = new Sprite({
      x: 640,
      y: 613,
      width: 200,
      height: 75,
      config: FireParticleStageAssetConfig.WoodSPrite,
      parent: this.container,
    });

    // Create containers for particles
    this.particleContainer = new Container({
      x: 640,
      y: 607,
      parent: this.container,
      name: 'ParticleContainer',
    });
    this.particleContainer.scale.set(2, 2);

    this.particleFogContainer = new Container({
      x: 0,
      y: -25,
      parent: this.particleContainer,
      name: 'particleFogContainer',
    });

    this.particleSparksContainer = new Container({
      x: 0,
      y: -45,
      parent: this.particleContainer,
      name: 'particleSparksContainer',
    });
    this.particleSparksContainer.scale.set(2, 1);

    this.particleGlowContainer = new Container({
      x: 0,
      y: 0,
      parent: this.particleContainer,
      name: 'particleGlowContainer',
    });

    this.particleAddContainer = new Container({
      x: 0,
      y: 0,
      parent: this.particleContainer,
      name: 'particleAddContainer',
    });

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
    const particleTexture = PIXI.Texture.fromFrame(FireParticleStageAssetConfig.FireParticle.name);
    const simpleLightFilterBlack = new PIXI.filters.SimpleLightmapFilter(particleTexture, 0x0);
    const simpleLightFilterSunshine = new PIXI.filters.SimpleLightmapFilter(particleTexture, 0xca7e40);
    woodSprite.filters = [simpleLightFilterSunshine, simpleLightFilterBlack];
    this.initDisplayEvents();
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
