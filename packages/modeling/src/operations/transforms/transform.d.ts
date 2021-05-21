import { Geometries, Geometry } from '../../geometries/types'
import Mat4 from '../../maths/mat4/type'
import OneOf from '../../utils/oneOf'
import RecursiveArray from '../../utils/recursiveArray'

export default transform

declare function transform<T extends Geometry>(matrix: Mat4, geometry: T): OneOf<T, Geometries>
declare function transform<T extends Geometry>(matrix: Mat4, ...geometries: RecursiveArray<T>): Array<OneOf<T, Geometries>>
