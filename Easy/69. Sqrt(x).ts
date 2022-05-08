// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

const mySqrt = (x: number): number => {
  let i = 0;
  let j = 1;
  while (true) {
    x -= j;
    if (x < 0) return i;
    i++;
    j += 2;
  }
};
