// @flow

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
export default function isNumeric(n: any): boolean {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
