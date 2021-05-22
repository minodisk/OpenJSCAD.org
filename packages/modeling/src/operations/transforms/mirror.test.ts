import test from 'ava'

import { comparePoints, comparePolygonsAsPoints } from '../../../test/helpers'

import { geom2, geom3, path2 } from '../../geometries'

import { Vec3 } from '../../maths/vec3'

import { mirror, mirrorX, mirrorY, mirrorZ } from './index'

test('mirror: mirroring of path2 about X/Y produces expected changes to points', (t) => {
  const geometry = path2.fromPoints({}, [[-5, 5], [5, 5], [-5, -5], [10, -5]])

  // mirror about X
  let mirrored = mirror({ normal: [1, 0, 0] }, geometry)
  let obs = path2.toPoints(mirrored)
  let exp = [[5, 5], [-5, 5], [5, -5], [-10, -5]]
  t.true(comparePoints(obs, exp))

  mirrored = mirrorX(geometry)
  obs = path2.toPoints(mirrored)
  t.true(comparePoints(obs, exp))

  // mirror about Y
  mirrored = mirror({ normal: [0, 1, 0] }, geometry)
  obs = path2.toPoints(mirrored)
  exp = [[-5, -5], [5, -5], [-5, 5], [10, 5]]
  t.true(comparePoints(obs, exp))

  mirrored = mirrorY(geometry)
  obs = path2.toPoints(mirrored)
  t.true(comparePoints(obs, exp))
})

test('mirror: mirroring of geom2 about X/Y produces expected changes to points', (t) => {
  const geometry = geom2.fromPoints([[-5, -5], [0, 5], [10, -5]])

  // mirror about X
  let mirrored = mirror({ normal: [1, 0, 0] }, geometry)
  let obs = geom2.toPoints(mirrored)
  let exp = [[5, -5], [0, 5], [-10, -5]]
  t.true(comparePoints(obs, exp))

  mirrored = mirrorX(geometry)
  obs = geom2.toPoints(mirrored)
  t.true(comparePoints(obs, exp))

  // mirror about Y
  mirrored = mirror({ normal: [0, 1, 0] }, geometry)
  obs = geom2.toPoints(mirrored)
  exp = [[-5, 5], [0, -5], [10, 5]]
  t.true(comparePoints(obs, exp))

  mirrored = mirrorY(geometry)
  obs = geom2.toPoints(mirrored)
  t.true(comparePoints(obs, exp))
})

test('mirror: mirroring of geom3 about X/Y/Z produces expected changes to polygons', (t) => {
  const points: Array<Array<Vec3>> = [
    [[-2, -7, -12], [-2, -7, 18], [-2, 13, 18], [-2, 13, -12]],
    [[8, -7, -12], [8, 13, -12], [8, 13, 18], [8, -7, 18]],
    [[-2, -7, -12], [8, -7, -12], [8, -7, 18], [-2, -7, 18]],
    [[-2, 13, -12], [-2, 13, 18], [8, 13, 18], [8, 13, -12]],
    [[-2, -7, -12], [-2, 13, -12], [8, 13, -12], [8, -7, -12]],
    [[-2, -7, 18], [8, -7, 18], [8, 13, 18], [-2, 13, 18]]
  ]
  const geometry = geom3.fromPoints(points)

  // mirror about X
  let mirrored = mirror({ normal: [1, 0, 0] }, geometry)
  let obs = geom3.toPoints(mirrored)
  let exp = [
    [[2, 13, -12], [2, 13, 18], [2, -7, 18], [2, -7, -12]],
    [[-8, -7, 18], [-8, 13, 18], [-8, 13, -12], [-8, -7, -12]],
    [[2, -7, 18], [-8, -7, 18], [-8, -7, -12], [2, -7, -12]],
    [[-8, 13, -12], [-8, 13, 18], [2, 13, 18], [2, 13, -12]],
    [[-8, -7, -12], [-8, 13, -12], [2, 13, -12], [2, -7, -12]],
    [[2, 13, 18], [-8, 13, 18], [-8, -7, 18], [2, -7, 18]]
  ]
  t.true(comparePolygonsAsPoints(obs, exp))
  t.deepEqual(obs, exp)

  mirrored = mirrorX(geometry)
  obs = geom3.toPoints(mirrored)
  t.true(comparePolygonsAsPoints(obs, exp))

  // mirror about Y
  mirrored = mirror({ normal: [0, 1, 0] }, geometry)
  obs = geom3.toPoints(mirrored)
  exp = [
    [[-2, -13, -12], [-2, -13, 18], [-2, 7, 18], [-2, 7, -12]],
    [[8, 7, 18], [8, -13, 18], [8, -13, -12], [8, 7, -12]],
    [[-2, 7, 18], [8, 7, 18], [8, 7, -12], [-2, 7, -12]],
    [[8, -13, -12], [8, -13, 18], [-2, -13, 18], [-2, -13, -12]],
    [[8, 7, -12], [8, -13, -12], [-2, -13, -12], [-2, 7, -12]],
    [[-2, -13, 18], [8, -13, 18], [8, 7, 18], [-2, 7, 18]]
  ]
  t.true(comparePolygonsAsPoints(obs, exp))

  mirrored = mirrorY(geometry)
  obs = geom3.toPoints(mirrored)
  t.true(comparePolygonsAsPoints(obs, exp))

  // mirror about Z
  mirrored = mirror({ normal: [0, 0, 1] }, geometry)
  obs = geom3.toPoints(mirrored)
  exp = [
    [[-2, 13, 12], [-2, 13, -18], [-2, -7, -18], [-2, -7, 12]],
    [[8, -7, -18], [8, 13, -18], [8, 13, 12], [8, -7, 12]],
    [[-2, -7, -18], [8, -7, -18], [8, -7, 12], [-2, -7, 12]],
    [[8, 13, 12], [8, 13, -18], [-2, 13, -18], [-2, 13, 12]],
    [[8, -7, 12], [8, 13, 12], [-2, 13, 12], [-2, -7, 12]],
    [[-2, 13, -18], [8, 13, -18], [8, -7, -18], [-2, -7, -18]]
  ]
  t.true(comparePolygonsAsPoints(obs, exp))

  mirrored = mirrorZ(geometry)
  obs = geom3.toPoints(mirrored)
  t.true(comparePolygonsAsPoints(obs, exp))
})