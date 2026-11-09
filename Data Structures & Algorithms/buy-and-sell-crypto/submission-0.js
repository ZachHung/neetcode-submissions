class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let max = 0

        while (j < prices.length){
            if (prices[i] > prices[j]){
                i = j;
                j++
            } else {
                max = Math.max(max, prices[j]- prices[i]);
                j++
            }
        }

        return max
    }
}
