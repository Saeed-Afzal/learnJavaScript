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
// var months = ['jan', 'feb', 'mar','apr','may','jun']
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
