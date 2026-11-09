class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) return false;

        const map1 = new Map();
        const map2 = new Map();

        
        for (const i of s ){
            map1.set(i, (map1.get(i) || 0) + 1);
        }

        for (const i of t ){
            map2.set(i, (map2.get(i) || 0) + 1);
        }

        for (const [key, value] of map1){
            if (map2.get(key) !== value) return false
        }

        return true
    }
}
