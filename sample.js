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
//operators

//Arithmetic
let startNum2=0;
undefined
startNum2++
0
startNum2
1
startNum2++
1
startNum2
2
startNum2--
2
startNum2
1
const myVar=20;
undefined

20 +50
70
50-20
30
20/2
10
2*2
4
const result=20+50/2;
undefined
result
45
100%50
0
8^2
10
8**2
64
const startNum=0;
undefined
startNum++

//assignment operators
let x= 10;
undefined
x+=5;
15
x
15
x-=4
11
x/=3
3.6666666666666665
x*=2
7.333333333333333

//comparison operators
//=== == !== !=

const result =20>18;
undefined
result
true
const result2=20===20;
undefined
result2
true
20 ===20
true
20==20
true
const numVal=20;
undefined
const strVal="50";
undefined
typeof numVal
"number"
typeof strVal
"string"
numVal==strVal;
false
const striVal ="20";
undefined
numVal==striVal;
true
numVal===striVal;
false
Number(striVal)
20
Number(striVal)===numVal
true

const numVal= 20;
undefined
const stringVal="20";
undefined
numVal==stringVal;
true
numVal !=stringVal;
false
numVal !==stringVal;
true
true===true
true
const myObj{
  prop1:"som value",
  prop2:20
};

const myObj={
  prop1:"som value",
  prop2:20
};
undefined
const myArray=[1,2,3,4,5];
undefined
myArray ===myArray
true
const anotherArr=[1,2,3,4,5];
undefined
myArray===anotherArr
false
myObj===myObj
true

const anotherObj={
  prop1:"some value",
  prop2:20
};
undefined
myObj==anotherObj
false

40>20
true
20<=20
true
30>=20
true

//ternary operators
const result =20===20? 'values match':'values do not match';
undefined
result
"values match"
let resultVar;
undefined
if (20===20){
  resultVar='values match';
 
}else{
  resultVar='values do not match';}
"values match"
resultVar
"values match" 

//logical operators
20=== 20&& 10===10;
true
20=== 20&& 10===12;
false
20=== 20|| 10===12;
true
20=== 10|| 10===12;
false
!(20 ===20)
false
const isUserLogged=true;
undefined
const doesUserHavePermission=false;
undefined
const canUserPerform=isUserLogged &&doesUserHavePermission;

const result =!(((40/20) ===2 && true)||('yes'==='no'));
undefined
result
false
const step1 =40/20;
undefined
const step2=step1===2;
undefined
step2
true
const step3=step2&& true;
undefined
step3
true
const step4='yes'==='no';
undefined
const step5=step3||step4;
undefined
const step6=!step5;
undefined
step6
false
const result = (()=>{
  return 20;
})();
undefined
result
20
//practice programs
const numVar=0;
undefined
numVar++;
//this code doesn't work since we used const in variable declaration
undefined
let numVar2=0;
undefined
numVar2++;
0
numVar2++;
1
numVar2++;
2
console.log(numVar2);
//3 debugger eval code:1:9
undefined
const exp1=100%50;
undefined
const exp2=100/50;
undefined
const exp=exp1<exp2;
undefined
const exp4=exp&&300+5===305;
undefined
const exp5=!exp4;
undefined
console.log(exp5);
//false debugger eval code:1:9
undefined
exp1
0
exp2
2
exp
true
exp4
true
exp5
false
const myObj ={
  prop1:'first value',
}
undefined
const myObj ={
  prop1:'first value',
  prop2:20
};

const myObj1 ={
  prop1:'first value',
  prop2:20
};
undefined
const myArr=[40,50,2];
undefined
const result =myObj1.prop2===(myArr[0]/myArr[2]);

const result1 =myObj1.prop2===(myArr[0]/myArr[2]);
undefined
result1
true
const myObj3={
  nestedObj1:{
    price:100,
    quantity:5
  },
 nestedObj2:{
   price:150,
   quantity:2
 }
};
undefined
const myArr1=[myObj3.nestedObj1,myObj3.nestedObj2];
undefined
const result =
     (myArr1[0].price*myArr1[0].quantity)>
     (myArr1[1].price*myArr1[1].quantity); 

     const result3 =
     (myArr1[0].price*myArr1[0].quantity)>
     (myArr1[1].price*myArr1[1].quantity);
undefined

result

20

//Javascript conditionals

if('some string'==='another string'){
  console.log('the strings are equal');
}
undefined
if('some string'==='another string'){
  console.log('the strings are equal');
    
}else{
  console.log('the strings are not equal');…
//the strings are not equal debugger eval code:5:12
undefined
const myExpress =(20==20)&&(50===50);
undefined
myExpress
true
const firstNum=20;
const secondNum=10;
undefined
const JsExpress=firstNum>secondNum;
undefined
if (JsExpress){
 console.log('this expression is true');
}
//this expression is true debugger eval code:2:11
undefined
if (JsExpress){
 console.log('this expression is true');
}else{
 console.log('this expression is false');
}
//this expression is true debugger eval code:2:11
undefined
if (JsExpress){
 console.log('this expression is true');
}else if (firstnumber >0){
 console.log('the expression is false and the firstNumber is greater than 0');
}else{

}}
//this expression is true


//Javascript loops
for (let i =0;i<100;i++){
  console.log(i)//type your code here
}

//example
const arr2=['rjjiure','jkwehrwh','uwriuureib','ikwebiue',20,40,50];
for (let i=0;i<arr2.length;i++){
  if(typeof arr2[i]==='number'){
    console.log(arr2[i]);
  }
}
20// debugger eval code:3:13
40 //debugger eval code:3:13
50


//Javascript Functions
function myFunc(){
  console.log('hello worlds, this is my function');
}
undefined
myFunc();//invoke or call the function
//hello worlds, this is my function
(function anotherFunc(){
  console.log('hello');
})();//imediately invoked function
hello
function myFunc1(par1,par2){
  console.log(par1);
  console.log(par2);  
}

myFunc1(20,'some string');
20 //debugger eval code:2:12
//some string