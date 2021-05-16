

class Check {
    static bankName:string // common across all classes; no need to set aside memory each time is defined in a new class
    customerName:string
    accNo:number
    routingNo:number

}

var check = new Check()
// check.bankName // bankName is no longer specific to an instance of the class therefore we cannot query it this way
Check.bankName = "BOA" // now it is a higher level property that can be accessed directly on the parent Class itself (class level property)
console.log(Check.bankName)
