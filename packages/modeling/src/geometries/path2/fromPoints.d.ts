import Path2 from './type'
import Vec2 from '../../maths/vec2/type'
import Vec3 from '../../maths/vec3/type'

export default fromPoints

export interface FromPointsOptions {
  closed?: boolean
}

declare function fromPoints(options: FromPointsOptions, points: Array<Vec2 | Vec3>): Path2
