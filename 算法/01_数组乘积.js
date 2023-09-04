/*
除自身之外数组的乘积问题：
给定一个整数数组nums，返回一个数组answer，使得answer[i]等于nums中除了nums[i]以外所有元素的乘积。
你必须写一个O(n)时间内且不使用除法操作的算法。
示例：
输入： nums = [1,2,3,4]
输出： [24,12,8,6]

前缀积：[a,b,c,d] => [1,a,a*b,a*b*c]
后缀积：[a,b,c,d] => [d*c*b,d*c,d,1]

进阶：你能否用O(1)的额外空间复杂度解决这个问题?
*/
let productExceptSelf = function (nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1)
    let product = 1;
    for (let i = 1; i < n; i++) {
        product *= nums[i - 1]
        answer[i] = product;
    }
    product = 1
    for (let i = n - 2; i >= 0; i--) {
        product *= nums[i + 1]
        answer[i] *= product;
    }
    return answer;
}
let arr = [1,2,3,4]
console.log(productExceptSelf(arr));
