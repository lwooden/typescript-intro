

class Student {
    public name:string
    public readonly id:number = 1

}

// Encapsulation
class PrivateStudent {

    // this value can only be set/retrivied using functions WITHIN this class -- accessor methods (get/set)
    private _name:string

    // Accessor Methods
    get getName() : string {
        return this._name
    }

    set setName(name: string) {
        this._name = name;
    }
}

var student = new Student()
student.name = "Low"
console.log(student.id)

var privateStudent = new PrivateStudent()
privateStudent.setName = "Joe"
console.log(privateStudent.getName)

// trying to set and get the values for _name in this way will not work due to is private setting
// pStudent._name = "Low"
// console.log(pStudent._name)

