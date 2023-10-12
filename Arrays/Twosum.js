/**
 * Given an array of integer nums and an integer target, return
indices of the two numbers such that they add up to the target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
 */

/**
 * Two for loop used
 * Time complexity O(n2)
 */
const Twosum = (nums, target) => {
    for ( let i=0;i<nums.length-1;i++) {
        for ( let j=i+1;j<nums.length;j++ ) {
            if ( nums[i] + nums[j] === target ) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

/**
 * Better approch with Time complexity O(n)
 */

const TwoSumAdvance = (nums, target) => {
    let map = {};

    for (let i=0;i<nums.length;i++) {
        let element = target -nums[i];

        if ( element in map ) {
            return [map[element], i];
        }

        map[nums[i]] = i;
    }

    return null;
}

console.log(Twosum([2, 7, 11, 15], 9));
console.log(TwoSumAdvance([2, 7, 11, 15], 9));