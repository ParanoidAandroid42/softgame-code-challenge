import * as PIXI from 'pixi.js';

export class Container extends PIXI.Container {
  constructor(x?: number, y?: number, p?: Container, n?: string) {
    super();
    if (n) this.name = n;
    if (p) p.addChild(this);
    if (x) this.position.x = x;
    if (y) this.position.y = y;
  }

  /**
    Container's children sorth. (change z index)
    */
  public sortChildren(): void {
    this.children.sort(function (a: any, b: any) {
      a.zIndex = a.zIndex || 0;
      b.zIndex = b.zIndex || 0;
      return a.zIndex - b.zIndex;
    });
  }
}
