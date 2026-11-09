class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const t of tokens) {
            if (t === "+" || t === "-" || t === "*" || t === "/" ){
                const secondOperand = stack.pop();
                const firstOperand = stack.pop();
                let result;
                switch (t) {
                    case "+":
                        result = +firstOperand + +secondOperand;
                        break;
                    case "-":
                        result = +firstOperand - +secondOperand;
                        break;
                    case "*":
                        result = +firstOperand * +secondOperand;
                        break;
                    case "/":
                        result = Math.trunc(+firstOperand / +secondOperand);
                        break;
                }

                stack.push(result);
            } else stack.push(t);
        }

        return stack[stack.length -1 ]
    }
}
