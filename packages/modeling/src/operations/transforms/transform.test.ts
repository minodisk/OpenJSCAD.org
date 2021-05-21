import test from 'ava'

import { comparePoints, comparePolygonsAsPoints } from '../../../test/helpers'

import mat4 from '../../maths/mat4'

import { geom2, geom3, path2 } from '../../geometries'

import { transform } from './index'

import { Vec3 } from '../../maths/vec3'

test('transform: transforming of a path2 produces expected changes to points [TS]', (t) => {
  const matrix = mat4.fromTranslation(mat4.create(), [2, 2, 0])
  let geometry = path2.fromPoints({}, [[0, 0, 0], [1, 0, 0]])

  geometry = transform(matrix, geometry)
  const obs = path2.toPoints(geometry)
  const exp = [[2, 2], [3, 2]]
  t.true(comparePoints(obs, exp))
})

test('transform: transforming of a geom2 produces expected changes to sides [TS]', (t) => {
  const matrix = mat4.fromScaling(mat4.create(), [5, 5, 5])
  let geometry = geom2.fromPoints([[0, 0], [1, 0], [0, 1]])

  geometry = transform(matrix, geometry)
  const obs = geom2.toPoints(geometry)
  const exp = [[0, 0], [5, 0], [0, 5]]
  t.true(comparePoints(obs, exp))
})

test('transform: transforming of a geom3 produces expected changes to polygons [TS]', (t) => {
  const matrix = mat4.fromTranslation(mat4.create(), [-3, -3, -3])
  const points: Array<Array<Vec3>> = [
    [[-2, -7, -12], [-2, -7, 18], [-2, 13, 18], [-2, 13, -12]],
    [[8, -7, -12], [8, 13, -12], [8, 13, 18], [8, -7, 18]],
    [[-2, -7, -12], [8, -7, -12], [8, -7, 18], [-2, -7, 18]],
    [[-2, 13, -12], [-2, 13, 18], [8, 13, 18], [8, 13, -12]],
    [[-2, -7, -12], [-2, 13, -12], [8, 13, -12], [8, -7, -12]],
    [[-2, -7, 18], [8, -7, 18], [8, 13, 18], [-2, 13, 18]]
  ]
  let geometry = geom3.fromPoints(points)
  geometry = transform(matrix, geometry)
  const obs = geom3.toPoints(geometry)
  const exp = [
    [[-5, -10, -15], [-5, -10, 15], [-5, 10, 15], [-5, 10, -15]],
    [[5, -10, -15], [5, 10, -15], [5, 10, 15], [5, -10, 15]],
    [[-5, -10, -15], [5, -10, -15], [5, -10, 15], [-5, -10, 15]],
    [[-5, 10, -15], [-5, 10, 15], [5, 10, 15], [5, 10, -15]],
    [[-5, -10, -15], [-5, 10, -15], [5, 10, -15], [5, -10, -15]],
    [[-5, -10, 15], [5, -10, 15], [5, 10, 15], [-5, 10, 15]]
  ]
  t.true(comparePolygonsAsPoints(obs, exp))
})
