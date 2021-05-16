// take in a variable number of arguments that are store in an array
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var total = 0;
    // iterate over the array and process each value
    for (var i = 0; i < nums.length; i++) {
        // console.log(nums[i])
        total += nums[i];
    }
    return total;
};
// var result = product(1,1,1,1)
console.log(product(1, 1, 1, 1));
