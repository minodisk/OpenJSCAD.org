/**
 * Calculates the dot product of two vectors.
 *
 * @param {vec3} a - the first operand
 * @param {vec3} b - the second operand
 * @returns {Number} dot product of a and b
 * @alias module:modeling/math/vec3.dot
 */
const dot = (a, b) => {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

module.exports = dot