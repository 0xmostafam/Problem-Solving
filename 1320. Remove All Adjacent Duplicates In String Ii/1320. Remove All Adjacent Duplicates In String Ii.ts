const removeDuplicates = (s: string, k: number): string => {
  let charStack: any[][] = [];

  [...s].forEach((element) => {
    if (charStack.length && charStack[charStack.length - 1][0] === element)
      charStack[charStack.length - 1][1]++;
    else charStack.push([element, 1]);

    if (charStack[charStack.length - 1][1] === k) charStack.pop();
  });

  let newStr = "";

  charStack.forEach((element) => {
    newStr += element[0].repeat(element[1]);
  });
  return newStr;
};