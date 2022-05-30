// score = 10;
// if(score = 10){
//     console.log("good score");
// }
// console.log((score = 10) ? "Good Score" : "Bad Score");
//table of any number

// for(var num = 1 ; num<=10; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }
//Functions
//1st
// function sum(){
//     var a = 10, b = 20;
//     total = a + b;
//     console.log(total);
// }
// sum();
//2nd
// function sum(a,b){
//     return total = a+b;
// }
// var sum1 = sum(5,15);
// var sum2 = sum(15,15);
// console.log(sum1 > sum2);
//3rd Anonymous Function
// var sum = function(a,b){
//     return total = a+b;
// }
// console.log(sum(5,55));
//ES6
//Let vs Const
//LET
// function bioData(){
//     // let myName = "Saeed";
//     console.log(myName);
//     if(true){
//         let myName = "Muhammad Saeed"; 
//         console.log(myName);
//     }
//     console.log(myName);
// }
// bioData();
//CONST
// function bioData(){
//     // const myName = "Saeed";
//     console.log(myName);
//     if(true){
//         const myName = "Muhammad Saeed"; 
//         console.log(myName);
//     }
//     console.log(myName);
// }
// bioData();
//Template Literals
// for(var num= 1 ; num<=10; num++){
//     let tableOf = 8;
//     //     console.log(tableOf + " * " + num + " = " + tableOf * num); // this is replaced by down line
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }
// Default Parameter
// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(5));
//Arrow Function start
//1. Normal Function
// console.log(sum());
// function sum(){
//     let a=5,b=5;
//     let sum = a+b;
//     return `The sum of two numbes is ${sum}`
// }
//2. Arrow Function
// const sum = () =>  `The sum of two numbes is ${(a=5)+(b=5)}`
// //if only one line then no need to add return keyword and curly brackets
// console.log(sum());
//for in
// var arr = ['apple','banana','orange','mango']
// for(elements in arr){
//     console.log(elements); // return index
// }
//for of
// for(elements of arr){
//     console.log(elements); //return array
// }
//forEach
// arr.forEach(function(element,index,array){
//     console.log(index );
// })
//splice
// var months = ['Jan','Feb','Mar']
// // var newmonths = months.splice(2,0,'Apr')
// var newmonths = months.splice(months.length,0,'Apr') //
// console.log(months);
// var months = ['jan', 'feb', 'mar','apr','may','jun']
//update array value
//sol1
// var indexOfMonths = months.indexOf('mar')
// console.log(indexOfMonths); //index mil jaega array ka
// var updatemonths = months.splice(indexOfMonths,1,'MAR'); //us index se wo update hojaega eg: mar => MAR
// console.log(months);
//sol2
// var indexOfMonths = months.indexOf('mar')
// if(indexOfMonths != -1 ){
// var updatemonths = months.splice(indexOfMonths,1,'MAR'); //us index se wo update hojaega eg: mar => MAR
// console.log(months);
// }
// else{
//     console.log("No such data found");
// }
//maps in array
// var months = ['jan', 'feb', 'mar', 'apr','may','jun']
// var newArr = months.map((element,index,array)=>{
//     return `index: ${index} values: ${element}`
// })
// console.log(newArr);
// let arr = [25,36,81,64]
// // console.log(arr);
// let newarr = arr.map((element)=>{
//     return Math.sqrt(element)
// })
// console.log(newarr);
//multiply by 2 and get greater than 10
// let arr = [2,3,4,6,8]
// let newarr = arr.map((element)=>{
//     return element*2
// }).filter((element)=>{
//     return element >10
// })
// console.log(newarr);
//reduce in array
//takes 4 arguments accumulator, element, index,array
// let arr = [5,6,3]

// let newarr = arr.reduce((accumulator,element,index,array)=>{
//     return accumulator += element
// })
// console.log(newarr);


// const kvArray = [{ key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }];
// // const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
// console.log(reformattedArray);
//find maximum value 
// var arr = [42,13,34,8, -9, 3];
// function max(array, selector) {
//   var val = array[0];   
//   for (var i = 1; i < array.length; i++) {
//     if (selector == "Max") {
//       if (array[i] > val) {
//         val = array[i];
//       }
//     }
//   }
//   return val;
// }
// console.log(max(arr))
// Trim Strings
// var str = "      Hello        World";
// var trimStr = str.trim() // remove spaces
// console.log(str);
// console.log(trimStr);
//splits string
// var str = "a b c";
// console.log(str.split(' '));
//Date and Time

//DOM(Document Obejct Model) and BOM(Browser Object Model)
//put in any website
// alert(location.href)
// if(confirm("Want to visit Thapa Youtube Chanel")){
//     location.href = "https://www.youtube.com";
// }


//time intervals
//setTimeout(function,millisecond): execute a function after waiting
//setInterval(function,millisecond): same but repeat the execution of function
//visit index.html


//objects and this keyword
//this: current context ko get krta hai, agr object me chalen gay to us k andr ki properties ko get krega e.g

// const obj = {
//     myName: {
//         myFirstName: "Muhammad",
//         myMiddleName: "Saeed",
//     },
//     myAge: 23,
//     //this keyword arrow func me use nhi hoga
//     getDetail() {
//         console.log(`My name is ${this.myName.myFirstName} ${this.myName.myMiddleName} and my age is ${this.myAge}`);
//     }
// }

// obj.getDetail();
//objects and this keyword

//ES6

//array destructuring
// const arr = ['Saeed', "Afzal", 23];

// const [myName, myFName, myAge] = arr;
// console.log(myName); //print saeed
//array destructuring
//object destructuring
// const obj = {
//     myName: 'Saeed',
    
//     myAge: 23,
// }
// let {myName, myAge} = obj;

// console.log(myAge);

//object destructuring

//dynamic data in object
// let myName = 'saeed';
// const myBio = {
//     [myName] : "hello ", // square brackets se is key ka name change hojae ga
//     [20 + 6] : "is my age", // key ka name 20 + 6 = 26 hojaega
// }
// console.log(myBio);
//dynamic data in object

//same name and value objects
// var myName = 'saeed';
// var age = 23;
// const obj = {
//     myName,
//     age
// }
// console.log(obj);
// //same name and value objects

//spread operators
// const colors = ['red', 'green', 'blue']
// const morecolors = [...colors, 'yellow','pink']
// console.log(morecolors);
//spread operators

//array includes
// const colors = ['red', 'green', 'blue']
// const isPresent = colors.includes('red') // print true
// console.log(isPresent);
//array includes


//capture phase vs bubble phase
//capture phase : main div aur sub div agr subdiv pr click kren to phele maindiv chale phr sub div
//bubble phase : main div aur sub div agr subdiv pr click kren to phele subdiv chale phr maindiv
//bydefault bubble phase hota hai
// const maindiv = () =>{
//     alert("hello main")
// }
// const subdiv = () =>{
//     alert("hello sub"),
//     event.stopPropagation(); // jb srf subdiv chalana ho
// }

// maindiv.addEventListner('click', maindiv,true); // true se capture phase active hojaega
// maindiv.addEventListner('click', maindiv,true);

//capture phase vs bubble phase

//callback: 1 function dosre me as an argument use ho 
// higher order function: calculator js me sare func as argument use hon
// const add = (a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return a-b;
// }

// // console.log(add(5,4));
// //operator as as argument use horha hai 
// const calculator = (num1,num2,operator) => {
//     return operator(num1,num2);
// }

// console.log(calculator(5,5,add));
// console.log(calculator(6,5,sub));

//Closures : innerfun outerfun ka data store krleta hai
// const outerFun = (a) => {
//     const b = 6;
//     const innerFun = ()=>{
//         let sum = a+b;
//         console.log(`The sum of a and b is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

//Synchronous JS Prog : phela kaam hoga us k bd dosra kaam start hoga
// 1st work = 10 mint, 2nd work = 5sec
//jb tk 1st end nhi hoga 2nd start nhi hoga
//example
// const fun1 = () => {
//     console.log('Func1 is called');
// }

// const fun2 = () => {
//     console.log('Func2 is called');
//     fun1();
//     console.log('Func2 is called again');

// }
// fun2();

//Asynchoronous JS Prog : sare kaam 1 by 1 hote rahen gay
// 1st work = 10 mint, 2nd work = 5sec
//2nd wala kaam 5sec me hojaega aur 1st wala b chalta rahe ga
//example
// const fun1 = () => {
//     setTimeout(()=>{

//         console.log('Func1 is called');
//     }, 2000);
    
// }

// const fun2 = () => {
//     console.log('Func2 is called');
//     fun1();
//     console.log('Func2 is called again');

// }
// fun2();


//Function Currying
// function sum(num1){
//     // console.log(num1);
//     return function(num2){
//         return function(num3){
//             console.log(num1, num2 , num3);

//             console.log(num1 + num2 + num3);
            
//         }
//     }
// }

// sum(5)(3)(8)
//Function Currying

//Callback hell: 1 timeout k andr 1 aur phr 1 aur ....

// const msg = () => {
//     setTimeout(()=>{
//         console.log('1st work is done');
//         setTimeout(()=>{
//             console.log('2nd work is done');
//             setTimeout(()=>{
//                 console.log('3rd work is done');
//             },1000)
//         },1000)
//     },1000)
// }
// msg();
//Callback hell