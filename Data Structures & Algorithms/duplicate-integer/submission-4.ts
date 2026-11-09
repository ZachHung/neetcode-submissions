class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map();

        for (const num of nums) {
            if (map.has(num)) return true
            else map.set(num, 0)
        }

        return false
    }
}
