import { Path2, Geom2, Geom3 } from '../../geometries/types'
import RecursiveArray from '../../utils/recursiveArray'

type Geometry = Path2 | Geom2 | Geom3

export default expand

export interface ExpandOptions {
  delta?: number
  corners?: 'edge' | 'chamfer' | 'round'
  segments?: number
}

declare function expand(options: ExpandOptions, geometry: Path2 | Geom2): Geom2
declare function expand(options: ExpandOptions, geometry: Geom3): Geom3
declare function expand(options?: ExpandOptions, ...geometries: RecursiveArray<Path2 | Geom2>): Geom2
declare function expand(options?: ExpandOptions, ...geometries: RecursiveArray<Geom3>): Geom3
