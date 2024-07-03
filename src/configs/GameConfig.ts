/** Stage Names enum*/
export enum StageNames {
  Menu = 'MainStage',
  FirstTask = 'FirstTask',
  SecondTask = 'SecondTaskStage',
  ThirdTask = 'ThirdTaskStage',
}

/**
 * Enum representing the different orientations of the display.
 */
export enum Orientation {
  /** Landscape orientation. */
  Landscape,
  /** Portrait orientation. */
  Portrait,
  /** No specific orientation. */
  None,
}

export class GameConfig {
  /**(this game engine's DisplayResolution = 1280x720)*/
  static DisplayResolution = {
    /* DisplayResolution widht */
    width: 1280,
    /* DisplayResolution height */
    height: 720,
  };
}
