import { Geometries, Geometry } from '../../geometries/types'
import Vec1 from '../../maths/vec1/type'
import Vec2 from '../../maths/vec2/type'
import Vec3 from '../../maths/vec3/type'
import OneOf from '../../utils/oneOf'
import RecursiveArray from '../../utils/recursiveArray'

export function rotate<T extends Geometry>(angles: Vec1 | Vec2 | Vec3, geometry: T): OneOf<T, Geometries>
export function rotate<T extends Geometry>(angles: Vec1 | Vec2 | Vec3, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function rotate(angles: Vec1 | Vec2 | Vec3, ...geometries: RecursiveArray<Geometry>): Array<Geometry>

export function rotateX<T extends Geometry>(angle: number, geometry: T): OneOf<T, Geometries>
export function rotateX<T extends Geometry>(angle: number, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function rotateX(angle: number, ...geometries: RecursiveArray<Geometry>): Array<Geometry>

export function rotateY<T extends Geometry>(angle: number, geometry: T): OneOf<T, Geometries>
export function rotateY<T extends Geometry>(angle: number, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function rotateY(angle: number, ...geometries: RecursiveArray<Geometry>): Array<Geometry>

export function rotateZ<T extends Geometry>(angle: number, geometry: T): OneOf<T, Geometries>
export function rotateZ<T extends Geometry>(angle: number, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
export function rotateZ(angle: number, ...geometries: RecursiveArray<Geometry>): Array<Geometry>
