class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [1];
        for (let i =0; i<nums.length - 1 ; i++) {
            prefix.push((prefix[prefix.length - 1]) * nums[i]);
        }

        let postfix = 1;
        for (let i = prefix.length -1; i>=0; i--){
            prefix[i] *= postfix;
            postfix *= nums[i];
        }
        return prefix
    }
}
