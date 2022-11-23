import { Module1 as MyMod1 } from "./modules/singleexport";
import { Module2, Module1 } from "./modules/multipleexport";
import * as multifile from "./modules/multipleexport"
import sampleFunc, {Module1 as myMod2, Module2 as myMod3} from "./modules/defaultexports";

// var sampleObj = new MyMod1();
// var sampleObjm1 = new Module1();
// var sampleObjm2 = new Module2();

console.log(sampleFunc());

var obj1 = new myMod2();
var obj2 = new myMod3();



// sampleObj.printName();
// sampleObjm1.printName();
// sampleObjm2.printName();