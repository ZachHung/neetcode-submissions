class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const ch of s){
            const top = stack.length - 1
            if ( ch === "]" && stack[top] === "[" || ch === "}" && stack[top] === "{"||ch === ")" && stack[top] === "(") 
            stack.pop()
            else stack.push(ch)
        }
        return stack.length === 0
    }
}
