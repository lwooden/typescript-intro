var Student = /** @class */ (function () {
    function Student() {
        this.id = 1;
    }
    return Student;
}());
var PrivateStudent = /** @class */ (function () {
    function PrivateStudent() {
    }
    Object.defineProperty(PrivateStudent.prototype, "getName", {
        // Accessor Methods
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrivateStudent.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return PrivateStudent;
}());
var student = new Student();
student.name = "Low";
console.log(student.id);
var privateStudent = new PrivateStudent();
privateStudent.setName = "Joe";
console.log(privateStudent.getName);
// trying to set and get the values for _name in this way will not work due to is private setting
// pStudent._name = "Low"
// console.log(pStudent._name)
