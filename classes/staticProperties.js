var Check = /** @class */ (function () {
    function Check() {
    }
    return Check;
}());
var check = new Check();
// check.bankName // bankName is no longer specific to an instance of the class therefore we cannot query it this way
Check.bankName = "BOA"; // now it is a higher level property that can be accessed directly on the parent Class itself
console.log(Check.bankName);
