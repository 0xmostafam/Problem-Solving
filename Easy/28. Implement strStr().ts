// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Solved it with help of this video : https://www.youtube.com/watch?v=JoF0Z7nVSrA&ab_channel=NeetCode

const strStr = (haystack: string, needle: string): number => {
  if (!(needle.length && haystack.length)) return 0;

  let lps = new Array(needle.length).fill(0);
  let i = 1;
  let prevLPS = 0;

  while (i < needle.length) {
    if (needle[i] === needle[prevLPS]) {
      lps[i] = prevLPS + 1;
      prevLPS++;
      i++;
    } else if (prevLPS == 0) {
      lps[i] = 0;
      i++;
    } else {
      prevLPS = lps[prevLPS - 1];
    }
  }

  i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else if (j === 0) {
      i++;
    } else {
      j = lps[j - 1];
    }

    if (j === needle.length) return i - needle.length;
  }

  return -1;
};

console.log(strStr("hello", "ll"));
