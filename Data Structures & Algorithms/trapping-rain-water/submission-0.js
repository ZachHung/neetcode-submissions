class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxL = [0]
        const maxR = [0]
          for (let i = 0; i < height.length - 1 ; i++){
            if (maxL[maxL.length - 1] < height[i] ) maxL.push( height[i])
           else maxL.push(maxL[maxL.length - 1])
        }
        for (let i = height.length -1; i>0 ; i--){
            if (maxR[maxR.length - 1] < height[i] ) maxR.push(height[i])
           else maxR.push(maxR[maxR.length - 1])
        }

        let sum = 0;

        for (let i =0; i<maxL.length; i++){
            const min = Math.min(maxL[i], maxR[maxR.length - 1 -i])
            if (min - height[i] >0) sum += (min - height[i])

        }

        return sum
    }
}
