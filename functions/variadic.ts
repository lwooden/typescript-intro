// The REST Parameter ...

// take in a variable number of arguments that are store in an array
var product = function(...nums:number[]):number {

    var total = 0

    // iterate over the array and process each value
    for(var i=0;i<nums.length;i++) {
        // console.log(nums[i])
        total += nums[i]
    }

    return total
}

console.log(product(1,1,1,1))
