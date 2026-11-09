class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {


        // we want to make sure the current window length - count the most frequent 
        // value in the window is <= than k;
        // by introducting a map
        // time O(n*m)
        // space O(m)

        let l = 0;
        let count = new Map();

        let res = 0;

        for (let r =0; r<s.length; r+=1){


            count.set(s[r], 1+(count.get(s[r])||0));
            //check when exceeding k we move l to the right and recount the map 
            
            while (((r-l+1) - Math.max(...count.values())) > k){
                count.set(s[l], count.get(s[l]) -1);
                l+=1
            }

            res  =  Math.max(res, r - l +1)
        }

        return res
    }
}
