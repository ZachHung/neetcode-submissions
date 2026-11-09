class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const ans = []
        for (const num of nums){
            const value = map.get(num);
            map.set(num, value? value + 1: 1)
        }
        const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
        return [...sortedMap.keys()].slice(0,k)
    }
}
