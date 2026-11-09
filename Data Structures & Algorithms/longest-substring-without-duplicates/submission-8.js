class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set(), l = 0, r = 0, max = 0
        while (r < s.length){
            while (set.has(s[r])){
                set.delete(s[l]);
                l++
            }
            set.add(s[r]);
            max = Math.max(max, set.size)
            r++
        }
        return max;
    }
}
