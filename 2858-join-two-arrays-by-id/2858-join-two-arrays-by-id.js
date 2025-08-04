/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let newArray = arr1.concat(arr2);

    let result = {};

    for(const item of newArray) {
        if(!result[item.id]) {
            result[item.id] = item;
            continue;
        } 

        result[item.id] = {...result[item.id], ...item};
    }

    return Object.values(result);
};