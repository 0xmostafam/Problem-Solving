// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

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

console.log(removeDuplicates("deeedbbcccbdaa", 3));
