import { Geometries, Geometry } from '../../geometries/types'
import Vec3 from '../../maths/vec3/type'
import OneOf from '../../utils/oneOf'
import RecursiveArray from '../../utils/recursiveArray'

export interface MirrorOptions {
  origin?: Vec3
  normal: Vec3
}

export function mirror<T extends Geometry>(options: MirrorOptions, geometry: T): OneOf<T, Geometries>
export function mirror<T extends Geometry>(options: MirrorOptions, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function mirror(options: MirrorOptions, ...geometries: RecursiveArray<Geometry>): Array<Geometry>

export function mirrorX<T extends Geometry>(geometry: T): OneOf<T, Geometries>
export function mirrorX<T extends Geometry>(...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function mirrorX(...geometries: RecursiveArray<Geometry>): Array<Geometry>

export function mirrorY<T extends Geometry>(geometry: T): OneOf<T, Geometries>
export function mirrorY<T extends Geometry>(...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function mirrorY(...geometries: RecursiveArray<Geometry>): Array<Geometry>

export function mirrorZ<T extends Geometry>(geometry: T): OneOf<T, Geometries>
export function mirrorZ<T extends Geometry>(...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function mirrorZ(...geometries: RecursiveArray<Geometry>): Array<Geometry>
