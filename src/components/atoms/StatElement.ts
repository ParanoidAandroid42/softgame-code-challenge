import Stats from 'stats.js';

export class StatElement {
  /**
   * running when loading class
   */
  public constructor() {
    //this is for fps container
    const stats = new Stats();
    document.body.appendChild(stats.dom);
    function animate() {
      stats.begin();
      stats.end();
      requestAnimationFrame(animate);
    }
    animate();
  }

}