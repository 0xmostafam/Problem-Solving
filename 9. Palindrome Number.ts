/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

const isPalindrome = (x: number): boolean => {
    if (x < 0)
        return false;
    
    let number = x;
    let reverse = 0;
    while(number >= 1){
        reverse *= 10;
        reverse += number % 10;
        number = Math.floor(number / 10);
    }
    return reverse === x;
}

console.log(isPalindrome(121))