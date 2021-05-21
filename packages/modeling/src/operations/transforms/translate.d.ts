import { Geometries, Geometry } from '../../geometries/types'
import Vec1 from '../../maths/vec1/type'
import Vec2 from '../../maths/vec2/type'
import Vec3 from '../../maths/vec3/type'
import OneOf from '../../utils/oneOf'
import RecursiveArray from '../../utils/recursiveArray'

export function translate<T extends Geometry>(offset: Vec1 | Vec2 | Vec3, geometry: T): OneOf<T, Geometries>
export function translate<T extends Geometry>(offset: Vec1 | Vec2 | Vec3, ...geometries: RecursiveArray<T>): Array<Geometry>

export function translateX<T extends Geometry>(offset: number, geometry: T): OneOf<T, Geometries>
export function translateX<T extends Geometry>(offset: number, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>

export function translateY<T extends Geometry>(offset: number, geometry: T): OneOf<T, Geometries>
export function translateY<T extends Geometry>(offset: number, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>

export function translateZ<T extends Geometry>(offset: number, geometry: T): OneOf<T, Geometries>
export function translateZ<T extends Geometry>(offset: number, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
