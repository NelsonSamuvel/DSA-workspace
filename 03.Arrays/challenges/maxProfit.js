const maxProfit = (prices) => {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = Number.MIN_VALUE;
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
    const profit = currentPrice - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 4, 6]));
