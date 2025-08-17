/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
      }
    }
  }

  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  // [7,1,5,3,6,4]

  let lowestPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    lowestPrice = Math.min(lowestPrice, price); // 1
    maxProfit = Math.max(maxProfit, price - lowestPrice); // 5
  }

  return maxProfit;
};
