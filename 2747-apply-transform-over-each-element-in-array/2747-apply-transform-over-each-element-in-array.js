/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
arr = [1, 2, 3]

var map = function (arr, fn) {
    let newArr = [], arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        newArr[i] = fn(arr[i], i)    
    }
    return newArr;
};