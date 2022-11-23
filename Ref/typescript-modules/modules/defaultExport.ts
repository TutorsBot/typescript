export default function defaultFunc(a : number, b : number) : number{
    return a+b;
}



export class Module1 {
    print() : void {
        localPrint('Module1 Class Called')
    }
}

export class Module2 {
    print() : void {
        localPrint('Module2 Class Called')
    }
}

function localPrint(text : string){
    console.log(text);
}