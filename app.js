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
