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