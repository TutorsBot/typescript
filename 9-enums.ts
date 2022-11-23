enum lockAction {
    close,
    open
}

enum doorAction {
    close,
    open,
    partialOpen
}

// console.log(doorAction.close);
// console.log(doorAction.open);

// function checkdo(state : doorAction){
//     console.log(state)
//     switch(state){
//         case doorAction.close:
//             console.log('Door is Close');
//             break;
//         case doorAction.open:
//             console.log('Door is Open');
//             break;
//     }
// }
// checkdo(doorAction.open);



// function checkDoor(state : doorAction){
//     console.log("enum value is : "+state);
//     switch(state){
//         case doorAction.close:
//             console.log('Door is Close');
//             break;
//         case doorAction.open:
//             console.log('Door is Open');
//             break;
//     }
// }

// checkDoor(doorAction.open);
// checkDoor(doorAction.close);
enum DoorStateSpecificValue{
    Open = 3,
    Closed = 7,
    unspecific = 256
}

enum DoorStateString{
    OPEN = "Open",
    CLOSE = "Closed"
}

// DoorStateString.OPEN = "open";

console.log(DoorStateSpecificValue.Open);
console.log(DoorStateString.CLOSE);


const enum DoorStateConst {
    Open = 10,
    Closed = 20
}

// console.log(DoorStateConst.Open);