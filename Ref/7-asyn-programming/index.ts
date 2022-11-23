// Callback Function in Typescript
// function sampleFunc(callback : ()=> void ){
//     callback();
// }

// sampleFunc(()=>{console.log("Callback Function")})

import * as fs from 'fs';

// fs.readFile('./intro.json', (err, data)=>{
//     if(err){
//         console.log(`Error Have Occured ${err}`)
//     }else{
//         // let ob = JSON.parse(data.toString());
//         console.log(`The Data of the Sample is "${data}"`)
//     }
// })


// let rdata : string = '';
// fs.readFile('./intro.json', (err, data)=>{
//     if(err){
//         console.log(`Error Have Occured ${err}`)
//     }else{
//         let ob = JSON.parse(data.toString());
//         rdata = ob.name
//         fs.readFile('./sample.txt', (err, data)=>{
//             if(err){
//                 console.log(`Error Have Occured ${err}`)
//             }else{
//                 // let ob = JSON.parse(data.toString());
//                 console.log(`The Data of the Sample is "${data}"`)
//                 console.log(`The Data of the Sample is "${rdata}"`)
//             }
//         })
//     }
// })




// then catch
// fs.promises.readFile('./sample.txt').then((value)=>{
//     console.log(`text in sample.txt is ${value}`)
//     return fs.promises.readFile('./sample1.txt')
// }).then((value)=>{console.log(`text in sample1.txt is ${value}`)})
// .catch((err)=>{ console.log(`${err}`)})


// function SamplePromises(resolve : ()=> void, reject : () => void) {
//         // resolve()
//         reject()
// }

// function sPromises() : Promise<void>{
//     return new Promise(SamplePromises)
// }

// sPromises().then(()=>{
//     console.log("Sample Promises")
// })

// sPromises().then(()=>{
//     console.log("Sample Promises")
// }).catch(()=>{
//     console.log("Promises Error")
// })

// SamplePromises(()=>console.log("success"), ()=> console.log("error"));


interface IConnection {
    server : string,
    port : number
}

interface IError{
    code : number,
    message : string
}

// JSON Data

interface IDataFlow {
    id : number,
    name : string,
    surname : string
}

function PromisesFI(connection : IConnection , accessKey : string, iserror : boolean): Promise<IDataFlow[]>{
    return new Promise<IDataFlow[]>((
        resolve : (results : IDataFlow[])=>void,
        reject : (results : IError)=> void
    )=>{
        if(iserror){
            reject({code : 102, message : 'Sample Error'});
        }
        resolve([{id : 1,name : "Faz",surname : "Rahman"},{id : 2,name : "Fazlur",surname : "Rahman"},{id : 3,name : "Fazal",surname : "Rahman"}]);
    })
}

var connectionDB  =  {
        server : 'https://localhost',
        port : 3454
}

PromisesFI(
    connectionDB,
    'username@password',
    false 
).then((result:IDataFlow[] )=>{
    result.map((item, i)=>{
        console.log(`${i+1} ${item.id} ${item.name} ${item.surname}`)
    })
}).catch((errCaught : IError)=>{
    console.log(`${errCaught.code} ${errCaught.message}`)
})