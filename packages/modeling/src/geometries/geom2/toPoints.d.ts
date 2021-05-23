import Geom2 from './type'
import Vec2 from '../../maths/vec2/type'
import Path2 from '../path2/type'

export default toPoints

declare function toPoints(geometry: Geom2): Array<Vec2>
declare function toPoints(geometry: Path2): Array<Vec2>
