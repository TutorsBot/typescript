export class Module1 {
    print() : void {
        localPrint('Modular Class Called')
    }
}

function localPrint(text : string){
    console.log(text);
}