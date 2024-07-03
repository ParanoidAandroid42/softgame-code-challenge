export interface ContainerOptions {
  x?: number;
  y?: number;
  parent?: PIXI.Container;
  name?: string;
}

export class Container extends PIXI.Container {
  constructor(options: ContainerOptions = {}) {
    super();
    if (options.name) this.name = options.name;
    if (options.parent) options.parent.addChild(this);
    if (options.x !== undefined) this.position.x = options.x;
    if (options.y !== undefined) this.position.y = options.y;
  }

  /**
    Container's children sort. (change z index)
    */
  public sortChildren(): void {
    this.children.sort(function (a: any, b: any) {
      a.zIndex = a.zIndex || 0;
      b.zIndex = b.zIndex || 0;
      return a.zIndex - b.zIndex;
    });
  }
}
