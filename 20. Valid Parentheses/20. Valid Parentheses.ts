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