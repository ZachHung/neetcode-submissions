class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumberic = (s) =>{
        let code = s.charCodeAt(0);
        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) {
                return false;
        }
        return true;
    }

    let i= 0,
        j = s.length - 1
    while ( i <= j ) {
        if (isAlphaNumberic(s[i])) {
            if (isAlphaNumberic(s[j])) {
                if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
                i++; 
                j--
            } else j--;
        } else i++;
    }
    return true;
    }
}
