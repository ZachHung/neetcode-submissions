class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const mapS = new Map();
        const mapT = new Map();

        for (let i=0; i<s.length; i++) {

            const getLetterS = mapS.get(s[i]);
            const getLetterT = mapT.get(t[i]);

            mapS.set(s[i], getLetterS ? getLetterS +1 : 1);
            mapT.set(t[i], getLetterT ? getLetterT +1 : 1);
        }

        for (const [key, value] of mapS) {
            if (mapT.get(key) !== value) return false;
        }
        return true
    }
}
