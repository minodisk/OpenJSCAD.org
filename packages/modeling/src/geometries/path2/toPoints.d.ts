import Vec2 from '../../maths/vec2/type'
import { Geometry } from '../types'

export default toPoints

declare function toPoints(geometry: Geometry): Array<Vec2>
