// function sampleFunc(){
//     var a1 = "a1 value";
//     var b2 = "b2 value";
//     var display = (a1 : any)=>{
//         console.log(a1)
//     }
// }

// class sampleClass{
//     a1 = "a1 value";
//     b2 = "b2 value";
//     display(a1 : any) {
//         console.log(a1)
//     }
// }

// Why we are creating the class - 
// Reusablity
// Inheritance
// Polymorphism
// Encapsulation
// abstraction


// class sampleClass{
//     a1 = "a1 value";
//     b2 = "b2 value";
//     static display(a1 : any) {
//         console.log(a1)
//     }
// }
// // var Sfazlur = new sampleClass();

// // sampleClass.display("I am not known to anybody");
// class sample {
//     sam = 22; // Property
//     display(saa : string){ // method
//         console.log(saa)
//     }
// }

// class another extends sample {
//     va = "a"
// }

// var sam = new another();

// sam.display("sample");

// var sam2  = new sample();
// sam2.display("sample");


// abstract class sample {
//     display(saa : string){
//     console.log(saa)
// }}

// class another extends sample {
//     va = "a"
// }


// var sam = new another();
// sam.display("sample");

// var sam1 = new sample();
// sam1.display("sample");



// console.log(Sfazlur)

// var Sfazlur = new sampleClass();
// var Safthab = new sampleClass();
// Sfazlur.display("My name is fazlur");
// Safthab.display("My name is afthab");

// var Sfazlur = {
//     a1 : "a1 value",
//     b2 : "b2 value",
//     display(a1 : any) {
//         console.log(a1)
//     }
// }

// var safthab = {
//     a1 : "a1 value",
//     b2 : "b2 value",
//     display(a1 : any) {
//         console.log(a1)
//     }
// }


// abstract class HumanClass{
//     eye  = 2;
//     hands = 2;
//     legs = 2;
// }

// class FazlurClass extends HumanClass {
//     firstName = "Fazlur";
//     lastName = "Rahman";
//     age = 30;
//     getName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var fazlur = new FazlurClass();
// console.log(fazlur.eye);



// class Person{
//     firstName = "Fazlur";
//     lastName = "Rahman";
//     age = 30;
//     getName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var fazlur = new Person();
// console.log(fazlur.firstName);

// var afthab = new Person();
// console.log(afthab.firstName);


// class PersonC{
//     constructor(fn : String, ln : String, age : number){
//         this.age = age;
//         this.firstName = fn;
//         this.lastName = ln;
//     }
//     firstName : String = "";
//     lastName : String = "";
//     age = 18;
//     getName() : String {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var fazlur = new PersonC("Fazlur", "Rahman", 28);
// console.log(fazlur.firstName);

// var afthab = new PersonC("Afthab", "Hadeed", 30);
// console.log(afthab.firstName);



// class PersonC{
//     constructor(fn : String, ln : String, age : number){
//         this.age = age;
//         this.firstName = fn;
//         this.lastName = ln;
//     }
//     private firstName : String = "";
//     private lastName : String = "";
//     age = 18;
//     private upperCase(a : String) : String {
//         return a.toUpperCase();
//     }
//     getName() : String {
//         var name = this.upperCase(`${this.firstName} ${this.lastName}`);
//         return name;
//     }
// }

// var fazlur = new PersonC("Fazlur", "Rahman", 28);
// console.log(fazlur.upperCase());
// console.log(fazlur.firstName);




// class BankAccount{
//     constructor(id : String, ac : String){
//         this.identityNumber = id;
//         this.accountNumber = ac;
//     }
//     private identityNumber : String = "";
//     private accountNumber : String = "";
//     get id(){
//         var maskedId = "XXXX-"+this.identityNumber.slice(4,8)
//         return maskedId;
//     }
//     set id(value){
//         this.identityNumber = value;
//         var maskedId = "XXXX-"+this.identityNumber.slice(4,8)
//         console.log(maskedId)
//     }

// }

// var fazlurAcc = new BankAccount("12345678", "9876543210");
// console.log(fazlurAcc.id);
// fazlurAcc.id = "87654321"
// console.log(fazlurAcc.id);


// class FazlurClass {
//     firstName = "Fazlur";
//     lastName = "Rahman";
//     age = 30;
//     getName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var fazlur = new FazlurClass();
// fazlur.getName();


// class FazlurClass {
//     static firstName = "Fazlur";
//     static lastName = "Rahman";
//     age = 30;
//     static getName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(FazlurClass.getName());



