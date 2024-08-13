const utilityFunctions = {};
/**
 * 
 * @param {integer} min (inclusive)
 * @param {integer} max (exclusive)
 * @param {integer} decimals (greater than 0)
 * @returns 
 */
utilityFunctions.getRandomNumber = (min, max, decimals = 0) => {
  const integer = min + Math.floor(Math.random() * (max - min));
  const divisor = Math.pow(10, decimals);
  const decimal = decimals > 0
    ? Math.floor(Math.random() * divisor) / divisor 
    : 0;

  return integer + decimal;
}

module.exports = utilityFunctions;