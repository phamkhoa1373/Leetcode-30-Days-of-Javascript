/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = []; arrLength = arr.length;
    for (let i = 0; i < arrLength; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

