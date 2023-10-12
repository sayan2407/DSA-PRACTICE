/**
 * 3. Contains Duplicate
Given an integer array nums, return true if any value appears at
least twice in the array, and return false if every element is
distinct.
Input: nums = [1,2,3,1]
Output: true
 */

const isDuplicateExist = (arr) => {
    let map = {};

    for(let i=0;i<arr.length;i++) {
        if ( map[arr[i]] ) {
            return true;
        } else {
            map[arr[i]] = 1;
        }
    }

    return false;
}

console.log(isDuplicateExist([1, 2, 3, 1])); //true
console.log(isDuplicateExist([1, 2, 3, 4])); //false