import { GameController } from "controllers/GameController";

  export class ResourceManager {
    private loader!: PIXI.loaders.Loader;

    /**
     * ResourceManager constructor
     */
    constructor() {
      this.initProperties();
    }

    /**
     * ResourceManager manager's init function
     */
    private initProperties() {
      this.loader = new PIXI.loaders.Loader();
      //created by texture packer
      this.loader.add('assets/sprites/ui.json');
      this.loader.add('camp_wood', 'assets/sprites/camp_wood.png');
      this.loader.load();

      this.loader.onProgress.add(this.onProgress.bind(this));
      this.loader.onError.add(this.onError.bind(this));
      this.loader.onLoad.add(this.onLoad.bind(this));
      this.loader.onComplete.add(this.onComplete.bind(this));
    }

    /**
     * Called once per errored file
     */
    private onError() {}

    /**
     * Called once per loaded file
     */
    private onLoad() {}

    /**
     * Called once when the queued resources all load.
     */
    private onComplete() {
      new GameController();
    }

    /**
     *Called once per loaded/errored file
     */
    private onProgress() {}
  }
