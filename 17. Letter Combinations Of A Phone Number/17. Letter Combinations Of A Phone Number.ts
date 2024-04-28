const letterCombinations = (digits: string): string[] => {
  if (digits.length === 0) return [];
  const numbersMap = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "qprs",
    "8": "tuv",
    "9": "wxyz",
  };

  let res = [];
  const backtrack = (i: number, currentString: string) => {
    if (currentString.length === digits.length) {
      res.push(currentString);
      return;
    }

    for (const char of numbersMap[digits[i]]) {
      backtrack(i + 1, currentString + char);
    }
  };

  backtrack(0, "");

  return res;
};