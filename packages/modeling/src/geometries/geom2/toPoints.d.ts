import Geom2 from './type'
import Vec2 from '../../maths/vec2/type'
import { Geometry } from '../types'

export default toPoints

declare function toPoints(geometry: Geom2): Array<Vec2>
