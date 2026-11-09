class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxLeft = [0];
        const maxRight = [0];
        let total =0;
        for (const num of height){
            if (maxLeft.length === height.length) break;
            let max = Math.max(maxLeft[maxLeft.length - 1], num);
            maxLeft.push(max)
        }

        for (let i = height.length - 1 ; i>0; --i){
            let max = Math.max(maxRight[maxRight.length - 1], height[i]);
            maxRight.push(max)
        }
        
        for (const i in height){
            let water = Math.min(maxLeft[i], maxRight[maxRight.length - 1 - i]) - height[i]
            if (water < 0) water = 0
            total+=water
        }

        return total
    }
}
