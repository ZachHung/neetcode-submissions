class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const map = new Map()

        for (const i in nums) {
            if (!map.has(target - nums[i])) {
                map.set(nums[i], +i)
            } else {
                return [map.get(target - nums[i]),+i]
            }
        }
    }
}
