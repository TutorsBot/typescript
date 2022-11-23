// var sampleData : string = '22';
// sampleData = 22;


// var sample : number | string = 22;
// sample = '22';
// var sample1 : [] | object = [22, 44];
// sample1 = {
//     ds : 2
// }


// var sample1 : "Fazlur" | [22,55] | undefined;
// sample1 = [22,55];
// sample1 = "Rahman";



// function sums(a : number | string, b : number | string){
//     var a1 = a
//     var b2 = b
//     var sum = a1 + b2 ;
//     console.log(sum)
// }

// sums(55,66);
// sums(100,200);
// sums(400,500);
// sums('500','500');




function calc(a : string | number, b : string | number)  {
    let sum : any= 0;
    if(typeof a === 'number' && typeof b === 'number'){
        sum = a + b;
    }
    if(typeof a === "string"){
        sum = a + b;    
    }
    return sum
}
calc(3, 5);
calc('2', '5')

// calc('2', '5');

// function calculation(a : string | number,b : string | number){
//     if(typeof a === 'number' && typeof b === 'number'){
//         let sum = a + b;
//         console.log(sum);
//     }
//     if(typeof a === "string"){
//         console.log(a + b)
//     }
// }
// calculation("2", "5");