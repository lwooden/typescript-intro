
var x:number = 10;

var fname:string = "Erin"
var lname:string = "Wooden"

var isTrue:boolean = false

var product:any = {
    name: "Call of Duty",
    type: "Video Game",
    Manufacturer: "Treyarch"
}

var array1:Array<string> = ["Low", "Erin", "Low Jr", "Joe"]
var array2:Array<number> = [2, 5, 10]
var array3:Array<any> = [2, 5, 10, "Low", true]




function isThisLow():string {
    if (fname == "Lowell" && lname == "Wooden") {
        isTrue = true

        return "This is Low!"
    } else {
        return "This is not Low!!"
    }
}



console.log(x)
console.log(fname, lname);
console.log(isThisLow())
console.log(product)
console.log(array1)
console.log(array2)
console.log(array3)