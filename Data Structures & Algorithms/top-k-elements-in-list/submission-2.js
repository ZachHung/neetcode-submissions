class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = Array.from({ length: nums.length }, () => []);
        const map = new Map();
        for (const num of nums){
            map.set( num, (map.get(num) || 0) + 1);
        }

        for (let [num, count] of map) {
            counter[count-1].push(num);
        }

        const ans = []
        for (let i = counter.length -1; i>=0; i--){
            if (!counter[i].length) continue;
            for (const n of counter[i]) {
                ans.push(n);
                if (ans.length === k) return ans;
            }
        }
    }
}
