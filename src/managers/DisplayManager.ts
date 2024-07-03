import { GameConfig, Orientation } from 'configs/GameConfig';

export class DisplayManager extends PIXI.utils.EventEmitter {
  private renderer!: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
  public static instance: DisplayManager;
  private rendererContainer!: PIXI.Container;
  private currentOrientation!: Orientation;

  private width!: number;
  private height!: number;
  private scaleFactor!: number;

  /**
   * DisplayManager constructor
   * @param {number} w - Display width
   * @param {number} h - Display height
   */
  constructor(w: number, h: number) {
    super();
    DisplayManager.instance = this;
    this.initProperties(w, h);
    this.addResizeEvent();
  }

  /**
   * DisplayManager's init function
   * @param {number} w - Display width
   * @param {number} h - Display height
   */
  private initProperties(w: number, h: number) {
    const app = new PIXI.Application({
      width: w,
      height: h,
      backgroundColor: 0x000000, // backgroundColor = black
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });
    // Create id for canvas
    (app.renderer.view as HTMLCanvasElement).id = 'videoslot';
    // Add child app.view to document.body
    document.body.appendChild(app.view as HTMLCanvasElement);
    this.rendererContainer = app.stage;
    this.renderer = app.renderer;
    this.width = w;
    this.height = h;
    this.scaleFactor = 1;
    this.currentOrientation = Orientation.None;
    // Init event for mobile
    document.body.ontouchend = this.onFullscreenChange.bind(this);
    // Init event for desktop
    document.body.onclick = this.onFullscreenChange.bind(this);
  }

  /**
   * Add event listener for window resize
   */
  private addResizeEvent() {
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize(); // Initial call to set sizes correctly
  }

  /**
   * Handle window resize
   */
  private onResize() {
    const scaleX = window.innerWidth / this.width;
    const scaleY = window.innerHeight / this.height;
    this.scaleFactor = Math.min(scaleX, scaleY);
    this.renderer.resize(window.innerWidth, window.innerHeight);
    this.rendererContainer.scale.set(this.scaleFactor);
    this.rendererContainer.x = (window.innerWidth - this.width * this.scaleFactor) / 2;
    this.rendererContainer.y = (window.innerHeight - this.height * this.scaleFactor) / 2;
    this.emit('resize', { width: this.width * this.scaleFactor, height: this.height * this.scaleFactor });
    this.setOrientationMode();
  }

  /**
   * Sets the orientation mode based on the current resize mode.
   */
  public setOrientationMode(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.currentOrientation = height >= width ? Orientation.Portrait : Orientation.Landscape;
  }

  /**
   * Gets the current orientation.
   */
  public getCurrentOrientation(): Orientation {
    return this.currentOrientation;
  }

  /**
   * Sets the current orientation and emits an orientation change event.
   */
  public setCurrentOrientation(value: Orientation) {
    this.currentOrientation = value;
    this.emit('orientationChanged', value);
    this.onResize();
  }

  public onFullscreenChange() {
    const elem = document.documentElement as HTMLElement & {
      requestFullscreen?: () => Promise<void>;
      mozRequestFullScreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  public getRenderer(): PIXI.WebGLRenderer | PIXI.CanvasRenderer {
    return this.renderer;
  }

  public getRendererContainer() {
    return this.rendererContainer;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public getScaleFactor(): number {
    return this.scaleFactor;
  }
}
