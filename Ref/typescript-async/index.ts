// Callbacks
// import fs from 'fs';

// (function sampleCallBack(callback : ()=>void){
//     function afterFunc(){
//         console.log('Step 3 : Execution after the afterTime ')
//         callback();
//     }
//     console.log('Setp 1 : Calling BeforTime')
//     setTimeout(afterFunc, 1000)
//     console.log('Step 2 : after calling setTimeOut')
// })(()=>console.log("Step 4 : I will Be Execute Finally"));


// fs.readFile('./samplefile.txt', (err, data)=>{
//    if(err){
//         console.log(`An Error Occured ${err}`);
//    }else{
//         console.log(`samplefile content ${data}`)
//             fs.readFile('./samplefile1.txt', (err, data)=>{
//                 if(err){
//                     console.log(`An Error Occured ${err}`);
//                 }else{
//                     console.log(`samplefile content ${data}`)
//                         fs.readFile('./samplefile2.txt', (err, data)=>{
//                             if(err){
//                                 console.log(`An Error Occured ${err}`);
//                             }else{
//                                 console.log(`samplefile content ${data}`)
//                             }
//                         })
//                 }
//             })
//    }
// })


// Promises
// import { rejects } from 'assert';
// import * as fs from 'fs';
// import { resolve } from 'path';


// fs.promises.readFile('./sampleFile.txt').then((value)=>{
//     console.log(`Value : ${value}`);
//     return fs.promises.readFile('./sampleFile1.txt');
// }).then((value)=>{
//     console.log(`Value : ${value}`);
//     return fs.promises.readFile('./sampleFile3.txt');
// }).then((value)=>{
//     console.log(`Value : ${value}`);
//     return fs.promises.readFile('./sampleFile2.txt');
// }).catch((err)=>{
//     console.log(err);
// })


// function SamplePromises(resolve : ()=> void, reject : () => void) {
//     function afterTO(){
//         resolve()
//     }
//     setTimeout(afterTO, 1000)
// }

// function tPromises() : Promise<void> {
//     return new Promise<void>(SamplePromises)
// }

// tPromises().then(()=>{
//     console.log('Promises Executed')
// })


// function delayedPromise() : Promise<void>{
//     return new Promise<void>((resolve : () => void,reject : ()=>void)=>{
//         // function afterTO(){
//         //     resolve()
//         // }
//         // setTimeout(afterTO, 1000)
//         reject();
//     });
// }

// delayedPromise().then(()=>{
//     console.log('Promises Called')
// }).catch(()=>{
//         console.log('Error in Promises');
// })



// function promisesReturnString(throwError : boolean) : Promise<string>{
//     return new Promise<string>((resolve : (IDataFlow:any)=>void, reject : (errorC:number)=>void)=>{
//         if(throwError){
//             reject(301)
//         }
//         resolve('Promises Executed')
//     })
// }
// promisesReturnString(true).then((returnVa : string)=>{
//     console.log('Sample Promises '+ returnVa)
// }).catch((errorF:number)=>{
//     console.log('Sample Promises')
// })





// Async and Await

// import { delayedP } from "./lib/asyncLib";


// (async function callDelayedP (){
//     console.log(`1. I was called first`);
//     var returnedData ;
//      await delayedP().then((result)=>{
//         returnedData = result;
//      });
//     console.log(`3. ${returnedData}`)
// })();



// function printGeneric<T>(value : T ) {
//     console.log(`typeod T is : ${typeof value}`);
//     console.log(`value is : ${value}`);
// }

// printGeneric<stri>(1);
// printGeneric('test');
// printGeneric(true);
// printGeneric(()=>{});
// printGeneric({id:1});

// function multipleTypes<A, B>(first : A, second : B){
//     console.log(`typeof A is : ${typeof first} | typeof B is : ${typeof second}`);
//     console.log(`value is : ${first} |  ${ second} `);
// }

// multipleTypes<string, number>('sample', 1);
// // multipleTypes('1', '2');

// class concat<T extends Array<string> | Array<number>>{
//         public concatArr(items : T ) : string{
//             let returnstring ="";
//             for(let i = 0; i <items.length; i++){
//                 returnstring += i > 0 ? ',' : "";
//                 returnstring += items[i].toString();
//             }
//             return returnstring;
//         }
// }

// let conObj = new concat();
// let concatResult = conObj.concatArr(['2', '3', '4']);
// console.log(typeof concatResult);


// interface IPrintId{
//     id : number,
//     print() : void
// }

// interface IPrintName {
//     name : string,

//     print() : void
// }

// function useP<T extends IPrintId | IPrintName>(item : T) : void{
//     item.print();
// }

// useP({id : 22, print: ()=>console.log('Print Invoked')});

// function printProperty<T, K extends keyof T>(object : T, key: K) {
//     let propertyValue = object[key];
//     console.log(propertyValue);
// }

// let sampleObj = {
//     id : 1,
//     name : 'Sample Name',
//     print() { console.log(`${this.id}`)}
// }

// printProperty(sampleObj, "id");


