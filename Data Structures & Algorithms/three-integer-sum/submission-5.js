class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a,b)=>a-b);
        const ans = [];
        let checked = false;
        for (let i =0; i< sortedNums.length; i++){
            if (checked === sortedNums[i]) continue;
            let target = 0 - sortedNums[i];
            if (target < 0) break;
            let l = i + 1;
            let r = sortedNums.length - 1;
            if (sortedNums[r] + sortedNums[r] < target) continue;
            while ( l< r) {
                let sum = sortedNums[l] + sortedNums[r];
                if (sum > target) r--;
                else if (sum < target ) l++;
                    else {
                        ans.push([sortedNums[i], sortedNums[l], sortedNums[r]])
                        l++;
                        r--;
                        checked = sortedNums[i];
                        if (sortedNums[l] === sortedNums[l-1] && sortedNums[r] === sortedNums[r+1]) { l++; r--}
                    }
            }
        }
        return ans
    }
}
