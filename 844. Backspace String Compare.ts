/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

function backspaceCompare(s: string, t: string): boolean {
  return evaluateBackspace(s) === evaluateBackspace(t);
}

// O(n) Time, O(n) Space
const evaluateBackspace = (s: string) => {
  const sStack = [];
  [...s].forEach((char) => {
    if (char === "#") {
      sStack.pop();
    } else {
      sStack.push(char);
    }
  });
  return sStack.join(" ");
};
