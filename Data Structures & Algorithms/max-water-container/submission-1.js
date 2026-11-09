class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length -1;
        let max = 0;
        while (l<r){
            console.log({l,r})
            let minHeight = Math.min(heights[l], heights[r])
            const vol = minHeight * (r - l);
            max = Math.max(max, vol);
            if (heights[l] < heights[r]) l++
            else if (heights[r] < heights[l]) r--
            else l++
        }
        return max;
    }
}
