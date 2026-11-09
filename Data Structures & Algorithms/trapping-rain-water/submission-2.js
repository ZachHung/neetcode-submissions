class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxLeft = [0];
        const maxRight = [0];
        for (const num of height){
            if (maxLeft.length === height.length) break;
            if (num > maxLeft[maxLeft.length -1]){
                maxLeft.push(num)
            } else {
                 maxLeft.push( maxLeft[maxLeft.length -1])
            }
        }

        for (let i = height.length - 1 ; i>0; --i){
            if (height[i] > maxRight[maxRight.length -1]){
                maxRight.push(height[i])
            } else {
                maxRight.push( maxRight[maxRight.length -1])
            }
        }

        let total =0;

        for (const i in height){
            let water = Math.min(maxLeft[i], maxRight[maxRight.length - 1 - i]) - height[i]
            if (water < 0) water = 0
            total+=water
        }

        return total
    }
}
