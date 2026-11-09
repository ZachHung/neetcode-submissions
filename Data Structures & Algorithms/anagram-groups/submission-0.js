class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (const str of strs){
            const counter = Array(26).fill(0);
            for (const index in str){
                const indexOfLetter = str.charCodeAt(index) - "a".charCodeAt(0);
                counter[indexOfLetter]++;
            }
            const key = counter.join("|");
            
            if (!map.has(key)) map.set(key, [])            
            map.get(key).push(str)
        }
        return [...map.values()]
    }
}
