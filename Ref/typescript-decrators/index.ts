
// function simpleDecorator(constructor : Function){
//     console.log('First Decorator');
// }

// function sampleDecorator(constructor : Function){
//     console.log('Second Decorator')
// }

// @simpleDecorator
// @sampleDecorator
class sampleClasswithDecrator{
}

// class decorator
// properties decorator
// method decorator
// parameterdecorator

// function classDecorator(constructor : Function){
//     console.log('Class Decorator');
// }

// function propertyDecorator(target : any, propertyKey : string){
//     console.log('Property Decorator')
// }

// function methodDecorator(target : any, propertyKey : string, descriptor ?: PropertyDescriptor){
//     console.log('Method Decorator')
// }

// function parameterdecorator(target : any, propertyKey : string, parameterIndex : number){
//     console.log('Parameter Decorator')
// }

// @classDecorator
// class allDecoratorExample{
//     @propertyDecorator
//     id : number = 1;

//     @methodDecorator
//     print(){
        
//     }

//     setID(@parameterdecorator id:number){

//     }
// }



function classDecorator(name : string){
    return (constructor : Function)=>{
            console.log(name);
        }
}

@classDecorator('Sample')
class SampleClass{
 
}
// var scd = new sampleClasswithDecrator();