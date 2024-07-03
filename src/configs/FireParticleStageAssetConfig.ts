import { ISpriteConfig } from "interfaces/IAssetConfig";

export class FireParticleStageAssetConfig {
  static MAX_PARTICLES = 10;
  /**wood sprite's config */
  static WoodSPrite: ISpriteConfig = {
    frame: 'fire/wood',
    name: 'wood',
  };

  /**Dark Forest background sprite's config */
  static DarkForestBackgroundSprite: ISpriteConfig = {
    frame: 'fire/dark_forest_bg',
    name: 'dark_forest_bg',
  };

  static FireParticle: ISpriteConfig = {
    frame: 'fire/particle',
    name: 'particle',
  };

  static FireSmallParticles: ISpriteConfig[] = [
    {
      frame: 'fire/fire01',
      name: 'fire01',
    },
    {
      frame: 'fire/fire02',
      name: 'fire02',
    },
    {
      frame: 'fire/fire03',
      name: 'fire03',
    },
  ];

  /**fire general emitter */
  static fireGeneralEmitter = {
    alpha: {
      start: 1,
      end: 0,
    },
    scale: {
      start: 1.4,
      end: 2.2,
      minimumScaleMultiplier: 1,
    },
    color: {
      start: '#d18726',
      end: '#333231',
    },
    speed: {
      start: 100,
      end: 100,
      minimumSpeedMultiplier: 0.5,
    },
    acceleration: {
      x: 0,
      y: 0,
    },
    maxSpeed: 2,
    startRotation: {
      min: -110,
      max: -70,
    },
    noRotation: false,
    rotationSpeed: {
      min: 0,
      max: 0,
    },
    lifetime: {
      min: 0.5,
      max: 0.5,
    },
    blendMode: 'normal',
    frequency: 0.05,
    emitterLifetime: -1,
    maxParticles: FireParticleStageAssetConfig.MAX_PARTICLES,
    pos: {
      x: 0,
      y: -8,
    },
    addAtBack: true,
    spawnType: 'circle',
    spawnCircle: {
      x: 0,
      y: 0,
      r: 5,
    },
  };

  /**fire spark emitter */
  static fireSparkEmitter = {
    alpha: {
      start: 1,
      end: 0,
    },
    scale: {
      start: 0.1,
      end: 0.1,
      minimumScaleMultiplier: 1,
    },
    color: {
      start: '#47150b',
      end: '#333231',
    },
    speed: {
      start: 100,
      end: 100,
      minimumSpeedMultiplier: 0.5,
    },
    acceleration: {
      x: 0,
      y: 0,
    },
    maxSpeed: 2,
    startRotation: {
      min: -110,
      max: -70,
    },
    noRotation: false,
    rotationSpeed: {
      min: 0,
      max: 0,
    },
    lifetime: {
      min: 1.5,
      max: 2,
    },
    blendMode: 'normal',
    frequency: 0.05,
    emitterLifetime: -1,
    maxParticles: FireParticleStageAssetConfig.MAX_PARTICLES,
    pos: {
      x: 0,
      y: -8,
    },
    addAtBack: true,
    spawnType: 'circle',
    spawnCircle: {
      x: 0,
      y: 0,
      r: 5,
    },
  };

  static fireGlowEmitter = {
    alpha: {
      start: 0.25,
      end: 0,
    },
    scale: {
      start: 1,
      end: 1.4,
      minimumScaleMultiplier: 1,
    },
    color: {
      start: '0xa41e1e',
      end: '0xa41e1e',
    },
    speed: {
      start: 100,
      end: 100,
      minimumSpeedMultiplier: 0.5,
    },
    acceleration: {
      x: 0,
      y: 0,
    },
    maxSpeed: 2,
    startRotation: {
      min: -110,
      max: -70,
    },
    noRotation: false,
    rotationSpeed: {
      min: 0,
      max: 0,
    },
    lifetime: {
      min: 1,
      max: 1.5,
    },
    blendMode: 'normal',
    frequency: 0.05,
    emitterLifetime: -1,
    maxParticles: FireParticleStageAssetConfig.MAX_PARTICLES,
    pos: {
      x: 0,
      y: -8,
    },
    addAtBack: true,
    spawnType: 'circle',
    spawnCircle: {
      x: 0,
      y: 0,
      r: 5,
    },
  };
}
