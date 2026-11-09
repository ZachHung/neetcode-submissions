class Solution {

    isAnagram(mapS, mapT) {
        for (const [key, value] of mapS) {
            if (mapT.get(key) !== value) return false;
        }
        return true
    }
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion26N(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Map = new Map();
        const s2Map = new Map();

        for (let i = 0; i < s1.length; i++) {
            const getLetter1 = s1Map.get(s1[i]);
            const getLetter2 = s2Map.get(s2[i])
            s1Map.set(s1[i], getLetter1 ? getLetter1 +1 : 1);
            s2Map.set(s2[i], getLetter2 ? getLetter2 +1 : 1);
        }

        let l = 0;
        for (let r = s1.length; r <= s2.length; ++r, ++l){
            console.log(s1Map, s2Map)
            const isPermutation = this.isAnagram(s1Map, s2Map);
            if (isPermutation) return true
            s2Map.set(s2[l], s2Map.get(s2[l]) - 1);
            const getRightLetter = s2Map.get(s2[r])
            s2Map.set(s2[r], getRightLetter ? getRightLetter +1 : 1);
        }
        return false
    }

    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Map = new Map();
        const s2Map = new Map();

        for (let i = 0; i < s1.length; i++) {
            const getLetter1 = s1Map.get(s1[i]);
            const getLetter2 = s2Map.get(s2[i])
            s1Map.set(s1[i], getLetter1 ? getLetter1 +1 : 1);
            s2Map.set(s2[i], getLetter2 ? getLetter2 +1 : 1);
        }

        let matches = 26;
        for (const [key, value] of s1Map) {
           
            if (s2Map.get(key) !== value ) matches--;
        }

        let l = 0;
        for (let r = s1.length; r <= s2.length; r++, l++) {
            console.log(s1Map, s2Map)
            console.log("matches", matches)
            if (matches === 26) {
                return true;
            }

            const getRightLetter = s2Map.get(s2[r])
            s2Map.set(s2[r], getRightLetter ? getRightLetter + 1: 1)
            if (s1Map.get(s2[r]) === s2Map.get(s2[r])){
                matches++
                
            } else if (s1Map.get(s2[r]) + 1 === s2Map.get(s2[r])) {
                matches--
            }
            console.log("matchesR", matches)

            s2Map.set(s2[l], s2Map.get(s2[l]) - 1)
             if (s1Map.get(s2[l]) === s2Map.get(s2[l])){
                matches++
            } else if (s1Map.get(s2[l]) - 1 === s2Map.get(s2[l])) {
                matches--
            }
            console.log("matchesL", matches)
        }
        return false
    }
}
