class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let all = nums[0];
        let hasZero = false;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === 0 && !hasZero) {
                hasZero = true;
            }
            else {
                all = nums[i] * all;  
            }
        }

        if (all === 0) return new Array(nums.length).fill(0);

        const ans = [];
        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i] === 0 ? all : (hasZero ? 0 : (all / nums[i])))
        }

        return ans;
    }
}
