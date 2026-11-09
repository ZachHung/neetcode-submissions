class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (const index in nums){
            const summand = target - nums[index];
            const getIndexOfSubmand = map.get(summand);
            if (getIndexOfSubmand) return [+getIndexOfSubmand, +index];
            map.set(nums[index], index);
        }
    }
}
