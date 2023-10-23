/**
 * Given an integer array nums, find the subarray with the largest
sum, and return its sum.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum of 1.
 */

const MaxSubArray = (nums) => {

    let currentSum = 0;
    let maxSum = -Infinity;
    for ( let i=0;i<nums.length;i++ ) {
        currentSum = Math.max( nums[i], currentSum + nums[i] );
        maxSum = Math.max( maxSum, currentSum );
    }

    return maxSum;
}

console.log('Max sub array: ', MaxSubArray( [-2,1,-3,4,-1,2,1,-5,4]) );

/**
 * Given an integer array nums, find a subarray that has the largest
product, and return the product.
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a
subarray.
 */

const MaxProdArray = (nums) => {
    let currProduct = 1;
    let maxProduct = -Infinity;

    for ( let i=0;i<nums.length;i++ ) {
        currProduct = Math.max( nums[i], currProduct * nums[i] );
        maxProduct = Math.max( currProduct, maxProduct );
    }

    return maxProduct;
}

console.log('Max prod array: ', MaxProdArray( [-2,0,-1] ) );
