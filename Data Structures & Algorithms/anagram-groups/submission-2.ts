class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
const wordKeyMap =  new Map<string, string[]>();

        for (const word of strs){
            const map = new Map<string, number>();

            for (const i of word){
                map.set(i, (map.get(i) || 0)+1);
            }

            const keySeed = new Array(26).fill(0);
            for (const [key,value] of map){
                keySeed[key.charCodeAt(0) - "a".charCodeAt(0) ] = value;
            }

            const key = keySeed.join("#")

                const value = wordKeyMap.get(key) || []
                 wordKeyMap.set(key, [...value, word])
        }

        const ans = []

       for (const [_, value] of wordKeyMap){
            ans.push(value)
       }
       return ans
    }
       
        

}