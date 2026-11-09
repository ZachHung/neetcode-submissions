class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let alphaFill = Array(26).fill(0);
        let mapWord = new Map()
        for (const i of strs){
            for (const ch of i){
                const key = ch.charCodeAt(0)-"a".charCodeAt(0);
                alphaFill[key]++;
            }
            const key = alphaFill.join("#");
            if (!mapWord.has(key)){
                mapWord.set(key, [i])
            } else {
                mapWord.get(key).push(i)
            }
            alphaFill = Array(26).fill(0)
        }

        return [...mapWord.values()] 
    }
}
