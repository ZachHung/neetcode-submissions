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

        let l = 0;
        for (let r = s1.length; r <=s2.length; ++r, ++l){
            console.log(s1Map, s2Map)
            const isPermutation = this.isAnagram(s1Map, s2Map);
            if (isPermutation) return true
            s2Map.set(s2[l], s2Map.get(s2[l]) - 1);
            const getRightLetter = s2Map.get(s2[r])
            s2Map.set(s2[r], getRightLetter ? getRightLetter +1 : 1);
        }
        return false
    }

    checkInclusionN(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            s2Count[index]++;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }
            l++;
        }
        return matches === 26;
    }
}
