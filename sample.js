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
const anotherFunc= function(){
  console.log('another thing')
}
undefined
typeof anotherFunc
"function"
anotherFunc();
//another thing debugger eval code:2:11
undefined 

// arrow function functionalities
const arrowFunc = () =>{
  console.log('I am an arrow function');
}
undefined
arrowFunc()
//I am an arrow function debugger eval code:2:11
undefined
const MyFunc = () =>{
  console.log('something');
}
undefined
MyFunc()
//something debugger eval code:2:11
undefined
const result =MyFunc();
//something debugger eval code:2:11
undefined
result
undefined
const returnFunc = () =>{
  const a =20;
}
undefined
const returnFunc1 = () =>{
  const a =20;
} 

//RETURN VALUES
myFunc();
20
const myNumber =20;
undefined
let myfunction =()=>{
  if(myNumber< 15){
   return 'return the function early'
    
  }
}
undefined
let myfunction1 =()=>{
  if(myNumber< 15){
   return 'return the function early'
    
  }
return 40;
}
undefined
myfunction1
function myfunction1()

myfunction1();
40 

function myFunction(){
  return 20;
}
undefined
myFunction();
20
const alias=myFunction;
undefined
alias();
20
const myObj ={
  prop1:50,
  prop2:myFunction
}
undefined
myObj.prop2()
20

//more functions 
//const myString ='zach';
undefined
myString.replace('h','k');
"zack"
const newName=myString.replace('h','k');
undefined
newName;
"zack"
myString.toUpperCase();
"ZACH"
let str = 'hello world';
undefined
//const result =str.toUpperCase().split(' ');
undefined
result
// reversing a string 
const str ='hello';
undefined
str.split('');
(5) ['h', 'e', 'l', 'l', 'o']
array= str.split("");
(5) ['h', 'e', 'l', 'l', 'o']
const reversed=array.reverse();
    
undefined
reversed
(5) ['o', 'l', 'l', 'e', 'h']
const final =reversed.join("")
undefined
final
'olleh'

// check if a number is even or odd
function even_or_odd(number){
  if(number%2 ===0){
      return 'Even';
  }else{
      return "Odd";
  }
}
undefined
even_or_odd(10);
'Even'
// check the number of vowels a e i o u in a string
function getCount(str){
  let vowelsCount =0;
  const arr=str.split("");

  for(let i=0;i<arr.length;i++){
      switch(arr[i]){
          case 'a':
              vowelsCount++;
              break;
          case 'e':
              vowelsCount++;
              break;
          case 'i':
              vowelsCount++;
              break;
          case 'o':
              vowelsCount++;
              break;
          case 'u':
              vowelsCount++;
              
              
  }
  
  return vowelsCount;
}
//this a function to turn a number paased into a function into a negative
function makeNegative(num){
  if(num<0){
    return num;
  } else{
    return num *-1;
  }
}
// finding the smallest number in an array
class SmallestIntergerFinder{
  findSmallestInt(arrayOfNumbers){

    let smallestNumber ;

     for(let i=0; i<arrayOfNumbers.length; i++){
      const individualNumber= arrayOfNumbers[i];
       if (i===0){
        smallestNumber= individualNumber;
       }
      if (individualNumber<smallestNumber){
        smallestNumber=individualNumber;

      }
     }
     return smallestNumber;
  }
}

var summation =function(num){

  let sum =0;
  for(let i=0; i<num ;i++){
     sum=sum+i;
  }
  return sum;
}
//find an average of grades

function getAverage(scoreArr){
  //average sum
  const count=scoreArr.length;

  let sum =0;

  for(let i=0;i<count; i++){
     sum= sum +scoreArr[i];
  }

  return Math.floor(sum/count);
}

//rock paper scissors game
const rockPaperScissors=(player1,player2)=>{
  if (player1 ==='rock'){
   if (player2 ==='rock'){
        return 'Draw';
}
 if (player2 ==='paper'){
    return 'Player 2 won!';
}
 if (player2 ==='scissors'){
    return 'Player 1 won !';
}
}
 if (player1 ==='paper'){
 if (player2 ==='rock'){
        return 'player 2 won !';
}
 if (player2 ==='paper'){
    return 'Draw!';
}
 if (player2 ==='scissors'){
    return 'Player 2 won !';
}
}
 if (player1 ==='scissors'){
 if (player2 ==='rock'){
        return 'player 2 won!';
}
 if (player2 ==='paper'){
    return 'Player 1 won!';
}
 if (player2 ==='scissors'){
    return 'Draw !'
}
}
};

//removing the first and the last characters of a string
const str = 'hello';

str.length
5
str.substr(1,str.length-2);
"ell"
function removeChar(str){

const lengthOfString =str.length;
return str.substr(1, lengthOfString-2);
};


removeChar('hello nelson')

"ello nelso"

//function to calculate the sum of all positive integers in array 
function positiveNum(arr){
  let sum=0;
    for(let i =0 ;i<arr.length; i++){
      if(arr[i]>0){
      sum=sum+arr[i];
      }
    }
  return sum;
  }
  //test case 
  positiveNum([-15,1,3,4,5,6,-10,0]);
  19
  //basic math operation
  function basicOp2(operation,value1,value2){
    let result;
   switch (operation){
     case '+':
       result = value1 +value2;
       break;
     case '-':
       result = value1 -value2;
       break;
     case '*':
       result = value1 *value2;
       break;
     case '/':
       result = value1 /value2;
       break;
       
   }
     return result;
   };

   //removing spaces in a string
   function noSpace1(str){
    const arr =str.split(" ");
    let newArray =[];
    for (let i=0; i<arr.length;i++){
        const trimmedString=arr[i].trim();
        newArray.push(trimmedString)
        
    }
    const finalStr=newArray.join('');
    return finalStr;
    }
    noSpace1(' nelson mandela ');
    #"nelsonmandela"
//dragon hero challenge
function hero2(bullets ,dragons){
  const result =bullets/dragons >=2 ?true :false;
 }

 //finding the sum in two arrays
 function arrayPlusArray(arr1, arr2){

  let sum =0;
    for(let i=0; i<arr1.length;i++){
     const arr1Value=arr1[i];
     const arr2Value=arr2[i];
  
     const addedValue =arr1Value +arr2Value;
     sum =sum +addedValue;
  }
  return sum;
  }
  //converting a year in it century equivalent
  function century(year){
    return Math.ceil(year/100);
   }
   //javascript methods
const arr=[1,2,3];
undefined
arr.pop();
3
arr
(2) [1, 2]
const strArray =['hello', 'world'];
undefined
strArray.join("");
'helloworld'
//call back functions
function myCallback(someNumber){
  return someNumber *2;
}
function mainFunction(randomNumber,shouldCall,callback){
   let result=randomNumber;//in this example result ===20
   //In this example,shouldCall is 'true', so we do reach the call back
       if(shouldCall){
           //in this example, 'call back' represents 'myCallback'from above
           result=callback(randomNumber);
       }
   //since 'result' was re-assinged by the callback function, returns 40
   return result;
}
mainFunction(20 ,true ,myCallback);//returns 40
40
mainFunction(20,true,function(num){
  return num*2;
})
40
mainFunction(20,true, (num)=>{
  return num *2;
})
40
mainFunction(20,true,num =>num*2)
40
//allows for reusability and synchronization
const arr=[1,2,3];
undefined
function mycustomCallback(item){
    return item*2;
}
undefined
const newArray =arr.map(mycustomCallback);
undefined
arr
(3) [1, 2, 3]
newArray
(3) [2, 4, 6]

const strArray =['hello', 'world'];
undefined
strArray.map(item=>item[0])
(2) ['h', 'w']
//javascript primitive

//javascript dates
Date.now();
1683959861998
const myDate = new Date();
undefined
myDate
Sat May 13 2023 09:38:16 GMT+0300 (East Africa Time)
myDate.toString()
'Sat May 13 2023 09:38:16 GMT+0300 (East Africa Time)'
myDate.toISOString();
'2023-05-13T06:38:16.728Z'
myDate.getDate();
13
myDate.getMonth();
4
myDate.getFullYear();
2023
//Regular expressions;
const emailValid= new RegExp('^,+@.+\..+$');
undefined
const userInput= 'inelso.com';
undefined
const inValid =emailValid.test(userInput);
undefined
inValid
false


const regex = new RegExp('fovorite');
undefined
const string ='my fovorite color is blue';
undefined
const strings ='my fovorite color is black';
undefined
regex.test(string);
true
regex.test(strings);
true
//regular expressions are case sensitive
/[a-z]+/.exec(string)
['my', index: 0, input: 'my fovorite color is blue', groups: undefined]
/[a-z]{5}/.exec(string)
['fovor', index: 3, input: 'my fovorite color is blue', groups: undefined]
/[a-z]/.test(string)
true
/[0-9]/.test(string)
false
/[A-Z]/.test(string)
false 

const str ='hello world ,2021 @ more of a string';
undefined
/^[a-z ]+,[0-9]+/.exec(str);
['hello world ,2021', index: 0, input: 'hello world ,2021 @ more of a string', groups: undefined]
/.+/.exec(str);
['hello world ,2021 @ more of a string', index: 0, input: 'hello world ,2021 @ more of a string', groups: undefined]

//Javascript string methods
//replaceAll()
const myString ='My Dog jumped on the bed . My dog is a bad Dog';
undefined
const newString =myString.replaceAll('Dog','Cat');
undefined
newString
'My Cat jumped on the bed . My dog is a bad Cat'
const correctStr =myString.replaceAll(/[Dd]{1}og/g, 'cat');
undefined
correctStr
'My cat jumped on the bed . My cat is a bad cat'
//toUppercase
const myString= 'some string';
undefined
myString.toUpperCase();
'SOME STRING'
myString.substring(5, 7);
'st'
const result =myString[0].toUpperCase() + myString.substring(1 ,myString.length);
undefined
result
'Some string'
//trim method
//removal of white space from data

//assuming we have the data below
const externalData1 =[
  {
  title: 'how to code   ',
  author :' zach'
  },
  {title: 'what is vim?',
   author:'  zach'
  },
  {title: 'how do loops work in Javascript?  ',
   author:'  zach'
  }
];
//we can remove the blank spaces using the trim method as below
for (let i=0;i<externalData1.length;i++){
  const currentTitle=externalData1[i].title;
  const currentAuthor=externalData1[i].author;
  externalData1[i].title= currentTitle.trim();
  externalData1[i].author=currentAuthor.trim();
}
//output
externalData1


{title: 'how to code', author: 'zach'}

{title: 'what is vim?', author: 'zach'}

{title: 'how do loops work in Javascript?', author: 'zach'}

//Javascript methods
const arr =[1,2,3,5,6];
undefined
arr.pop()
6
arr.pop();
5
arr
Array(3) [ 1, 2, 3 ]

arr.push(4,5,6)
6
arr
Array(6) [ 1, 2, 3, 4, 5, 6 ];

arr
Array(6) [ 1, 2, 3, 4, 5, 6 ]

const copyArr =arr.slice()
undefined
copyArr
Array(6) [ 1, 2, 3, 4, 5, 6 ]

const anotherCopy =arr.slice(3)
undefined
anotherCopy
Array(3) [ 4, 5, 6 ]

const arr = [ 1,2,'oops',4,5,6];
undefined
arr.splice(3,1,3.5);
Array [ 4 ]

arr
Array(6) [ 1, 2, "oops", 3.5, 5, 6 ]

arr.splice(2,1,3);
Array [ "oops" ]

arr
Array(6) [ 1, 2, 3, 3.5, 5, 6 ]

//call back functions

arr
Array(6) [ 1, 2, 3, 3.5, 5, 6 ]

arr
Array(6) [ 1, 2, 3, 3.5, 5, 6 ]

arr.indexOf(3)
2
arr[arr.indexOf(3.5)]
3.5 


//the findIndex 

const moreComplexArr1=[
  {
  firstName:'Bob',
  lastName:'Smith'
  },
   {
  firstName:'Alice',
  lastName:'Smith'
  },
    {
  firstName:'Jon',
  lastName:'Smith'
  },
  {
  firstName:'Jon',
  lastName:'Doe'
  }
 ]; 

 
 moreComplexArr1.findIndex((arrItem)=>{
  return arrItem.lastName !=='Smith';
})
3 
