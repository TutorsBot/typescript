
// interface soType{
//     username : string,
//     designation : string,
//     empid : number,
//     displayFunc : Function 
//     sampleKey ?: string
// }

// var sampleObj : soType = {
//     username : "Fazlur Rahman",
//     designation : "Full Stack Developer",
//     empid : 2323,
//     displayFunc : function displayFunc(){
//         console.log(this.username)
//     },
//     sampleKey : "Dd",
// }

// sampleObj = {
//     username: "Fazlur Rahman",
//     designation : "Full Stack Developer",
//     empids : 2323,
//     displayFuncs : function displayFunc(){
//         console.log(this.username)
//     }
// }

// sampleObj.displayFunc();

// var username = sampleObj.username;
// console.log(username);

// var {username} = sampleObj;
// console.log(username);

interface objvI {
    emp : string,
    empid : number,
    department : string
}

// function sampleFunc(objv : objvI){
//     console.log(objv)
// }

// sampleFunc({emp : "Fazlur", empid  : 22, department: "Full Stack Development"});



class SampleClass implements objvI{
    emp = "Fazlur"
    empid = 22
    department  = "Development"
    designation = "Full Stack Developer"
}

// var sampleObj : objvI = new SampleClass();

var fazlur = new SampleClass();

// console.log(sampleObj);


// constructor 

class ClassConstructor{
    constructor(_empid : number){
        this.empid = _empid
    }
    empid :number;  
}

var Fazlur = new ClassConstructor(33);
console.log(Fazlur.empid)
Fazlur.empid = 44
console.log(Fazlur.empid)

// Get and Set

// class ClassWithAccessors {
//     private _id : number = 0;
//     get id() : number {
//         console.log(`get id property`)
//         return this._id
//     } 
//     set id(value :number) {
//         console.log(`set id property`)
//         this._id = value;
//     }
// }
// var cwag = new ClassWithAccessors();

// cwag.id;
// cwag.id = 80;

class StaticFunc {
   static printTwo(){
    console.log('2')
   }
}
StaticFunc.printTwo();





var username : string = "Fazlur"
