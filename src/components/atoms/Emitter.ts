export class Emitter extends PIXI.particles.Emitter {
  constructor(particleTextures: string | string[], emitterConfig: any, p: PIXI.Container) {
    super(p, particleTextures, emitterConfig);

    let elapsed = Date.now();
    PIXI.ticker.shared.add(() => {
      const now = Date.now();
      const delta = (now - elapsed) * 0.0008;
      this.update(delta);
      elapsed = now;
    });
  }

  // Start emitting particles
  public start() {
    this.emit = true;
  }

  // Stop emitting particles
  public stop() {
    this.emit = false;
  }
}
