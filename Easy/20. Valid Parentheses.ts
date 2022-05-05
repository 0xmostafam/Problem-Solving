// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (s: string): boolean => {
  const stack = [];
  const result = [...s].every((element) => {
    let pop = true;
    switch (element) {
      case "(":
      case "[":
      case "{":
        stack.push(element);
        break;
      case ")":
        pop = stack.pop() === "(" ? true : false;
        break;
      case "]":
        pop = stack.pop() === "[" ? true : false;
        break;
      case "}":
        pop = stack.pop() === "{" ? true : false;
        break;
    }

    return pop;
  });

  if (stack.length) return false;
  return result;
};
