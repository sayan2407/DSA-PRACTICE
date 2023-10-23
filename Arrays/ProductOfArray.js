
/**
 * Given an integer array nums, return an array answer such that
answer[i] is equal to the product of all the elements of nums
except nums[I].
The product of any prefix or suffix of nums is guaranteed to fit in a
32-bit integer.
You must write an algorithm that runs in O(n) time and without
using the division operation.
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
 */

const ProductOfArray = (nums) => {
    let product = 1;

    nums.forEach(item=> {
        product = product * item;
    })

    const result = [];

    nums.forEach(item=>{
        result.push(product/item);
    })

    return result;
}

console.log(ProductOfArray([1, 2, 3, 4]));