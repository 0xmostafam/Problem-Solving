const addBinary = (a: string, b: string): string => {
  let newBinary = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let charA = i >= 0 ? parseInt(a[i]) : 0;
    let charB = j >= 0 ? parseInt(b[j]) : 0;
    let sum = charA + charB + carry;
    if (sum < 2) carry = 0;
    else carry = 1;

    newBinary += sum % 2;

    i--;
    j--;
  }
  if (carry === 1) newBinary += "1";
  return [...newBinary].reverse().join("");
};