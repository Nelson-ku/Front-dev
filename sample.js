function doMath(x,y)
const newvar= 'hello world';//the const keyword is used hen the variable is not likely to change

let variable2= 10;//used when the variable is likely to be reassigned 

//data types

const var1=10;
const var2='some value';
const var3=false;

typeof var1;//returns the variable data type
const var4=[10,20,30,40];
//accessing an array
console.log(var4[0]);

//defining an object with properties
const objectVar={ prop1:20,prop2:50};
//accessing an object property
objectVar.prop1
//this is a nested object 
const nestedObject ={
    layer1:{
      layer2:{
        layer3:{
          targetValue:20
        }
      }
    }
  }

//retrieving the value in you do the following;
nestedObject.layer1.layer2.layer3.targetValue

//you can also assign a function to a variable

const functinvar= function(){
    return 20;
}

//to retieve the value we call out the variable :
functinvar();

//practice questions
let myBoolean=true;
undefined
const myString= "hello world";
undefined
let firstNumber=20;
undefined
let secondNumber =40;
undefined
let secondNumber2=80;
const myObject={firstProperty:myArray,sumProperty:firstNumber+secondNumber};

console.log(myObject)

myObject.sumProperty
60
myObject.firstProperty[1];
"hello world"
const variable1=20;

const variable3='40';

const resultVariable = variable1 + variable2;

console.log(resultVariable);


typeof resultVariable;
"string"