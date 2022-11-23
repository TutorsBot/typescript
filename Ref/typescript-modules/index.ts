// import {Module1 as MyMod1} from "./modules/singleexport";
// import {Module1, Module2} from "./modules/multipleexport";
// import * as Multipleexport from "./modules/multipleexport";
import defaultAdd, {Module1, Module2} from "./modules/defaultExport";



// let mod1 = new MyMod1();
// let modu1 = new Module1();
// let modu2 = new Module2();


// let modu2 = new Multipleexport.Module2();

// modu2.print();

console.log(defaultAdd(1, 3));