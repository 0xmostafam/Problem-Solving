function backspaceCompare(s: string, t: string): boolean {

    return evaluateBackspace(s) === evaluateBackspace(t);
};

const evaluateBackspace = (s: string) => {
    const sStack = [];
    [...s].forEach(char => {
        if (char === "#"){
            sStack.pop()
        } else {
            sStack.push(char)
        }
    })
    return sStack.join(" ")
}