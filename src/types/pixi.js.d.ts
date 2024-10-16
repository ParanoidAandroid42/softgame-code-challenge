// Type definitions for Pixi.js 4.8.2
// Project: https://github.com/pixijs/pixi.js/tree/dev
// Definitions by: clark-stevenson <https://github.com/pixijs/pixi-typescript>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PIXI {
    // from CONST
    export const VERSION: typeof CONST.VERSION;
    export const PI_2: typeof CONST.PI_2;
    export const RAD_TO_DEG: typeof CONST.RAD_TO_DEG;
    export const DEG_TO_RAD: typeof CONST.DEG_TO_RAD;
    export const RENDERER_TYPE: typeof CONST.RENDERER_TYPE;
    export const BLEND_MODES: typeof CONST.BLEND_MODES;
    export const DRAW_MODES: typeof CONST.DRAW_MODES;
    export const SCALE_MODES: typeof CONST.SCALE_MODES;
    export const WRAP_MODES: typeof CONST.WRAP_MODES;
    export const TRANSFORM_MODE: typeof CONST.TRANSFORM_MODE;
    export const PRECISION: typeof CONST.PRECISION;
    export const GC_MODES: typeof CONST.GC_MODES;
    export const SHAPES: typeof CONST.SHAPES;
    export const TEXT_GRADIENT: typeof CONST.TEXT_GRADIENT;
    export const UPDATE_PRIORITY: typeof CONST.UPDATE_PRIORITY;

    export function autoDetectRenderer(
        width: number,
        height: number,
        options?: PIXI.RendererOptions,
        forceCanvas?: boolean
    ): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    export function autoDetectRenderer(options?: PIXI.RendererOptions): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    export const loader: PIXI.loaders.Loader;

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////SETTINGS///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace settings {
        export let TARGET_FPMS: number;
        export let MIPMAP_TEXTURES: boolean;
        export let RESOLUTION: number;
        export let FILTER_RESOLUTION: number;
        export let SPRITE_MAX_TEXTURES: number;
        export let SPRITE_BATCH_SIZE: number;
        export let RETINA_PREFIX: RegExp;
        export const RENDER_OPTIONS: {
            view: HTMLCanvasElement | null;
            antialias: boolean;
            forceFXAA: boolean;
            autoResize: boolean;
            transparent: boolean;
            backgroundColor: number;
            clearBeforeRender: boolean;
            preserveDrawingBuffer: boolean;
            roundPixels: boolean;
            width: number;
            height: number;
            legacy: boolean;
        };
        export let TRANSFORM_MODE: number;
        export let GC_MODE: number;
        export let GC_MAX_IDLE: number;
        export let GC_MAX_CHECK_COUNT: number;
        export let WRAP_MODE: number;
        export let SCALE_MODE: number;
        export let PRECISION_VERTEX: string;
        export let PRECISION_FRAGMENT: string;
        export let PRECISION: string;
        export let UPLOADS_PER_FRAME: number;
        export let CAN_UPLOAD_SAME_BUFFER: boolean;
        export let MESH_CANVAS_PADDING: number;
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////ACCESSIBILITY////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace accessibility {
        // accessibility
        export class AccessibilityManager {
            constructor(renderer: CanvasRenderer | WebGLRenderer);

            public activate(): void;
            public deactivate(): void;

            protected div: HTMLElement;
            protected pool: HTMLElement[];
            protected renderId: number;
            debug: boolean;
            renderer: SystemRenderer;
            protected children: AccessibleTarget[];
            protected isActive: boolean;

            protected updateAccessibleObjects(displayObject: DisplayObject): void;
            protected update(): void;
            protected capHitArea(hitArea: HitArea): void;
            protected addChild(displayObject: DisplayObject): void;
            protected _onClick(e: interaction.InteractionEvent): void;
            protected _onFocus(e: interaction.InteractionEvent): void;
            protected _onFocusOut(e: interaction.InteractionEvent): void;
            protected _onKeyDown(e: interaction.InteractionEvent): void;
            protected _onMouseMove(e: MouseEvent): void;

            destroy(): void;
        }
        export interface AccessibleTarget {
            accessible: boolean;
            accessibleTitle: string | null;
            accessibleHint: string | null;
            tabIndex: number;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////CORE//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // const

    export namespace CONST {
        export const VERSION: string;
        export const PI_2: number;
        export const RAD_TO_DEG: number;
        export const DEG_TO_RAD: number;
        export const TARGET_FPMS: number;
        export const RENDERER_TYPE: {
            UNKNOWN: number;
            WEBGL: number;
            CANVAS: number;
        };
        export const BLEND_MODES: {
            NORMAL: number;
            ADD: number;
            MULTIPLY: number;
            SCREEN: number;
            OVERLAY: number;
            DARKEN: number;
            LIGHTEN: number;
            COLOR_DODGE: number;
            COLOR_BURN: number;
            HARD_LIGHT: number;
            SOFT_LIGHT: number;
            DIFFERENCE: number;
            EXCLUSION: number;
            HUE: number;
            SATURATION: number;
            COLOR: number;
            LUMINOSITY: number;
            NORMAL_NPM: number;
            ADD_NPM: number;
            SCREEN_NPM: number;
        };
        export const DRAW_MODES: {
            POINTS: number;
            LINES: number;
            LINE_LOOP: number;
            LINE_STRIP: number;
            TRIANGLES: number;
            TRIANGLE_STRIP: number;
            TRIANGLE_FAN: number;
        };
        export const SCALE_MODES: {
            LINEAR: number;
            NEAREST: number;
        };
        export const GC_MODES: {
            AUTO: number;
            MANUAL: number;
        };
        export const WRAP_MODES: {
            CLAMP: number;
            MIRRORED_REPEAT: number;
            REPEAT: number;
        };
        export const TRANSFORM_MODE: {
            DEFAULT: number;
            DYNAMIC: number;
            STATIC: number;
        };
        export const URL_FILE_EXTENSION: RegExp | string;
        export const DATA_URI: RegExp | string;
        export const SVG_SIZE: RegExp | string;
        export const SHAPES: {
            POLY: number;
            RECT: number;
            CIRC: number;
            ELIP: number;
            RREC: number;
        };
        export const PRECISION: {
            LOW: string;
            MEDIUM: string;
            HIGH: string;
        };
        export const TEXT_GRADIENT: {
            LINEAR_VERTICAL: number;
            LINEAR_HORIZONTAL: number;
        };
        export const UPDATE_PRIORITY: {
            INTERACTION: number;
            HIGH: number;
            NORMAL: number;
            LOW: number;
            UTILITY: number;
        };
    }

    // display

    export interface StageOptions {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }

    export class Application {
        constructor(options?: {
            autoStart?: boolean;
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            preserveDrawingBuffer?: boolean;
            resolution?: number;
            forceCanvas?: boolean;
            backgroundColor?: number;
            clearBeforeRender?: boolean;
            forceFXAA?: boolean;
            powerPreference?: string;
            sharedTicker?: boolean;
            sharedLoader?: boolean;
            resizeTo?: Window | HTMLElement;
        });

        private _ticker: ticker.Ticker;

        renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
        stage: Container;
        ticker: ticker.Ticker;
        loader: loaders.Loader;
        readonly screen: Rectangle;

        stop(): void;
        start(): void;
        render(): void;
        destroy(removeView?: boolean, stageOptions?: StageOptions | boolean): void;
        readonly view: HTMLCanvasElement;
    }

    export interface DestroyOptions {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }
    export class Bounds {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        rect: Rectangle;

        isEmpty(): boolean;
        clear(): void;

        getRectangle(rect?: Rectangle): Rectangle;
        addPoint(point: Point): void;
        addQuad(vertices: ArrayLike<number>): Bounds | undefined;
        addFrame(transform: Transform, x0: number, y0: number, x1: number, y1: number): void;
        addVertices(transform: Transform, vertices: ArrayLike<number>, beginOffset: number, endOffset: number): void;
        addBounds(bounds: Bounds): void;
        addBoundsMask(bounds: Bounds, mask: Bounds): void;
        addBoundsArea(bounds: Bounds, area: Rectangle): void;
    }
    export class Container extends DisplayObject {
        // begin extras.getChildByName
        getChildByName(name: string): DisplayObject;
        // end extras.getChildByName

        children: DisplayObject[];
        width: number;
        height: number;

        protected onChildrenChange: (...args: any[]) => void;
        addChild<T extends DisplayObject>(child: T, ...additionalChildren: DisplayObject[]): T;
        addChildAt<T extends DisplayObject>(child: T, index: number): T;
        swapChildren(child: DisplayObject, child2: DisplayObject): void;
        getChildIndex(child: DisplayObject): number;
        setChildIndex(child: DisplayObject, index: number): void;
        getChildAt(index: number): DisplayObject;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
        updateTransform(): void;
        calculateBounds(): void;
        protected _calculateBounds(): void;
        protected containerUpdateTransform(): void;
        renderWebGL(renderer: WebGLRenderer): void;
        renderAdvancedWebGL(renderer: WebGLRenderer): void;
        protected _renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        renderCanvas(renderer: CanvasRenderer): void;
        destroy(options?: DestroyOptions | boolean): void;

        once(event: 'added' | 'removed', fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        once(event: string, fn: Function, context?: any): this;
        on(event: 'added' | 'removed', fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        on(event: string, fn: Function, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        off(event: 'added' | 'removed' | string, fn?: Function, context?: any): this;
    }

    export class DisplayObject extends utils.EventEmitter implements interaction.InteractiveTarget, accessibility.AccessibleTarget {
        // begin extras.cacheAsBitmap
        protected _cacheAsBitmap: boolean;
        protected _cacheData: boolean;
        cacheAsBitmap: boolean;
        protected _renderCachedWebGL(renderer: WebGLRenderer): void;
        protected _initCachedDisplayObject(renderer: WebGLRenderer): void;
        protected _renderCachedCanvas(renderer: CanvasRenderer): void;
        protected _initCachedDisplayObjectCanvas(renderer: CanvasRenderer): void;
        protected _calculateCachedBounds(): Rectangle;
        protected _getCachedLocalBounds(): Rectangle;
        protected _destroyCachedDisplayObject(): void;
        protected _cacheAsBitmapDestroy(options: boolean | any): void;
        // end extras.cacheAsBitmap

        // begin extras.getChildByName
        name: string | null;
        // end extras.getChildByName

        // begin extras.getGlobalPosition
        getGlobalPosition(point?: Point, skipUpdate?: boolean): Point;
        // end extras.getGlobalPosition

        // begin accessible target
        accessible: boolean;
        accessibleTitle: string | null;
        accessibleHint: string | null;
        tabIndex: number;
        // end accessible target

        // begin interactive target
        interactive: boolean;
        interactiveChildren: boolean;
        hitArea: PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle | PIXI.HitArea;
        buttonMode: boolean;
        cursor: string;
        trackedPointers: { [key: number]: interaction.InteractionTrackingData };
        // depricated
        defaultCursor: string;
        // end interactive target

        transform: TransformBase;
        alpha: number;
        visible: boolean;
        renderable: boolean;
        parent: Container;
        worldAlpha: number;
        filterArea: Rectangle | null;
        protected _filters: Filter<any>[] | null;
        protected _enabledFilters: Filter<any>[] | null;
        protected _bounds: Bounds;
        protected _boundsID: number;
        protected _lastBoundsID: number;
        protected _boundsRect: Rectangle;
        protected _localBoundsRect: Rectangle;
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        protected readonly _destroyed: boolean;
        x: number;
        y: number;
        worldTransform: Matrix;
        localTransform: Matrix;
        position: Point | ObservablePoint;
        scale: Point | ObservablePoint;
        pivot: Point | ObservablePoint;
        skew: ObservablePoint;
        rotation: number;
        worldVisible: boolean;
        mask: PIXI.Graphics | PIXI.Sprite | null;
        filters: Filter<any>[] | null;

        updateTransform(): void;
        protected displayObjectUpdateTransform(): void;
        protected _recursivePostUpdateTransform(): void;
        getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
        getLocalBounds(rect?: Rectangle): Rectangle;
        //creates and returns a new point
        toGlobal(position: PointLike): Point;
        //modifies the x and y of the passed point and returns it
        toGlobal<T extends PointLike>(position: PointLike, point?: T, skipUpdate?: boolean): T;
        //creates and returns a new point
        toLocal(position: PointLike, from?: DisplayObject): Point;
        //modifies the x and y of the passed point and returns it
        toLocal<T extends PointLike>(position: PointLike, from?: DisplayObject, point?: T, skipUpdate?: boolean): T;
        renderWebGL(renderer: WebGLRenderer): void;
        renderCanvas(renderer: CanvasRenderer): void;
        setParent(container: Container): Container;
        setTransform(
            x?: number,
            y?: number,
            scaleX?: number,
            scaleY?: number,
            rotation?: number,
            skewX?: number,
            skewY?: number,
            pivotX?: number,
            pivotY?: number
        ): DisplayObject;
        destroy(): void;

        on(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        once(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        removeListener(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        removeAllListeners(event?: interaction.InteractionEventTypes): this;
        off(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        addListener(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
    }

    export class TransformBase {
        static IDENTITY: TransformBase;

        worldTransform: Matrix;
        localTransform: Matrix;
        protected _worldID: number;
        updateLocalTransform(): void;
        updateTransform(parentTransform: TransformBase): void;
        updateWorldTransform(parentTransform: TransformBase): void;
    }
    export class TransformStatic extends TransformBase {
        position: ObservablePoint;
        scale: ObservablePoint;
        pivot: ObservablePoint;
        skew: ObservablePoint;

        protected _rotation: number;
        protected _sr?: number;
        protected _cr?: number;
        protected _cy?: number;
        protected _sy?: number;
        protected _nsx?: number;
        protected _cx?: number;
        protected _currentLocalID: number;

        protected onChange(): void;
        updateSkew(): void;
        updateLocalTransform(): void;
        updateTransform(parentTransform: TransformBase): void;
        setFromMatrix(matrix: Matrix): void;

        rotation: number;
    }
    export class Transform extends TransformBase {
        constructor();

        position: Point;
        scale: Point;
        skew: ObservablePoint;
        pivot: Point;

        protected _rotation: number;
        protected _sr?: number;
        protected _cr?: number;
        protected _cy?: number;
        protected _sy?: number;
        protected _sx?: number;
        protected _cx?: number;

        updateSkew(): void;
        setFromMatrix(matrix: Matrix): void;

        rotation: number;
    }

    // graphics

    export class GraphicsData {
        constructor(
            lineWidth: number,
            lineColor: number,
            lineAlpha: number,
            fillColor: number,
            fillAlpha: number,
            fill: boolean,
            nativeLines: boolean,
            shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any,
            lineAlignment?: number
        );

        lineWidth: number;
        lineAlignment: number;
        nativeLines: boolean;
        lineColor: number;
        lineAlpha: number;
        protected _lineTint: number;
        fillColor: number;
        fillAlpha: number;
        protected _fillTint: number;
        fill: boolean;
        protected holes: Circle[] | Rectangle[] | Ellipse[] | Polygon[] | RoundedRectangle[] | any[];
        shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any;
        type?: number;
        clone(): GraphicsData;
        addHole(shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any): void;
        destroy(options?: DestroyOptions | boolean): void;
    }
    export class Graphics extends Container {
        static CURVES: {
            adaptive: boolean;
            maxLength: number;
            minSegments: number;
            maxSegments: number;
        };

        constructor(nativeLines?: boolean);

        fillAlpha: number;
        lineWidth: number;
        nativeLines: boolean;
        lineColor: number;
        lineAlignment: number;
        protected graphicsData: GraphicsData[];
        tint: number;
        protected _prevTint: number;
        blendMode: number;
        currentPath: GraphicsData;
        protected _webGL: any;
        isMask: boolean;
        boundsPadding: number;
        protected _localBounds: Bounds;
        dirty: number;
        canvasTintDirty: number;
        fastRectDirty: number;
        clearDirty: number;
        boundsDirty: number;
        protected cachedSpriteDirty: boolean;
        protected _spriteRect: Rectangle;
        protected _fastRect: boolean;

        static _SPRITE_TEXTURE: Texture;

        clone(): Graphics;
        protected _quadraticCurveLength(fromX: number, fromY: number, cpX: number, cpY: number, toX: number, toY: number): number;
        protected _bezierCurveLength(
            fromX: number,
            fromY: number,
            cpX: number,
            cpY: number,
            cpX2: number,
            cpY2: number,
            toX: number,
            toY: number
        ): number;
        protected _segmentsCount(length: number): number;
        lineStyle(lineWidth?: number, color?: number, alpha?: number, alignment?: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        lineTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics;
        beginFill(color: number, alpha?: number): Graphics;
        endFill(): Graphics;
        drawRect(x: number, y: number, width: number, height: number): Graphics;
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
        drawCircle(x: number, y: number, radius: number): Graphics;
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;
        drawPolygon(path: number[] | Point[] | Polygon): Graphics;
        drawStar(x: number, y: number, points: number, radius: number, innerRadius: number, rotation?: number): Graphics;
        clear(): Graphics;
        isFastRect(): boolean;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        protected _calculateBounds(): Rectangle;
        protected _renderSpriteRect(renderer: PIXI.SystemRenderer): void;
        containsPoint(point: Point): boolean;
        updateLocalBounds(): void;
        drawShape(shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any): GraphicsData;
        generateCanvasTexture(scaleMode?: number, resolution?: number): Texture;
        closePath(): Graphics;
        addHole(): Graphics;
        destroy(options?: DestroyOptions | boolean): void;
    }
    export class CanvasGraphicsRenderer {
        constructor(renderer: SystemRenderer);
        render(graphics: Graphics): void;
        protected updateGraphicsTint(graphics: Graphics): void;
        protected renderPolygon(points: Point[], close: boolean, context: CanvasRenderingContext2D): void;
        destroy(): void;
    }
    export class GraphicsRenderer extends ObjectRenderer {
        constructor(renderer: PIXI.CanvasRenderer);

        protected graphicsDataPool: GraphicsData[];
        protected primitiveShader: PrimitiveShader;
        gl: WebGLRenderingContext;

        CONTEXT_UID: number;

        destroy(): void;
        render(graphics: Graphics): void;
        protected updateGraphics(graphics: PIXI.Graphics): void;
        getWebGLData(webGL: WebGLRenderingContext, type: number, nativeLines: number): WebGLGraphicsData;
    }
    export class WebGLGraphicsData {
        constructor(gl: WebGLRenderingContext, shader: glCore.GLShader, attribsState: glCore.AttribState);

        gl: WebGLRenderingContext;
        color: number[];
        points: Point[];
        indices: number[];
        buffer: WebGLBuffer;
        indexBuffer: WebGLBuffer;
        dirty: boolean;
        glPoints: number[];
        glIndices: number[];
        shader: glCore.GLShader;
        vao: glCore.VertexArrayObject;
        nativeLines: boolean;

        reset(): void;
        upload(): void;
        destroy(): void;
    }
    export class PrimitiveShader extends glCore.GLShader { }

    // math

    export namespace GroupD8 {
        export const E: number;
        export const SE: number;
        export const S: number;
        export const SW: number;
        export const W: number;
        export const NW: number;
        export const N: number;
        export const NE: number;
        export const MIRROR_HORIZONTAL: number;
        export const MIRROR_VERTICAL: number;

        export function uX(ind: number): number;
        export function uY(ind: number): number;
        export function vX(ind: number): number;
        export function vY(ind: number): number;
        export function inv(rotation: number): number;
        export function add(rotationSecond: number, rotationFirst: number): number;
        export function sub(rotationSecond: number, rotationFirst: number): number;
        export function rotate180(rotation: number): number;
        export function isVertical(rotation: number): boolean;
        export function byDirection(dx: number, dy: number): number;
        export function matrixAppendRotationInv(matrix: Matrix, rotation: number, tx: number, ty: number): void;
    }
    export class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;

        fromArray(array: number[]): void;
        set(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        toArray(transpose?: boolean, out?: number[]): number[];
        apply(pos: Point, newPos?: Point): Point;
        applyInverse(pos: Point, newPos?: Point): Point;
        translate(x: number, y: number): Matrix;
        scale(x: number, y: number): Matrix;
        rotate(angle: number): Matrix;
        append(matrix: Matrix): Matrix;
        setTransform(
            x: number,
            y: number,
            pivotX: number,
            pivotY: number,
            scaleX: number,
            scaleY: number,
            rotation: number,
            skewX: number,
            skewY: number
        ): PIXI.Matrix;
        prepend(matrix: Matrix): Matrix;
        invert(): Matrix;
        identity(): Matrix;
        decompose(transform: TransformBase): TransformBase;
        clone(): Matrix;
        copy(matrix: Matrix): Matrix;

        static IDENTITY: Matrix;
        static TEMP_MATRIX: Matrix;
    }

    class PointLike {
        x: number;
        y: number;

        set(x?: number, y?: number): void;
        copy(point: PointLike): void;
    }

    export class ObservablePoint extends PointLike {
        constructor(cb: () => any, scope?: any, x?: number, y?: number);

        clone(cb?: Function, scope?: any): ObservablePoint;
        equals(p: Point | ObservablePoint | PointLike): boolean;
        cb: () => any;
        scope: any;
    }

    export class Point extends PointLike {
        constructor(x?: number, y?: number);

        clone(): Point;
        equals(p: PointLike): boolean;
    }

    export interface HitArea {
        contains(x: number, y: number): boolean;
    }
    export class Circle implements HitArea {
        constructor(x?: number, y?: number, radius?: number);

        x: number;
        y: number;
        radius: number;
        type: number;

        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }
    export class Ellipse implements HitArea {
        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;

        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }
    export class Polygon implements HitArea {
        constructor(points: Point[] | number[]);
        // Note - Rest Params cannot be combined with |
        //tslint:disable-next-line:unified-signatures
        constructor(...points: Point[]);
        //tslint:disable-next-line:unified-signatures
        constructor(...points: number[]);

        closed: boolean;
        points: number[];
        type: number;

        clone(): Polygon;
        contains(x: number, y: number): boolean;
        close(): void;
    }
    export class Rectangle implements HitArea {
        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;
        left: number;
        right: number;
        top: number;
        bottom: number;

        static EMPTY: Rectangle;

        clone(): Rectangle;
        copy(rectangle: Rectangle): Rectangle;
        contains(x: number, y: number): boolean;
        pad(paddingX: number, paddingY: number): void;
        fit(rectangle: Rectangle): void;
        enlarge(rectangle: Rectangle): void;
    }
    export class RoundedRectangle implements HitArea {
        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        type: number;

        clone(): RoundedRectangle;
        contains(x: number, y: number): boolean;
    }

    // renderers

    export interface RendererOptions {
        /**
         * the width of the renderers view [default=800]
         */
        width?: number;

        /**
         * the height of the renderers view [default=600]
         */
        height?: number;

        /**
         * the canvas to use as a view, optional
         */
        view?: HTMLCanvasElement;

        /**
         * If the render view is transparent, [default=false]
         */
        transparent?: boolean;

        /**
         * sets antialias (only applicable in chrome at the moment) [default=false]
         */
        antialias?: boolean;

        /**
         * enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context [default=false]
         */
        preserveDrawingBuffer?: boolean;

        /**
         * The resolution / device pixel ratio of the renderer, retina would be 2 [default=1]
         */
        resolution?: number;

        /**
         * prevents selection of WebGL renderer, even if such is present [default=false]
         */
        forceCanvas?: boolean;

        /**
         * The background color of the rendered area (shown if not transparent) [default=0x000000]
         */
        backgroundColor?: number;

        /**
         * This sets if the renderer will clear the canvas or not before the new render pass. [default=true]
         */
        clearBeforeRender?: boolean;

        /**
         * If true Pixi will Math.floor() x/ y values when rendering, stopping pixel interpolation. [default=false]
         */
        roundPixels?: boolean;

        /**
         * forces FXAA antialiasing to be used over native FXAA is faster, but may not always look as great ** webgl only** [default=false]
         */
        forceFXAA?: boolean;

        /**
         * `true` to ensure compatibility with older / less advanced devices. If you experience unexplained flickering try setting this to true. **webgl only** [default=false]
         */
        legacy?: boolean;

        /**
         * Deprecated
         */
        context?: WebGLRenderingContext;

        /**
         * Deprecated
         */
        autoResize?: boolean;

        /**
         * Parameter passed to webgl context, set to "high-performance" for devices with dual graphics card
         */
        powerPreference?: string;
    }

    export interface ApplicationOptions extends RendererOptions {
        /**
         * `true` to use PIXI.ticker.shared, `false` to create new ticker. [default=false]
         */
        sharedTicker?: boolean;

        /**
         * `true` to use PIXI.loaders.shared, `false` to create new Loader.
         */
        sharedLoader?: boolean;

        /**
         * automatically starts the rendering after the construction.
         * Note that setting this parameter to false does NOT stop the shared ticker even if you set
         * options.sharedTicker to true in case that it is already started. Stop it by your own.
         */
        autoStart?: boolean;
    }

    interface DefaultRendererPlugins {
        accessibility: accessibility.AccessibilityManager;
        interaction: interaction.InteractionManager;
    }
    export interface RendererPlugins extends DefaultRendererPlugins { }
    export class SystemRenderer extends utils.EventEmitter {
        constructor(system: string, options?: RendererOptions);
        constructor(system: string, screenWidth?: number, screenHeight?: number, options?: RendererOptions);

        type: number;
        options: RendererOptions;
        screen: Rectangle;
        readonly width: number;
        readonly height: number;
        view: HTMLCanvasElement;
        resolution: number;
        transparent: boolean;
        autoResize: boolean;
        blendModes: any; // todo?
        preserveDrawingBuffer: boolean;
        clearBeforeRender: boolean;
        roundPixels: boolean;
        backgroundColor: number;
        protected _backgroundColor: number;
        protected _backgroundColorRgba: number[];
        protected _backgroundColorString: string;
        protected _tempDisplayObjectParent: Container;
        protected _lastObjectRendered: DisplayObject;

        resize(screenWidth: number, screenHeight: number): void;
        generateTexture(displayObject: DisplayObject, scaleMode?: number, resolution?: number, region?: Rectangle): RenderTexture;
        render(...args: any[]): void;
        destroy(removeView?: boolean): void;
    }
    interface DefaultCanvasRendererPlugins {
        extract: extract.CanvasExtract;
        prepare: prepare.CanvasPrepare;
    }
    export interface CanvasRendererPlugins extends DefaultCanvasRendererPlugins, RendererPlugins { }
    export class CanvasRenderer extends SystemRenderer {
        // plugintarget mixin start
        static __plugins: { [pluginName: string]: { new(renderer: CanvasRenderer): any } };
        static registerPlugin(pluginName: string, ctor: { new(renderer: CanvasRenderer): any }): void;
        plugins: CanvasRendererPlugins;
        initPlugins(): void;
        destroyPlugins(): void;
        // plugintarget mixin end

        constructor(options?: RendererOptions);
        constructor(screenWidth?: number, screenHeight?: number, options?: RendererOptions);

        protected _activeBlendMode: number;
        rootContext: CanvasRenderingContext2D;
        rootResolution?: number;
        refresh: boolean;
        maskManager: CanvasMaskManager;
        smoothProperty: string;
        extract: extract.CanvasExtract;

        context: CanvasRenderingContext2D | null;

        render(
            displayObject: PIXI.DisplayObject,
            renderTexture?: PIXI.RenderTexture,
            clear?: boolean,
            transform?: PIXI.Matrix,
            skipUpdateTransform?: boolean
        ): void;
        setBlendMode(blendMode: number): void;
        destroy(removeView?: boolean): void;
        clear(clearColor?: string): void;
        invalidateBlendMode(): void;

        on(event: 'prerender' | 'postrender', fn: () => void, context?: any): this;
        once(event: 'prerender' | 'postrender', fn: () => void, context?: any): this;
        removeListener(event: 'prerender' | 'postrender', fn?: () => void, context?: any): this;
        removeAllListeners(event?: 'prerender' | 'postrender'): this;
        off(event: 'prerender' | 'postrender', fn?: () => void, context?: any): this;
        addListener(event: 'prerender' | 'postrender', fn: () => void, context?: any): this;
    }
    export class CanvasMaskManager {
        constructor(renderer: CanvasRenderer);

        pushMask(maskData: any): void;
        protected renderGraphicsShape(graphics: Graphics): void;
        popMask(renderer: WebGLRenderer | CanvasRenderer): void;
        destroy(): void;
    }
    export class CanvasRenderTarget {
        constructor(width: number, height: number, resolution: number);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        resolution: number;

        width: number;
        height: number;

        clear(): void;
        resize(width: number, height: number): void;
        destroy(): void;
    }

    export interface WebGLRendererOptions extends RendererOptions { }
    interface DefaultWebGLRendererPlugins {
        extract: extract.WebGLExtract;
        prepare: prepare.WebGLPrepare;
    }
    export interface WebGLRendererPlugins extends DefaultWebGLRendererPlugins, RendererPlugins { }
    export class WebGLRenderer extends SystemRenderer {
        // plugintarget mixin start
        static __plugins: { [pluginName: string]: { new(renderer: WebGLRenderer): any } };
        static registerPlugin(pluginName: string, ctor: { new(renderer: WebGLRenderer): any }): void;
        plugins: WebGLRendererPlugins;
        initPlugins(): void;
        destroyPlugins(): void;
        // plugintarget mixin end

        constructor(options?: WebGLRendererOptions);
        constructor(screenWidth?: number, screenHeight?: number, options?: WebGLRendererOptions);

        protected _contextOptions: {
            alpha: boolean;
            antiAlias?: boolean;
            premultipliedAlpha: boolean;
            stencil: boolean;
            preseveDrawingBuffer?: boolean;
        };
        protected _backgroundColorRgba: number[];
        maskManager: MaskManager;
        stencilManager?: StencilManager;
        emptyRenderer: ObjectRenderer;
        currentRenderer: ObjectRenderer;
        gl: WebGLRenderingContext;
        CONTEXT_UID: number;
        state?: WebGLState;
        renderingToScreen: boolean;
        boundTextures: BaseTexture[];
        filterManager: FilterManager;
        textureManager?: TextureManager;
        textureGC?: TextureGarbageCollector;
        extract: extract.WebGLExtract;
        protected drawModes: any;
        protected _activeShader: Shader;
        _activeRenderTarget: RenderTarget;
        protected _initContext(): void;

        render(
            displayObject: PIXI.DisplayObject,
            renderTexture?: PIXI.RenderTexture,
            clear?: boolean,
            transform?: PIXI.Matrix,
            skipUpdateTransform?: boolean
        ): void;
        setObjectRenderer(objectRenderer: ObjectRenderer): void;
        flush(): void;
        setBlendMode(blendMode: number): void;
        clear(clearColor?: number): void;
        setTransform(matrix: Matrix): void;
        clearRenderTexture(renderTexture: RenderTexture, clearColor?: number): WebGLRenderer;
        bindRenderTexture(renderTexture: RenderTexture, transform: Matrix): WebGLRenderer;
        bindRenderTarget(renderTarget: RenderTarget): WebGLRenderer;
        bindShader(shader: Shader, autoProject?: boolean): WebGLRenderer;
        bindTexture(texture: Texture | BaseTexture, location?: number, forceLocation?: boolean): number;
        unbindTexture(texture: Texture | BaseTexture): WebGLRenderer | undefined;
        createVao(): glCore.VertexArrayObject;
        bindVao(vao: glCore.VertexArrayObject): WebGLRenderer;
        reset(): WebGLRenderer;
        handleContextLost: (event: WebGLContextEvent) => void;
        handleContextRestored: () => void;
        destroy(removeView?: boolean): void;

        on(event: 'prerender' | 'postrender', fn: () => void, context?: any): this;
        on(event: 'context', fn: (gl: WebGLRenderingContext) => void, context?: any): this;
        once(event: 'prerender' | 'postrender', fn: () => void, context?: any): this;
        once(event: 'context', fn: (gl: WebGLRenderingContext) => void, context?: any): this;
        removeListener(event: 'prerender' | 'postrender', fn?: () => void, context?: any): this;
        removeListener(event: 'context', fn?: (gl: WebGLRenderingContext) => void, context?: any): this;
        removeAllListeners(event?: 'prerender' | 'postrender' | 'context'): this;
        off(event: 'prerender' | 'postrender', fn?: () => void, context?: any): this;
        off(event: 'context', fn?: (gl: WebGLRenderingContext) => void, context?: any): this;
        addListener(event: 'prerender' | 'postrender', fn: () => void, context?: any): this;
        addListener(event: 'context', fn: (gl: WebGLRenderingContext) => void, context?: any): this;
    }
    export class WebGLState {
        constructor(gl: WebGLRenderingContext);

        activeState: number[];
        defaultState: number[];
        stackIndex: number;
        stack: number[];
        gl: WebGLRenderingContext;
        maxAttribs: number;
        attribState: glCore.AttribState;
        nativeVaoExtension: any;

        push(): void;
        pop(): void;
        setState(state: number[]): void;
        setBlend(value: number): void;
        setBlendMode(value: number): void;
        setDepthTest(value: number): void;
        setCullFace(value: number): void;
        setFrontFace(value: number): void;
        resetAttributes(): void;
        resetToDefault(): void;
    }
    export class TextureManager {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        gl: WebGLRenderingContext;
        protected _managedTextures: Texture[];

        bindTexture(): void;
        getTexture(): WebGLTexture;
        updateTexture(texture: BaseTexture | Texture): WebGLTexture;
        destroyTexture(texture: BaseTexture, _skipRemove?: boolean): void;
        removeAll(): void;
        destroy(): void;
    }
    export class TextureGarbageCollector {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        count: number;
        checkCount: number;
        maxIdle: number;
        checkCountMax: number;
        mode: number;

        update(): void;
        run(): void;
        unload(displayObject: DisplayObject): void;
    }
    export abstract class ObjectRenderer extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        start(): void;
        stop(): void;
        flush(): void;

        render(...args: any[]): void;
    }
    export class Quad {
        constructor(gl: WebGLRenderingContext);

        gl: WebGLRenderingContext;
        vertices: number[];
        uvs: number[];
        interleaved: number[];
        indices: number[];
        vertexBuffer: WebGLBuffer;
        vao: glCore.VertexArrayObject;
        initVao(shader: glCore.GLShader): void;
        map(targetTextureFrame: Rectangle, destinationFrame: Rectangle): Quad;
        upload(): Quad;
        destroy(): void;
    }
    interface FilterDataStackItem {
        renderTarget: RenderTarget;
        filter: any[];
        bounds: Rectangle;
    }
    export class RenderTarget {
        protected filterPoolKey: string;

        constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: number, resolution: number, root?: boolean);

        gl: WebGLRenderingContext;
        frameBuffer: glCore.GLFramebuffer;
        texture: Texture;
        clearColor: number[];
        size: Rectangle;
        resolution: number;
        projectionMatrix: Matrix;
        transform: Matrix;
        frame: Rectangle;
        defaultFrame: Rectangle;
        destinationFrame: Rectangle;
        sourceFrame?: Rectangle;
        stencilBuffer: glCore.GLFramebuffer;
        stencilMaskStack: Graphics[];
        filterData: {
            index: number;
            stack: FilterDataStackItem[];
        };
        scaleMode: number;
        root: boolean;

        clear(clearColor?: number[]): void;
        attachStencilBuffer(): void;
        setFrame(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
        activate(): void;
        calculateProjection(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
        resize(width: number, height: number): void;
        destroy(): void;
    }

    export class BlendModeManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        currentBlendMode: number;

        setBlendMode(blendMode: number): boolean;
    }
    interface FilterManagerStackItem {
        renderTarget: RenderTarget;
        sourceFrame: Rectangle;
        destinationFrame: Rectangle;
        filters: Filter<any>[];
        target: any;
        resolution: number;
    }
    export class FilterManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        protected _screenWidth: number;
        protected _screenHeight: number;

        gl: WebGLRenderingContext;
        quad: Quad;
        stack: FilterManagerStackItem[];
        stackIndex: number;
        shaderCache: any;
        filterData: any;

        onPrerender(): void;
        pushFilter(target: RenderTarget, filters: Filter<any>[]): void;
        popFilter(): void;
        applyFilter(shader: glCore.GLShader | Filter<any>, inputTarget: RenderTarget, outputTarget: RenderTarget, clear?: boolean): void;
        syncUniforms(shader: glCore.GLShader, filter: Filter<any>): void;
        getRenderTarget(clear?: boolean, resolution?: number): RenderTarget;
        returnRenderTarget(renderTarget: RenderTarget): RenderTarget;
        calculateScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
        calculateNormalizedScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
        calculateSpriteMatrix(outputMatrix: Matrix, sprite: Sprite): Matrix;
        destroy(contextLost?: boolean): void;
        emptyPool(): void;
        getPotRenderTarget(gl: WebGLRenderingContext, minWidth: number, minHeight: number, resolution: number): RenderTarget;
        freePotRenderTarget(renderTarget: RenderTarget): void;
    }
    export class StencilMaskStack {
        stencilStack: any[];
        reverse: boolean;
        count: number;
    }
    export class MaskManager extends WebGLManager {
        scissor: boolean;
        scissorData: any;
        scissorRenderTarget: RenderTarget;
        enableScissor: boolean;
        alphaMaskPool: number[];
        alphaMaskIndex: number;
        pushMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        pushSpriteMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popSpriteMask(): void;
        pushStencilMask(maskData: Sprite | Graphics): void;
        popStencilMask(): void;
        pushScissorMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popScissorMask(): void;
    }
    export class StencilManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        stencilMaskStack: Graphics[];

        protected _useCurrent(): void;
        protected _getBitwiseMask(): number;

        setMaskStack(stencilMasStack: Graphics[]): void;
        pushStencil(graphics: Graphics): void;
        popStencil(): void;
        destroy(): void;
    }
    export class WebGLManager {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        onContextChange(): void;
        destroy(): void;
    }
    export interface UniformData<V> {
        type: string;
        value: V;

        // name is set by pixi if uniforms were automatically extracted from shader code, but not used anywhere
        name?: string;
    }
    type UniformDataMap<U> = {[K in keyof U]: UniformData<U[K]> };
    export class Filter<U extends object> {
        constructor(vertexSrc?: string, fragmentSrc?: string, uniformData?: UniformDataMap<U>);

        protected _blendMode: number;
        vertexSrc?: string;
        fragmentSrc: string;
        blendMode: number;
        protected uniformData: UniformDataMap<U>;
        uniforms: U;
        glShaders: any;
        glShaderKey?: number;
        padding: number;
        resolution: number;
        enabled: boolean;
        autoFit: boolean;
        apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget, clear?: boolean, currentState?: any): void;

        static defaultVertexSrc: string;
        static defaultFragmentSrc: string;
    }
    type SpriteMaskFilterUniforms = {
        mask: Texture;
        otherMatrix: Matrix;
        alpha: number;
    };
    export class SpriteMaskFilter extends Filter<SpriteMaskFilterUniforms> {
        constructor(sprite: Sprite);

        maskSprite: Sprite;
        maskMatrix: Matrix;
        apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget): void;
    }

    // sprites

    export class Sprite extends Container {
        constructor(texture?: Texture);

        protected _anchor: ObservablePoint;
        anchor: ObservablePoint;
        protected _texture: Texture;
        protected _transformTrimmedID: number;
        protected _textureTrimmedID: number;
        protected _width: number;
        protected _height: number;
        tint: number;
        protected _tint: number;
        protected _tintRGB: number;
        blendMode: number;
        pluginName: string;
        protected cachedTint: number;
        texture: Texture;
        protected textureDirty: boolean;
        protected _textureID: number;
        protected _transformID: number;
        protected vertexTrimmedData: Float32Array;
        vertexData: Float32Array;
        width: number;
        height: number;

        protected _onTextureUpdate(): void;
        calculateVertices(): void;
        protected _calculateBounds(): void;
        protected calculateTrimmedVertices(): void;
        protected onAnchorUpdate(): void;
        protected _renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        getLocalBounds(): Rectangle;
        containsPoint(point: Point): boolean;
        destroy(options?: DestroyOptions | boolean): void;

        static from(source: number | string | BaseTexture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): Sprite;
        static fromFrame(frameId: string): Sprite;
        static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
    }

    export class SpriteBatch extends Container {

        constructor(texture?: Texture);

        ready: boolean;
        textureThing: Texture;

        initWebGL(gl: WebGLRenderingContext): void;

    }

    export class BatchBuffer {
        vertices: ArrayBuffer;
        float32View: number[];
        uint32View: number[];

        destroy(): void;
    }
    export class SpriteRenderer extends ObjectRenderer {
        constructor(renderer: PIXI.WebGLRenderer);

        vertSize: number;
        vertByteSize: number;
        size: number;
        buffers: BatchBuffer[];
        indices: number[];
        shaders: Shader[];
        currentIndex: number;
        tick: number;
        groups: any[];
        sprites: Sprite[];
        vertexBuffers: number[];
        vaos: glCore.VertexArrayObject[];
        vaoMax: number;
        vertexCount: number;

        protected onContextChanged: () => void;
        protected onPrerender: () => void;
        render(sprite: Sprite): void;
        flush(): void;
        start(): void;
        stop(): void;
        destroy(): void;
    }
    export class CanvasSpriteRenderer extends ObjectRenderer {
        constructor(renderer: WebGLRenderer);

        render(sprite: Sprite): void;
        destroy(): void;
    }
    export namespace CanvasTinter {
        export function getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement;
        export function tintWithMultiply(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        export function tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        export function tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        export function roundColor(color: number): number;

        export let cacheStepsPerColorChannel: number;
        export let convertTintToImage: boolean;
        export let canUseMultiply: boolean;
        export let tintMethod: number;
    }

    // text
    export interface TextStyleOptions {
        align?: string;
        breakWords?: boolean;
        dropShadow?: boolean;
        dropShadowAlpha?: number;
        dropShadowAngle?: number;
        dropShadowBlur?: number;
        dropShadowColor?: string | number;
        dropShadowDistance?: number;
        fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fillGradientType?: number;
        fillGradientStops?: number[];
        fontFamily?: string | string[];
        fontSize?: number | string;
        fontStyle?: string;
        fontVariant?: string;
        fontWeight?: string;
        letterSpacing?: number;
        lineHeight?: number;
        lineJoin?: string;
        miterLimit?: number;
        padding?: number;
        stroke?: string | number;
        strokeThickness?: number;
        textBaseline?: string;
        trim?: boolean;
        whiteSpace?: string;
        wordWrap?: boolean;
        wordWrapWidth?: number;
        leading?: number;
    }

    export class TextStyle implements TextStyleOptions {
        constructor(style: TextStyleOptions);

        styleID: number;

        clone(): TextStyle;
        reset(): void;

        protected _align: string;
        align: string;
        protected _breakWords: boolean;
        breakWords: boolean;
        protected _dropShadow: boolean;
        dropShadow: boolean;
        protected _dropShadowAlpha: number;
        dropShadowAlpha: number;
        protected _dropShadowAngle: number;
        dropShadowAngle: number;
        protected _dropShadowBlur: number;
        dropShadowBlur: number;
        protected _dropShadowColor: string | number;
        dropShadowColor: string | number;
        protected _dropShadowDistance: number;
        dropShadowDistance: number;
        protected _fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        protected _fillGradientType: number;
        fillGradientType: number;
        protected _fillGradientStops: number[];
        fillGradientStops: number[];
        protected _fontFamily: string | string[];
        fontFamily: string | string[];
        protected _fontSize: number | string;
        fontSize: number | string;
        protected _fontStyle: string;
        fontStyle: string;
        protected _fontVariant: string;
        fontVariant: string;
        protected _fontWeight: string;
        fontWeight: string;
        protected _leading: number;
        leading: number;
        protected _letterSpacing: number;
        letterSpacing: number;
        protected _lineHeight: number;
        lineHeight: number;
        protected _lineJoin: string;
        lineJoin: string;
        protected _miterLimit: number;
        miterLimit: number;
        protected _padding: number;
        padding: number;
        protected _stroke: string | number;
        stroke: string | number;
        protected _strokeThickness: number;
        strokeThickness: number;
        protected _textBaseline: string;
        textBaseline: string;
        protected _trim: boolean;
        trim: boolean;
        protected _whiteSpace: string;
        whiteSpace: string;
        protected _wordWrap: boolean;
        wordWrap: boolean;
        protected _wordWrapWidth: number;
        wordWrapWidth: number;

        toFontString(): string;
    }

    export class TextMetrics {
        static METRICS_STRING: string;
        static BASELINE_SYMBOL: string;
        static BASELINE_MULTIPLIER: number;

        static _canvas: HTMLCanvasElement;
        static _context: CanvasRenderingContext2D;
        static _fonts: FontMetrics;
        static _newLines: Array<number>;
        static _breakingSpaces: Array<number>;

        text: string;
        style: TextStyle;
        width: number;
        height: number;
        lines: number[];
        lineWidths: number[];
        lineHeight: number;
        maxLineWidth: number;
        fontProperties: any;

        constructor(
            text: string,
            style: TextStyle,
            width: number,
            height: number,
            lines: number[],
            lineWidths: number[],
            lineHeight: number,
            maxLineWidth: number,
            fontProperties: any
        );

        static measureText(text: string, style: TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement): TextMetrics;
        static wordWrap(text: string, style: TextStyle, canvas?: HTMLCanvasElement): string;
        static addLine(line: string, newLine?: boolean): string;
        static getFromCache(key: string, letterSpacing: number, cache: any, context: CanvasRenderingContext2D): number;
        static collapseSpaces(whiteSpace?: string): boolean;
        static collapseNewlines(whiteSpace?: string): boolean;
        static trimRight(text?: string): string;
        static isNewline(char?: string): boolean;
        static isBreakingSpace(char?: string): boolean;
        static tokenize(text?: string): Array<string>;
        static canBreakWords(token?: string, breakWords?: boolean): boolean;
        static canBreakChars(char: string, nextChar: string, token: string, index: number, breakWords?: boolean): boolean;
        static measureFont(font: string): FontMetrics;
        static clearMetrics(font: string): void;
    }

    interface FontMetrics {
        ascent: number;
        descent: number;
        fontSize: number;
    }

    export class Text extends Sprite {
        constructor(text?: string, style?: TextStyleOptions, canvas?: HTMLCanvasElement);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        resolution: number;
        protected _text: string;
        protected _style: TextStyle;
        //tslint:disable-next-line:ban-types forbidden-types
        protected _styleListener: Function;
        protected _font: string;
        protected localStyleID: number;

        width: number;
        height: number;
        style: TextStyle;
        text: string;

        protected updateText(respectDirty?: boolean): void;
        protected drawLetterSpacing(text: string, x: number, y: number, isStroke?: boolean): void;
        protected updateTexture(): void;
        renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        getLocalBounds(rect?: Rectangle): Rectangle;
        protected _calculateBounds(): void;
        protected _onStyleChange: () => void;
        protected _generateFillStyle(style: TextStyle, lines: string[]): string | number | CanvasGradient;
        destroy(options?: DestroyOptions | boolean): void;
        dirty: boolean;
    }

    // textures

    export class BaseRenderTexture extends BaseTexture {
        constructor(width?: number, height?: number, scaleMode?: number, resolution?: number);

        height: number;
        width: number;
        realHeight: number;
        realWidth: number;
        resolution: number;
        scaleMode: number;
        hasLoaded: boolean;
        protected _glRenderTargets: { [n: number]: WebGLTexture };
        protected _canvasRenderTarget: { [n: number]: WebGLTexture };
        valid: boolean;

        resize(width: number, height: number): void;
        destroy(): void;

        on(event: 'update', fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        once(event: 'update', fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        removeListener(event: 'update', fn?: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        removeAllListeners(event?: 'update'): this;
        off(event: 'update', fn?: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        addListener(event: 'update', fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
    }
    export class BaseTexture extends utils.EventEmitter {
        static from(source: string | HTMLImageElement | HTMLCanvasElement, scaleMode?: number, sourceScale?: number): BaseTexture;

        constructor(source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, scaleMode?: number, resolution?: number);

        protected uuid?: number;
        protected touched: number;
        resolution: number;
        width: number;
        height: number;
        realWidth: number;
        realHeight: number;
        scaleMode: number;
        hasLoaded: boolean;
        isLoading: boolean;
        wrapMode: number;
        source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | null;
        origSource: HTMLImageElement | null;
        imageType: string | null;
        sourceScale: number;
        premultipliedAlpha: boolean;
        imageUrl: string | null;
        protected isPowerOfTwo: boolean;
        mipmap: boolean;
        wrap?: boolean;
        protected _glTextures: any;
        protected _enabled: number;
        protected _id?: number;
        protected _virtualBoundId: number;
        protected readonly _destroyed: boolean;
        textureCacheIds: string[];

        update(): void;
        protected _updateDimensions(): void;
        protected _updateImageType(): void;
        protected _loadSvgSource(): void;
        protected _loadSvgSourceUsingDataUri(dataUri: string): void;
        protected _loadSvgSourceUsingXhr(): void;
        protected _loadSvgSourceUsingString(svgString: string): void;
        protected loadSource(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;
        protected _sourceLoaded(): void;
        destroy(): void;
        dispose(): void;
        updateSourceImage(newSrc: string): void;

        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: number, sourceScale?: number): BaseTexture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number, origin?: string): BaseTexture;
        static addToCache(baseTexture: BaseTexture, id: string): void;
        static removeFromCache(baseTexture: string | BaseTexture): BaseTexture;

        on(event: 'update' | 'loaded' | 'error' | 'dispose', fn: (baseTexture: BaseTexture) => void, context?: any): this;
        once(event: 'update' | 'loaded' | 'error' | 'dispose', fn: (baseTexture: BaseTexture) => void, context?: any): this;
        removeListener(event: 'update' | 'loaded' | 'error' | 'dispose', fn?: (baseTexture: BaseTexture) => void, context?: any): this;
        removeAllListeners(event?: 'update' | 'loaded' | 'error' | 'dispose'): this;
        off(event: 'update' | 'loaded' | 'error' | 'dispose', fn?: (baseTexture: BaseTexture) => void, context?: any): this;
        addListener(event: 'update' | 'loaded' | 'error' | 'dispose', fn: (baseTexture: BaseTexture) => void, context?: any): this;
    }
    export class RenderTexture extends Texture {
        constructor(baseRenderTexture: BaseRenderTexture, frame?: Rectangle);

        protected legacyRenderer: any;
        valid: boolean;

        resize(width: number, height: number, doNotResizeBaseTexture?: boolean): void;

        static create(width?: number, height?: number, scaleMode?: number, resolution?: number): RenderTexture;
    }
    export class Texture extends utils.EventEmitter {
        constructor(baseTexture: BaseTexture, frame?: Rectangle, orig?: Rectangle, trim?: Rectangle, rotate?: number, anchor?: Point);

        noFrame: boolean;
        baseTexture: BaseTexture;
        protected _frame: Rectangle;
        trim?: Rectangle;
        valid: boolean;
        requiresUpdate: boolean;
        protected _uvs: TextureUvs;
        orig: Rectangle;
        defaultAnchor: Point;
        protected _updateID: number;
        transform: TextureMatrix;
        textureCacheIds: string[];

        update(): void;
        protected onBaseTextureLoaded(baseTexture: BaseTexture): void;
        protected onBaseTextureUpdated(baseTexture: BaseTexture): void;
        destroy(destroyBase?: boolean): void;
        clone(): Texture;
        _updateUvs(): void;

        static fromImage(imageUrl: string, crossOrigin?: boolean, scaleMode?: number, sourceScale?: number): Texture;
        static fromFrame(frameId: string): Texture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number, origin?: string): Texture;
        static fromVideo(video: HTMLVideoElement | string, scaleMode?: number, crossorigin?: boolean, autoPlay?: boolean): Texture;
        static fromVideoUrl(videoUrl: string, scaleMode?: number, crossorigin?: boolean, autoPlay?: boolean): Texture;
        static from(source: number | string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | BaseTexture): Texture;
        static fromLoader(source: HTMLImageElement | HTMLCanvasElement, imageUrl: string, name?: string): Texture;
        static addToCache(texture: Texture, id: string): void;
        static removeFromCache(texture: string | Texture): Texture;

        // depreciation
        static addTextureToCache(texture: Texture, id: string): void;
        static removeTextureFromCache(id: string): Texture;

        frame: Rectangle;
        protected _rotate: boolean | 0;
        rotate: number;
        width: number;
        height: number;

        static EMPTY: Texture;
        static WHITE: Texture;

        on(event: 'update', fn: (texture: Texture) => void, context?: any): this;
        once(event: 'update', fn: (texture: Texture) => void, context?: any): this;
        removeListener(event: 'update', fn?: (texture: Texture) => void, context?: any): this;
        removeAllListeners(event?: 'update'): this;
        off(event: 'update', fn?: (texture: Texture) => void, context?: any): this;
        addListener(event: 'update', fn: (texture: Texture) => void, context?: any): this;
    }
    export class TextureMatrix {
        constructor(texture: Texture, clampMargin?: number);

        protected _texture: Texture;
        mapCoord: Matrix;
        uClampFrame: Float32Array;
        uClampOffset: Float32Array;
        protected _lastTextureID: number;

        clampOffset: number;
        clampMargin: number;

        texture: Texture;

        update(forceUpdate?: boolean): boolean;
        multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
    }
    export class TextureUvs {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;

        uvsUint32: Uint32Array;

        protected set(frame: Rectangle, baseFrame: Rectangle, rotate: number): void;
    }

    export class Spritesheet {
        static BATCH_SIZE: number;

        constructor(baseTexture: BaseTexture, data: any, resolutionFilename?: string);

        baseTexture: BaseTexture;
        animations: { [key: string]: Texture[] };
        textures: { [key: string]: Texture };
        data: any;
        resolution: number;
        protected _frames: any;
        protected _frameKeys: string;
        protected _batchIndex: number;
        protected _callback: (spriteSheet: this, textures: { [key: string]: Texture }) => void;
        protected _updateResolution(resolutionFilename: string): number;
        parse(callback: (spriteSheet: this, textures: { [key: string]: Texture }) => void): void;
        protected _processFrames(initialFrameIndex: number): void;
        protected _parseComplete(): void;
        protected _processAnimations(): void;
        protected _nextBatch(): void;
        destroy(destroyBase?: boolean): void;
    }

    export class VideoBaseTexture extends BaseTexture {
        constructor(source: HTMLVideoElement, scaleMode?: number, autoPlay?: boolean);

        autoUpdate: boolean;
        autoPlay: boolean;
        protected _isAutoUpdating: boolean;

        update(): void;
        protected _onCanPlay(): void;
        protected _onPlayStart(): void;
        protected _onPlayStop(): void;
        destroy(): void;
        protected _isSourcePlaying(): boolean;
        protected _isSourceReady(): boolean;

        static fromVideo(video: HTMLVideoElement, scaleMode?: number, autoPlay?: boolean): VideoBaseTexture;
        static fromUrl(videoSrc: string | any | string[] | any[], crossorigin?: boolean, autoPlay?: boolean): VideoBaseTexture;
        static fromUrls(videoSrc: string | any | string[] | any[]): VideoBaseTexture;

        source: HTMLVideoElement;
        protected loadSource(source: HTMLVideoElement): void;
    }

    // ticker

    namespace ticker {
        export const shared: Ticker;

        export class TickerListener {
            constructor(fn: (deltaTime: number) => void, context?: any, priority?: number, once?: boolean);

            fn: (deltaTime: number) => void;
            context: any;
            priority: number;
            once: boolean;
            next: TickerListener;
            previous: TickerListener;

            protected _destroyed: boolean;
            match(fn: (deltaTime: number) => void, context?: any): boolean;
            emit(deltaTime: number): TickerListener;
            connect(previous: TickerListener): void;
            destroy(hard?: boolean): void;
        }
        export class Ticker {
            protected _tick: (time: number) => void;
            protected _head: TickerListener;
            protected _requestId: number | null;
            protected _maxElapsedMS: number;

            autoStart: boolean;
            deltaTime: number;
            elapsedMS: number;
            lastTime: number;
            speed: number;
            started: boolean;

            protected _requestIfNeeded(): void;
            protected _cancelIfNeeded(): void;
            protected _startIfPossible(): void;

            add(fn: (deltaTime: number) => void, context?: any, priority?: number): Ticker;
            addOnce(fn: (deltaTime: number) => void, context?: any, priority?: number): Ticker;
            //tslint:disable-next-line:ban-types forbidden-types
            remove(fn: Function, context?: any, priority?: number): Ticker;

            protected _addListener(listener: TickerListener): Ticker;

            readonly FPS: number;
            minFPS: number;

            start(): void;
            stop(): void;
            destroy(): void;
            update(currentTime?: number): void;
        }
    }

    // shader

    export class Shader extends glCore.GLShader {
        constructor(
            gl: WebGLRenderingContext,
            vertexSrc: string | string[],
            fragmentSrc: string | string[],
            attributeLocations?: { [key: string]: number },
            precision?: string
        );
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////EXTRACT///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace extract {
        export class CanvasExtract {
            protected renderer: CanvasRenderer;

            constructor(renderer: CanvasRenderer);

            image(target?: DisplayObject | RenderTexture): HTMLImageElement;
            base64(target?: DisplayObject | RenderTexture): string;
            canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
            pixels(renderTexture?: DisplayObject | RenderTexture): Uint8ClampedArray;

            destroy(): void;
        }
        export class WebGLExtract {
            protected renderer: WebGLRenderer;

            constructor(renderer: WebGLRenderer);

            image(target?: DisplayObject | RenderTexture): HTMLImageElement;
            base64(target?: DisplayObject | RenderTexture): string;
            canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
            pixels(renderTexture?: DisplayObject | RenderTexture): Uint8Array;

            destroy(): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////EXTRAS////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace extras {
        export interface BitmapTextStyle {
            font?:
            | string
            | {
                name?: string;
                size?: number;
            };
            align?: string;
            tint?: number;
        }
        export class BitmapText extends Container {
            static registerFont(xml: XMLDocument, textures: Texture | Texture[] | { [key: string]: Texture }): any;

            constructor(text: string, style?: BitmapTextStyle);

            letterSpacing: number;
            protected _letterSpacing: number;
            protected _textWidth: number;
            protected _textHeight: number;
            textWidth: number;
            textHeight: number;
            protected _glyphs: Sprite[];
            protected _font:
                | string
                | {
                    name?: string;
                    size?: number;
                };
            font:
                | string
                | {
                    name?: string;
                    size?: number;
                };
            protected _text: string;
            protected _maxWidth: number;
            maxWidth: number;
            protected _maxLineHeight: number;
            maxLineHeight: number;
            protected _anchor: ObservablePoint;
            dirty: boolean;
            tint: number;
            align: string;
            text: string;
            anchor: PIXI.Point | number;

            protected updateText(): void;
            updateTransform(): void;
            getLocalBounds(): Rectangle;
            protected validate(): void;

            static fonts: any;
        }
        interface AnimatedSpriteTextureTimeObject {
            texture: Texture;
            time?: number;
        }
        export class AnimatedSprite extends Sprite {
            constructor(textures: Texture[] | AnimatedSpriteTextureTimeObject[], autoUpdate?: boolean);

            protected _autoUpdate: boolean;
            protected _textures: Texture[];
            protected _durations: number[];
            textures: Texture[] | AnimatedSpriteTextureTimeObject[];
            animationSpeed: number;
            loop: boolean;
            onComplete: () => void;
            onFrameChange: (currentFrame: number) => void;
            onLoop: () => void;
            protected _currentTime: number;
            playing: boolean;
            totalFrames: number;
            currentFrame: number;
            stop(): void;
            play(): void;
            gotoAndStop(frameNumber: number): void;
            gotoAndPlay(frameNumber: number): void;
            protected update(deltaTime: number): void;
            destroy(options?: DestroyOptions | boolean): void;

            static fromFrames(frame: string[]): AnimatedSprite;
            static fromImages(images: string[]): AnimatedSprite;
        }
        export class TilingSprite extends Sprite {
            constructor(texture: Texture, width?: number, height?: number);

            tileTransform: TransformStatic;
            protected _width: number;
            protected _height: number;
            protected _canvasPattern: CanvasPattern;
            uvTransform: TextureMatrix;
            uvRespectAnchor: boolean;

            clampMargin: number;
            tileScale: Point | ObservablePoint;
            tilePosition: Point | ObservablePoint;

            multiplyUvs(uvs: Float32Array, out: Float32Array): Float32Array;

            protected _onTextureUpdate(): void;
            protected _renderWebGL(renderer: WebGLRenderer): void;
            protected _renderCanvas(renderer: CanvasRenderer): void;
            protected _calculateBounds(): void;
            getLocalBounds(rect?: Rectangle): Rectangle;
            containsPoint(point: Point): boolean;
            destroy(options?: DestroyOptions | boolean): void;

            static from(
                source: number | string | BaseTexture | HTMLCanvasElement | HTMLVideoElement,
                width?: number,
                height?: number
            ): TilingSprite;
            static fromFrame(frameId: string, width?: number, height?: number): TilingSprite;
            // if you remove the next line, the class will break. https://github.com/pixijs/pixi-typescript/issues/96
            static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
            static fromImage(imageId: string, width?: number, height?: number, crossorigin?: boolean, scaleMode?: number): TilingSprite;

            width: number;
            height: number;
        }
        export class TilingSpriteRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            render(ts: TilingSprite): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////FILTERS///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////INTERACTION///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace interaction {
        export interface InteractiveTarget {
            interactive: boolean;
            interactiveChildren: boolean;
            hitArea: PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle | PIXI.HitArea;
            buttonMode: boolean;
            cursor: string;
            trackedPointers: { [key: number]: InteractionTrackingData };

            // depricated
            defaultCursor: string;
        }
        export interface InteractionTrackingData {
            readonly pointerId: number;
            flags: number;
            none: number;
            over: boolean;
            rightDown: boolean;
            leftDown: boolean;
        }
        export interface InteractionEvent {
            stopped: boolean;
            target: DisplayObject;
            currentTarget: DisplayObject;
            type: string;
            data: InteractionData;
            stopPropagation(): void;
            reset(): void;
        }
        export class InteractionData {
            global: Point;
            target: DisplayObject;
            originalEvent: MouseEvent | TouchEvent | PointerEvent;
            identifier: number;
            isPrimary: boolean;
            button: number;
            buttons: number;
            width: number;
            height: number;
            tiltX: number;
            tiltY: number;
            pointerType: string;
            pressure: number;
            rotationAngle: number;
            twist: number;
            tangentialPressure: number;

            readonly pointerID: number;

            copyEvent(event: Touch | MouseEvent | PointerEvent): void;
            reset(): void;

            getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;
        }

        type InteractionPointerEvents =
            | 'pointerdown'
            | 'pointercancel'
            | 'pointerup'
            | 'pointertap'
            | 'pointerupoutside'
            | 'pointermove'
            | 'pointerover'
            | 'pointerout';
        type InteractionTouchEvents = 'touchstart' | 'touchcancel' | 'touchend' | 'touchendoutside' | 'touchmove' | 'tap';
        type InteractionMouseEvents =
            | 'rightdown'
            | 'mousedown'
            | 'rightup'
            | 'mouseup'
            | 'rightclick'
            | 'click'
            | 'rightupoutside'
            | 'mouseupoutside'
            | 'mousemove'
            | 'mouseover'
            | 'mouseout'
            | 'mouseover';
        type InteractionPixiEvents = 'added' | 'removed';
        type InteractionEventTypes = InteractionPointerEvents | InteractionTouchEvents | InteractionMouseEvents | InteractionPixiEvents;

        export interface InteractionManagerOptions {
            autoPreventDefault?: boolean;
            interactionFrequency?: number;
        }
        export class InteractionManager extends utils.EventEmitter {
            constructor(renderer: CanvasRenderer | WebGLRenderer | SystemRenderer, options?: InteractionManagerOptions);

            renderer: SystemRenderer;
            autoPreventDefault: boolean;
            interactionFrequency: number;
            mouse: InteractionData;
            activeInteractionData: { [key: number]: InteractionData };
            interactionDataPool: InteractionData[];
            eventData: InteractionEvent;
            protected interactionDOMElement: HTMLElement;
            moveWhenInside: boolean;
            eventsAdded: boolean;
            protected mouseOverRenderer: boolean;
            readonly supportsTouchEvents: boolean;
            readonly supportsPointerEvents: boolean;
            protected onPointerUp: (event: PointerEvent) => void;
            protected processPointerUp: (
                interactionEvent: InteractionEvent,
                displayObject: Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean
            ) => void;
            protected onPointerCancel: (event: PointerEvent) => void;
            protected processPointerCancel: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite
            ) => void;
            protected onPointerDown: (event: PointerEvent) => void;
            protected processPointerDown: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean
            ) => void;
            protected onPointerMove: (event: PointerEvent) => void;
            protected processPointerMove: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean
            ) => void;
            protected onPointerOut: (event: PointerEvent) => void;
            protected processPointerOverOut: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean
            ) => void;
            protected onPointerOver: (event: PointerEvent) => void;
            cursorStyles: {
                default: string;
                pointer: string;
            };
            currentCursorMode: string;
            cursor: string;
            protected _tempPoint: Point;
            resolution: number;
            hitTest(globalPoint: Point, root?: Container): DisplayObject;
            setTargetElement(element: HTMLCanvasElement, resolution?: number): void;
            protected addEvents(): void;
            protected removeEvents(): void;
            update(deltaTime?: number): void;
            setCursorMode(mode: string): void;
            protected dispatchEvent(displayObject: Container | Sprite | extras.TilingSprite, eventString: string, eventData: any): void;
            mapPositionToPoint(point: Point, x: number, y: number): void;
            //tslint:disable-next-line:ban-types forbidden-types
            protected processInteractive(
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                func?: Function,
                hitTest?: boolean,
                interactive?: boolean
            ): boolean;
            //tslint:disable-next-line:ban-types forbidden-types
            protected onPointerComplete(originalEvent: PointerEvent, cancelled: boolean, func: Function): void;
            protected getInteractionDataForPointerId(pointerId: number): InteractionData;
            protected releaseInteractionDataForPointerId(event: PointerEvent): void;
            protected configureInteractionEventForDOMEvent(
                interactionEvent: InteractionEvent,
                pointerEvent: PointerEvent,
                interactionData: InteractionData
            ): InteractionEvent;
            protected normalizeToPointerData(event: TouchEvent | MouseEvent | PointerEvent): PointerEvent[];
            destroy(): void;

            // depricated
            defaultCursorStyle: string;
            currentCursorStyle: string;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////LOADER/////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // pixi loader extends
    // https://github.com/englercj/resource-loader/
    // 2.1.1

    class MiniSignalBinding {
        //tslint:disable-next-line:ban-types forbidden-types
        constructor(fn: Function, once?: boolean, thisArg?: any);

        //tslint:disable-next-line:ban-types forbidden-types
        protected _fn: Function;
        protected _once: boolean;
        protected _thisArg: any;
        protected _next: MiniSignalBinding;
        protected _prev: MiniSignalBinding;
        protected _owner: MiniSignal;

        detach(): boolean;
    }
    class MiniSignal {
        constructor();

        protected _head: MiniSignalBinding;
        protected _tail: MiniSignalBinding;

        handlers(exists?: boolean): MiniSignalBinding[] | boolean;
        handlers(exists?: true): boolean;
        handlers(exists?: false): MiniSignalBinding[];

        has(node: MiniSignalBinding): boolean;
        dispatch(): boolean;
        //tslint:disable-next-line:ban-types forbidden-types
        add(fn: Function, thisArg?: any): any;
        //tslint:disable-next-line:ban-types forbidden-types
        once(fn: Function, thisArg?: any): any;
        detach(node: MiniSignalBinding): MiniSignal;
        detachAll(): MiniSignal;
    }

    export namespace loaders {
        export interface LoaderOptions {
            crossOrigin?: boolean | string;
            loadType?: number;
            xhrType?: string;
            metaData?: {
                loadElement?: HTMLImageElement | HTMLAudioElement | HTMLVideoElement;
                skipSource?: boolean;
                mimeType?: string | string[];
            };
        }
        export interface ResourceDictionary {
            [index: string]: PIXI.loaders.Resource;
        }

        // As of ResourceLoader v2 we no longer require EventEmitter
        // However, for depreciation reasons, it remains.
        export class Loader extends utils.EventEmitter {
            // pixi overrides here

            //tslint:disable-next-line:ban-types forbidden-types
            static addPixiMiddleware(fn: Function): void;

            // below this line is the original non-pixi loader

            static Resource: any;
            static async: any;
            static base64: any;

            constructor(baseUrl?: string, concurrency?: number);

            baseUrl: string;
            progress: number;
            loading: boolean;
            defaultQueryString: string;

            //tslint:disable-next-line:ban-types forbidden-types
            protected _beforeMiddleware: Function[];
            //tslint:disable-next-line:ban-types forbidden-types
            protected _afterMiddleware: Function[];
            protected _resourcesParsing: Resource[];
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundLoadResource: (r: Resource, d: Function) => void;
            protected _queue: any;

            resources: ResourceDictionary;

            onProgress: MiniSignal;
            onError: MiniSignal;
            onLoad: MiniSignal;
            onStart: MiniSignal;
            onComplete: MiniSignal;

            concurrency: number;

            add(...params: any[]): this;
            //tslint:disable-next-line:ban-types forbidden-types
            add(name: string, url: string, options?: LoaderOptions, cb?: Function): this;
            //tslint:disable-next-line:ban-types forbidden-types
            add(obj: string | any | any[], options?: LoaderOptions, cb?: Function): this;

            //tslint:disable-next-line:ban-types forbidden-types
            pre(fn: Function): this;
            //tslint:disable-next-line:ban-types forbidden-types
            use(fn: Function): this;
            reset(): this;
            //tslint:disable-next-line:ban-types forbidden-types
            load(cb?: Function): this;

            protected _prepareUrl(url: string): string;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _loadResource(resource: Resource, dequeue: Function): void;
            protected _onStart(): void;
            protected _onComplete(): void;
            protected _onLoad(resource: Resource): void;

            destroy(): void;

            // depreciation

            on(event: 'complete', fn: (loader: loaders.Loader, object: any) => void, context?: any): this;
            on(event: 'error', fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            on(event: 'load' | 'progress', fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            on(event: 'start', fn: (loader: loaders.Loader) => void, context?: any): this;

            once(event: 'complete', fn: (loader: loaders.Loader, object: any) => void, context?: any): this;
            once(event: 'error', fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            once(event: 'load' | 'progress', fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            once(event: 'start', fn: (loader: loaders.Loader) => void, context?: any): this;
            //tslint:disable-next-line:ban-types forbidden-types
            off(event: 'complete' | 'error' | 'load' | 'progress' | 'start' | string, fn?: Function, context?: any): this;
        }
        export interface TextureDictionary {
            [index: string]: PIXI.Texture;
        }
        export class Resource {
            static setExtensionLoadType(extname: string, loadType: number): void;
            static setExtensionXhrType(extname: string, xhrType: string): void;

            constructor(name: string, url: string | string[], options?: LoaderOptions);

            protected _flags: number;

            name: string;
            url: string;
            extension: string;
            data: any;
            crossOrigin: boolean | string;
            loadType: number;
            xhrType: string;
            metadata: any;
            error: Error;
            xhr: XMLHttpRequest | null;
            children: Resource[];
            type: number;
            progressChunk: number;

            //tslint:disable-next-line:ban-types forbidden-types
            protected _dequeue: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _onLoadBinding: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundComplete: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundOnError: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundOnProgress: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXhrOnError: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXhrOnAbort: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXhrOnLoad: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXdrOnTimeout: Function;

            onStart: MiniSignal;
            onProgress: MiniSignal;
            onComplete: MiniSignal;
            onAfterMiddleware: MiniSignal;

            isDataUrl: boolean;
            isComplete: boolean;
            isLoading: boolean;
            complete(): void;
            abort(message?: string): void;
            //tslint:disable-next-line:ban-types forbidden-types
            load(cb?: Function): void;

            protected _hasFlag(flag: number): boolean;
            protected _setFlag(flag: number, value: boolean): void;
            protected _loadElement(type: string): void;
            protected _loadSourceElement(type: string): void;
            protected _loadXhr(): void;
            protected _loadXdr(): void;
            protected _createSource(type: string, url: string, mime?: string): HTMLSourceElement;
            protected _onError(event?: any): void;
            protected _onProgress(event?: any): void;
            protected _xhrOnError(): void;
            protected _xhrOnAbort(): void;
            protected _xdrOnTimeout(): void;
            protected _xhrOnLoad(): void;
            protected _determineCrossOrigin(url: string, loc: any): string;
            protected _determineXhrType(): number;
            protected _determineLoadType(): number;
            protected _getExtension(): string;
            protected _getMimeXhrType(type: number): string;

            static STATUS_FLAGS: {
                NONE: number;
                DATA_URL: number;
                COMPLETE: number;
                LOADING: number;
            };

            static TYPE: {
                UNKNOWN: number;
                JSON: number;
                XML: number;
                IMAGE: number;
                AUDIO: number;
                VIDEO: number;
                TEXT: number;
            };

            static LOAD_TYPE: {
                XHR: number;
                IMAGE: number;
                AUDIO: number;
                VIDEO: number;
            };

            static XHR_RESPONSE_TYPE: {
                DEFAULT: string;
                BUFFER: string;
                BLOB: string;
                DOCUMENT: string;
                JSON: string;
                TEXT: string;
            };

            static EMPTY_GIF: string;

            texture: Texture;
            spineAtlas: any;
            spineData: any;
            textures?: TextureDictionary;
            spritesheet?: Spritesheet;
        }
        const shared: Loader;
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////MESH///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace mesh {
        export class Mesh extends Container {
            constructor(texture: Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array, drawMode?: number);

            protected _texture: Texture;
            uvs: Float32Array;
            vertices: Float32Array;
            indices: Uint16Array;
            dirty: number;
            indexDirty: number;
            vertexDirty: number;
            autoUpdate: boolean;
            dirtyVertex: boolean;
            protected _geometryVersion: number;
            blendMode: number;
            pluginName: string;
            canvasPadding: number;
            drawMode: number;
            texture: Texture;
            tintRgb: Float32Array;
            protected _glDatas: { [n: number]: any };
            protected _uvTransform: TextureMatrix;
            uploadUvTransform: boolean;
            multiplyUvs(): void;
            refresh(forceUpdate?: boolean): void;
            protected _refresh(): void;
            protected _renderWebGL(renderer: WebGLRenderer): void;
            protected _renderCanvas(renderer: CanvasRenderer): void;
            protected _onTextureUpdate(): void;
            protected _calculateBounds(): void;
            containsPoint(point: Point): boolean;
            tint: number;

            static DRAW_MODES: {
                TRIANGLE_MESH: number;
                TRIANGLES: number;
            };
        }

        export class CanvasMeshRenderer {
            constructor(renderer: CanvasRenderer);

            renderer: CanvasRenderer;

            render(mesh: Mesh): void;
            protected _renderTriangleMesh(mesh: Mesh): void;
            protected _renderTriangles(mesh: Mesh): void;
            protected _renderDrawTriangle(mesh: Mesh, index0: number, index1: number, index2: number): void;
            protected renderMeshFlat(mesh: Mesh): void;

            destroy(): void;
        }

        export class MeshRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            shader: Shader;
            render(mesh: Mesh): void;
        }

        export class Plane extends Mesh {
            constructor(texture: Texture, verticesX?: number, verticesY?: number);
            protected _ready: boolean;
            verticesX: number;
            verticesY: number;
            drawMode: number;

            refresh(): void;

            protected _onTexureUpdate(): void;
        }

        export class NineSlicePlane extends Plane {
            constructor(texture: Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);

            width: number;
            height: number;
            leftWidth: number;
            rightWidth: number;
            topHeight: number;
            bottomHeight: number;

            protected _leftWidth: number;
            protected _rightWidth: number;
            protected _topHeight: number;
            protected _bottomHeight: number;
            protected _height: number;
            protected _width: number;
            protected _origHeight: number;
            protected _origWidth: number;
            protected _uvh: number;
            protected _uvw: number;

            updateHorizontalVertices(): void;
            updateVerticalVertices(): void;
            protected drawSegment(
                context: CanvasRenderingContext2D | WebGLRenderingContext,
                textureSource: any,
                w: number,
                h: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number
            ): void;
            protected _refresh(): void;
        }

        export class Rope extends Mesh {
            constructor(texture: Texture, points: Point[]);

            points: Point[];
            colors: number[];
            autoUpdate: boolean;
            protected _refresh(): void;

            refreshVertices(): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////PARTICLES////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace particles {
        export interface ParticleContainerProperties {
            /**
             * DEPRECIATED - Use `vertices`
             */
            scale?: boolean;
            vertices?: boolean;
            position?: boolean;
            rotation?: boolean;
            uvs?: boolean;
            tint?: boolean;
            alpha?: boolean;
        }
        export class ParticleContainer extends Container {
            constructor(maxSize?: number, properties?: ParticleContainerProperties, batchSize?: number, autoResize?: boolean);

            protected _tint: number;
            protected tintRgb: number | any[];
            tint: number;
            protected _properties: boolean[];
            protected _maxSize: number;
            protected _batchSize: number;
            protected _glBuffers: { [n: number]: WebGLBuffer };
            protected _bufferUpdateIDs: number[];
            protected _updateID: number;
            interactiveChildren: boolean;
            blendMode: number;
            autoResize: boolean;
            roundPixels: boolean;
            baseTexture: BaseTexture;

            setProperties(properties: ParticleContainerProperties): void;
            protected onChildrenChange: (smallestChildIndex?: number) => void;

            destroy(options?: DestroyOptions | boolean): void;
        }
        export class ParticleBuffer {
            constructor(gl: WebGLRenderingContext, properties: any, dynamicPropertyFlags: any[], size: number);

            gl: WebGLRenderingContext;
            size: number;
            dynamicProperties: any[];
            staticProperties: any[];
            staticStride: number;
            staticBuffer: any;
            staticData: any;
            staticDataUint32: any;
            dynamicStride: number;
            dynamicBuffer: any;
            dynamicData: any;
            dynamicDataUint32: any;

            protected _updateID: number;

            destroy(): void;
        }
        export interface ParticleRendererProperty {
            attribute: number;
            size: number;
            uploadFunction: (
                children: PIXI.DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number
            ) => void;
            unsignedByte: any;
            offset: number;
        }
        export class ParticleRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            shader: glCore.GLShader;
            indexBuffer: WebGLBuffer;
            properties: ParticleRendererProperty[];
            protected tempMatrix: Matrix;

            start(): void;
            generateBuffers(container: ParticleContainer): ParticleBuffer[];
            protected _generateOneMoreBuffer(container: ParticleContainer): ParticleBuffer;
            uploadVertices(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number
            ): void;
            uploadPosition(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number
            ): void;
            uploadRotation(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number
            ): void;
            uploadUvs(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
            uploadTint(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number
            ): void;
            uploadAlpha(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number
            ): void;
            destroy(): void;

            indices: Uint16Array;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////PREPARE///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export namespace prepare {
        type AddHook = (item: any, queue: any[]) => boolean;
        type UploadHook<UploadHookSource> = (prepare: UploadHookSource, item: any) => boolean;

        export abstract class BasePrepare<UploadHookSource> {
            constructor(renderer: SystemRenderer);

            limiter: CountLimiter | TimeLimiter;
            protected renderer: SystemRenderer;
            protected uploadHookHelper: UploadHookSource;
            protected queue: any[];
            protected addHooks: AddHook[];
            protected uploadHooks: Array<UploadHook<UploadHookSource>>;
            //tslint:disable-next-line:ban-types forbidden-types
            protected completes: Function[];
            protected ticking: boolean;
            protected delayedTick: () => void;

            //tslint:disable-next-line:ban-types forbidden-types
            upload(item: Function | DisplayObject | Container | BaseTexture | Texture | Graphics | Text | any, done?: () => void): void;
            protected tick(): void;
            protected prepareItems(): void;
            registerFindHook(addHook: AddHook): this;
            registerUploadHook(uploadHook: UploadHook<UploadHookSource>): this;
            protected findMultipleBaseTextures(item: PIXI.DisplayObject, queue: any[]): boolean;
            protected findBaseTexture(item: PIXI.DisplayObject, queue: any[]): boolean;
            protected findTexture(item: PIXI.DisplayObject, queue: any[]): boolean;
            add(item: PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text | any): this;
            destroy(): void;
        }
        export class CanvasPrepare extends BasePrepare<CanvasPrepare> {
            constructor(renderer: CanvasRenderer);

            protected canvas: HTMLCanvasElement;
            protected ctx: CanvasRenderingContext2D;
        }
        export class WebGLPrepare extends BasePrepare<WebGLRenderer> {
            constructor(renderer: WebGLRenderer);
        }
        export class CountLimiter {
            constructor(maxItemsPerFrame: number);

            protected maxItemsPerFrame: number;
            protected itemsLeft: number;

            beginFrame(): void;
            allowedToUpload(): boolean;
        }
        export class TimeLimiter {
            constructor(maxMilliseconds: number);

            protected maxMilliseconds: number;
            protected frameStart: number;

            beginFrame(): void;
            allowedToUpload(): boolean;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////pixi-gl-core/////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    // pixi-gl-core 1.1.4 https://github.com/pixijs/pixi-gl-core
    // sharedArrayBuffer as a type is not available yet.
    // need to fully define what an `Attrib` is.
    export namespace glCore {
        export interface ContextOptions {
            /**
             * Boolean that indicates if the canvas contains an alpha buffer.
             */
            alpha?: boolean;
            /**
             * Boolean that indicates that the drawing buffer has a depth buffer of at least 16 bits.
             */
            depth?: boolean;
            /**
             * Boolean that indicates that the drawing buffer has a stencil buffer of at least 8 bits.
             */
            stencil?: boolean;
            /**
             * Boolean that indicates whether or not to perform anti-aliasing.
             */
            antialias?: boolean;
            /**
             * Boolean that indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha.
             */
            premultipliedAlpha?: boolean;
            /**
             * If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
             */
            preserveDrawingBuffer?: boolean;
            /**
             *  Boolean that indicates if a context will be created if the system performance is low.
             */
            failIfMajorPerformanceCaveat?: boolean;
        }
        export function createContext(view: HTMLCanvasElement, options?: ContextOptions): WebGLRenderingContext;
        export function setVertexAttribArrays(
            gl: WebGLRenderingContext,
            attribs: Attrib[],
            state?: WebGLState
        ): WebGLRenderingContext | undefined;
        export class GLBuffer {
            constructor(gl: WebGLRenderingContext, type: number, data: ArrayBuffer | ArrayBufferView | any, drawType: number);

            protected _updateID?: number;
            gl: WebGLRenderingContext;
            buffer: WebGLBuffer;
            type: number;
            drawType: number;
            data: ArrayBuffer | ArrayBufferView | any;

            upload(data?: ArrayBuffer | ArrayBufferView | any, offset?: number, dontBind?: boolean): void;
            bind(): void;

            static createVertexBuffer(gl: WebGLRenderingContext, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;
            static createIndexBuffer(gl: WebGLRenderingContext, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;
            static create(gl: WebGLRenderingContext, type: number, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;

            destroy(): void;
        }
        export class GLFramebuffer {
            constructor(gl: WebGLRenderingContext, width: number, height: number);

            gl: WebGLRenderingContext;
            frameBuffer: WebGLFramebuffer;
            stencil: WebGLRenderbuffer;
            texture: GLTexture;
            width: number;
            height: number;

            enableTexture(texture: GLTexture): void;
            enableStencil(): void;
            clear(r: number, g: number, b: number, a: number): void;
            bind(): void;
            unbind(): void;
            resize(width: number, height: number): void;
            destroy(): void;

            static createRGBA(
                gl: WebGLRenderingContext,
                width: number,
                height: number,
                data: ArrayBuffer | ArrayBufferView | any
            ): GLFramebuffer;
            static createFloat32(
                gl: WebGLRenderingContext,
                width: number,
                height: number,
                data: ArrayBuffer | ArrayBufferView | any
            ): GLFramebuffer;
        }
        export class GLShader {
            constructor(
                gl: WebGLRenderingContext,
                vertexSrc: string | string[],
                fragmentSrc: string | string[],
                precision?: string,
                attributeLocations?: { [key: string]: number }
            );

            gl: WebGLRenderingContext;
            program?: WebGLProgram | null;
            uniformData: any;
            uniforms: any;
            attributes: any;

            bind(): this;
            destroy(): void;
        }
        export class GLTexture {
            constructor(gl: WebGLRenderingContext, width?: number, height?: number, format?: number, type?: number);

            gl: WebGLRenderingContext;
            texture: WebGLTexture;
            mipmap: boolean;
            premultiplyAlpha: boolean;
            width: number;
            height: number;
            format: number;
            type: number;

            upload(source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement): void;
            uploadData(data: ArrayBuffer | ArrayBufferView, width: number, height: number): void;
            bind(location?: number): void;
            unbind(): void;
            minFilter(linear: boolean): void;
            magFilter(linear: boolean): void;
            enableMipmap(): void;
            enableLinearScaling(): void;
            enableNearestScaling(): void;
            enableWrapClamp(): void;
            enableWrapRepeat(): void;
            enableWrapMirrorRepeat(): void;
            destroy(): void;

            static fromSource(
                gl: WebGLRenderingContext,
                source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement,
                premultipleAlpha?: boolean
            ): GLTexture;
            static fromData(gl: WebGLRenderingContext, data: number[], width: number, height: number): GLTexture;
        }
        export interface Attrib {
            attribute: {
                location: number;
                size: number;
            };
            normalized: boolean;
            stride: number;
            start: number;
            buffer: ArrayBuffer;
        }
        export interface WebGLRenderingContextAttribute {
            buffer: WebGLBuffer;
            attribute: any;
            type: number;
            normalized: boolean;
            stride: number;
            start: number;
        }
        export interface AttribState {
            tempAttribState: Attrib[];
            attribState: Attrib[];
        }

        export class VertexArrayObject {
            static FORCE_NATIVE: boolean;

            constructor(gl: WebGLRenderingContext, state?: WebGLState);

            protected nativeVaoExtension: any;
            protected nativeState: AttribState;
            protected nativeVao: VertexArrayObject;
            gl: WebGLRenderingContext;
            attributes: Attrib[];
            indexBuffer: GLBuffer;
            dirty: boolean;

            bind(): this;
            unbind(): this;
            activate(): this;
            addAttribute(buffer: GLBuffer, attribute: Attrib, type?: number, normalized?: boolean, stride?: number, start?: number): this;
            addIndex(buffer: GLBuffer, options?: any): this;
            clear(): this;
            draw(type: number, size?: number, start?: number): this;
            destroy(): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////UTILS//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export interface DecomposedDataUri {
        mediaType: string;
        subType: string;
        encoding: string;
        data: any;
    }

    export namespace utils {
        export function uid(): number;
        export function hex2rgb(hex: number, out?: number[]): number[];
        export function hex2string(hex: number): string;
        export function rgb2hex(rgb: number[]): number;
        export function canUseNewCanvasBlendModes(): boolean;
        export function getResolutionOfUrl(url: string, defaultValue?: number): number;
        export function getSvgSize(svgString: string): any;
        export function decomposeDataUri(dataUri: string): DecomposedDataUri | void;
        export function getUrlFileExtension(url: string): string | void;
        export function sayHello(type: string): void;
        export function skipHello(): void;
        export function isWebGLSupported(): boolean;
        export function sign(n: number): number;
        export function removeItems<T>(arr: T[], startIdx: number, removeCount: number): void;
        export function correctBlendMode(blendMode: number, premultiplied: boolean): number;
        export function premultiplyTint(tint: number, alpha: number): number;
        export function premultiplyRgba(
            rgb: Float32Array | number[],
            alpha: number,
            out?: Float32Array,
            premultiply?: boolean
        ): Float32Array;
        export function premultiplyTintToRgba(tint: number, alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;
        export function clearTextureCache(): void;
        export function destroyTextureCache(): void;
        export const premultiplyBlendMode: number[][];
        export const TextureCache: any;
        export const BaseTextureCache: any;

        // https://github.com/kaimallea/isMobile
        export namespace isMobile {
            export const apple: {
                phone: boolean;
                ipod: boolean;
                tablet: boolean;
                device: boolean;
            };
            export const android: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            export const amazon: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            export const windows: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            export const seven_inch: boolean;
            export const other: {
                blackberry10: boolean;
                blackberry: boolean;
                opera: boolean;
                firefox: boolean;
                chrome: boolean;
                device: boolean;
            };
            export const any: boolean;
            export const phone: boolean;
            export const tablet: boolean;
        }

        // https://github.com/primus/eventemitter3
        export class EventEmitter {
            static prefixed: string | boolean;

            static EventEmitter: {
                new(): EventEmitter;
                prefixed: string | boolean;
            };

            /**
             * Minimal EventEmitter interface that is molded against the Node.js
             * EventEmitter interface.
             *
             * @constructor
             * @api public
             */
            constructor();

            /**
             * Return an array listing the events for which the emitter has registered listeners.
             *
             * @returns {(string | symbol)[]}
             */
            eventNames(): Array<string | symbol>;

            /**
             * Return the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {Function[]}
             */
            //tslint:disable-next-line:ban-types forbidden-types
            listeners(event: string | symbol): Function[];

            /**
             * Check if there listeners for a given event.
             * If `exists` argument is not `true` lists listeners.
             *
             * @param {(string | symbol)} event The event name.
             * @param {boolean} exists Only check if there are listeners.
             * @returns {boolean}
             */
            listeners(event: string | symbol, exists: boolean): boolean;

            /**
             * Calls each of the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {...*} args Arguments that are passed to registered listeners
             * @returns {boolean} `true` if the event had listeners, else `false`.
             */
            emit(event: string | symbol, ...args: any[]): boolean;

            /**
             * Add a listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            on(event: string | symbol, fn: Function, context?: any): this;

            /**
             * Add a one-time listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            once(event: string | symbol, fn: Function, context?: any): this;

            /**
             * Remove the listeners of a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn Only remove the listeners that match this function.
             * @param {*} context Only remove the listeners that have this context.
             * @param {boolean} once Only remove one-time listeners.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

            /**
             * Remove all listeners, or those of the specified event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {EventEmitter} `this`.
             */
            removeAllListeners(event?: string | symbol): this;

            /**
             * Alias method for `removeListener`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

            /**
             * Alias method for `on`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            addListener(event: string | symbol, fn: Function, context?: any): this;

            /**
             * This function doesn't apply anymore.
             * @deprecated
             */
            setMaxListeners(): this;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////depreciation/////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    // not sure how to handle blendmodes scalemodes basetexturecache
    namespace core {
        /**
         * @class
         * @private
         * @name SpriteBatch
         * @memberof PIXI
         * @see PIXI.ParticleContainer
         * @throws {ReferenceError} SpriteBatch does not exist any more, please use the new ParticleContainer instead.
         * @deprecated since version 3.0.0
         */
        type SpriteBatch = ParticleContainer;

        /**
         * @class
         * @private
         * @name AssetLoader
         * @memberof PIXI
         * @see PIXI.loaders.Loader
         * @throws {ReferenceError} The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.
         * @deprecated since version 3.0.0
         */
        type AssetLoader = loaders.Loader;

        /**
         * @class
         * @private
         * @name Stage
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        type Stage = Container;

        /**
         * @class
         * @private
         * @name DisplayObjectContainer
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        type DisplayObjectContainer = Container;

        /**
         * @class
         * @private
         * @name Strip
         * @memberof PIXI
         * @see PIXI.mesh.Mesh
         * @deprecated since version 3.0.0
         */
        type Strip = mesh.Mesh;

        /**
         * @class
         * @private
         * @name Rope
         * @memberof PIXI
         * @see PIXI.mesh.Rope
         * @deprecated since version 3.0.0
         */
        type Rope = mesh.Rope;

        /**
         * @class
         * @private
         * @name ParticleContainer
         * @memberof PIXI
         * @see PIXI.particles.ParticleContainer
         * @deprecated since version 4.0.0
         */
        type ParticleContainer = particles.ParticleContainer;

        /**
         * @class
         * @private
         * @name MovieClip
         * @memberof PIXI
         * @see PIXI.extras.MovieClip
         * @deprecated since version 3.0.0
         */
        type MovieClip = extras.AnimatedSprite;

        /**
         * @class
         * @private
         * @name TilingSprite
         * @memberof PIXI
         * @see PIXI.extras.TilingSprite
         * @deprecated since version 3.0.0
         */
        type TilingSprite = extras.TilingSprite;

        /**
         * @class
         * @private
         * @name BaseTextureCache
         * @memberof PIXI
         * @see PIXI.utils.BaseTextureCache
         * @deprecated since version 3.0.0
         */
        type BaseTextureCache = any;

        /**
         * @class
         * @private
         * @name BitmapText
         * @memberof PIXI
         * @see PIXI.extras.BitmapText
         * @deprecated since version 3.0.0
         */
        type BitmapText = extras.BitmapText;

        /**
         * @namespace
         * @private
         * @name math
         * @memberof PIXI
         * @see PIXI
         * @deprecated since version 3.0.6
         */
        type math = any;

        /**
         * @class
         * @private
         * @name PIXI.AbstractFilter
         * @see PIXI.Filter
         * @deprecated since version 3.0.6
         */
        type AbstractFilter<U extends object> = Filter<U>;

        /**
         * @class
         * @private
         * @name PIXI.TransformManual
         * @see PIXI.TransformBase
         * @deprecated since version 4.0.0
         */
        type TransformManual = TransformBase;

        /**
         * @static
         * @constant
         * @name PIXI.TARGET_FPMS
         * @see PIXI.settings.TARGET_FPMS
         * @deprecated since version 4.2.0
         */
        type TARGET_FPMS = number;

        /**
         * @static
         * @constant
         * @name PIXI.FILTER_RESOLUTION
         * @see PIXI.settings.FILTER_RESOLUTION
         * @deprecated since version 4.2.0
         */
        type FILTER_RESOLUTION = number;

        /**
         * @static
         * @constant
         * @name PIXI.RESOLUTION
         * @see PIXI.settings.RESOLUTION
         * @deprecated since version 4.2.0
         */
        type RESOLUTION = number;

        /**
         * @static
         * @constant
         * @name PIXI.MIPMAP_TEXTURES
         * @see PIXI.settings.MIPMAP_TEXTURES
         * @deprecated since version 4.2.0
         */
        type MIPMAP_TEXTURES = any;

        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_BATCH_SIZE
         * @see PIXI.settings.SPRITE_BATCH_SIZE
         * @deprecated since version 4.2.0
         */
        type SPRITE_BATCH_SIZE = number;

        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_MAX_TEXTURES
         * @see PIXI.settings.SPRITE_MAX_TEXTURES
         * @deprecated since version 4.2.0
         */
        type SPRITE_MAX_TEXTURES = number;

        /**
         * @static
         * @constant
         * @name PIXI.RETINA_PREFIX
         * @see PIXI.settings.RETINA_PREFIX
         * @deprecated since version 4.2.0
         */
        type RETINA_PREFIX = RegExp | string;

        /**
         * @static
         * @constant
         * @name PIXI.DEFAULT_RENDER_OPTIONS
         * @see PIXI.settings.RENDER_OPTIONS
         * @deprecated since version 4.2.0
         */
        type DEFAULT_RENDER_OPTIONS = number;

        /**
         * @static
         * @name PRECISION
         * @memberof PIXI.settings
         * @see PIXI.PRECISION
         * @deprecated since version 4.4.0
         */
        type PRECISION = string;
    }

    export namespace extras {
        /**
         * @class
         * @name MovieClip
         * @memberof PIXI.extras
         * @see PIXI.extras.AnimatedSprite
         * @deprecated since version 4.2.0
         */
        type MovieClip = extras.AnimatedSprite;

        /**
         * @class
         * @name TextureTransform
         * @memberof PIXI.extras
         * @see PIXI.TextureMatrix
         * @deprecated since version 4.6.0
         */
        type TextureTranform = TextureMatrix;
    }

    export namespace GroupD8 {
        /**
         * @method
         * @name PIXI.GroupD8.isSwapWidthHeight
         * @see PIXI.GroupD8.isVertical
         * @param {number} rotation - The number to check.
         * @returns {boolean} Whether or not the direction is vertical
         * @deprecated since version 4.6.0
         */
        export function isSwapWidthHeight(rotation: number): boolean;
    }

    export namespace settings {
        /**
         * @static
         * @name PRECISION
         * @memberof PIXI.settings
         * @see PIXI.PRECISION
         * @deprecated since version 4.4.0
         */
        type PRECISION = number;
    }
}

declare namespace pixi {
    export const gl: typeof PIXI.glCore;
}

//tslint:disable-next-line:no-single-declare-module
declare module 'pixi.js' {
    export = PIXI;
}