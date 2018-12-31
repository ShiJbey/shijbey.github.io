import { Vector3 } from "three";
import * as seedrandom from "seedrandom";
interface VerticesAndTriangles {
    vertices: number[];
    triangles: number[];
}
export declare class Sword {
    style: string;
    geometry: THREE.BufferGeometry;
    triangles: number[];
    vertices: number[];
    colors: number[];
    normals: number[];
    constructor(style: string);
}
export interface SwordTemplate {
    style: string;
    baseWidth: number;
    widthMarginRatio: number;
    length: number;
}
export interface GenerationParameters {
    baseWidth: number;
    maxBaseDivs: number;
    maxMidDivs: number;
    maxTipDivs: number;
    minDivLength: number;
    bladeWidthToleranceRatio: number;
    bladeThickness: number;
    fullerWidthRatio: number;
    equalBaseDivs: boolean;
    equalMidDivs: boolean;
    equalTipDivs: boolean;
    bladeBaseProportion: number;
    bladeMidProportion: number;
    applyFuller: boolean;
}
export declare class SwordGenerator {
    seed: string;
    randGenerator: seedrandom.prng;
    constructor(seed: string);
    generateSword(template: SwordTemplate, genParams: GenerationParameters): Sword;
    buildBlade(template: SwordTemplate, genParams: GenerationParameters, sword: Sword): Sword;
    buildGuard(template: SwordTemplate, genParams: GenerationParameters, sword: Sword, bladeWidth?: number, bladethickness?: number, guardThickness?: number, guardBladeRatio?: number): Sword;
    buildHandle(template: SwordTemplate, genParams: GenerationParameters, sword: Sword, handleLength?: number, handleWidth?: number, numHands?: number): Sword;
    buildPommel(template: SwordTemplate, genParams: GenerationParameters, sword: Sword, bladeWidth?: number, handleLength?: number, pommelBladeWidthRatio?: number): Sword;
    static createBladeCrossSection(bladeWidth: number, fullerDepth: number, fullerWidth: number, genParams: GenerationParameters): number[];
    static extrudeTopMultiple(vertices: number[], direction: Vector3, numRepeat: number): VerticesAndTriangles;
    static extrudeTop(vertices: number[], direction: Vector3): VerticesAndTriangles;
    static extrudeFace(vertices: number[], faceIndices: number[], direction: Vector3): VerticesAndTriangles;
    static modifyEdgeWidth(swordGenerator: SwordGenerator, vertices: number[], leftEdgeVertIndices: number[], rightEdgeVertIndices: number[], templateBladeWidth: number, widthToleranceRatio: number, symmetric?: boolean): number[];
    static createBladeTip(vertices: number[], topVertIndices: number[]): number[];
    static getAllVertsIndicesAsLayers(vertices: number[], numDivs: number, bladeLength: number): number[][];
    static getTopVertIndices(vertices: number[], geomHeight?: number): number[];
    static getLeftEdgeVertIndices(vertices: number[], bladeWidth: number): number[];
    static getRightEdgeVertIndices(vertices: number[], bladeWidth: number): number[];
}
export {};
//# sourceMappingURL=SwordGenerator.d.ts.map