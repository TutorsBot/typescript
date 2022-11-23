export function delayedP() : Promise<string>{

    return new Promise<string>((
        resolve : (result: string)=>void,
        reject : ()=>void
    )=>{
        setTimeout(()=>{
            console.log(`2 Calling Resolve()`)
            resolve('Data');
        },3000)
    })
}