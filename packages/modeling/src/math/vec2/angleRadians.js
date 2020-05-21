/**
 * Calculate the angle of the given vector.
 * @param {vec2} vector - the vector of reference
 * @returns {Number} angle in radians
 * @alias module:modeling/math/vec2.angleRadians
 */
const angleRadians = (vector) => {
  // y=sin, x=cos
  return Math.atan2(vector[1], vector[0])
}

module.exports = angleRadians