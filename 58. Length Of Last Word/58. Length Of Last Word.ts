// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s: string): number => {
  let count = 0;
  let newWord = false;
  [...s].forEach(element => {
    if(element === " ")
      newWord = true;
    else if(element !== " " && newWord){
      count = 1;
      newWord = false;
    }
    else
      count++;
  })

  return count;
};