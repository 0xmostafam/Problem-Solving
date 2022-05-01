/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums: number[], target: number) => {
    const map = new Map();
    let answer = [];
    nums.every((element,index) => {
        if (!map.has(target - element)) {
            map.set(element,index);
            return true;
        } else {
            answer = [map.get(target - element), index];
            return false;
        }
    });
    return answer;
};

console.log(twoSum([2,7,11,15],9));