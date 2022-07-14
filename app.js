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


//how to empty array
// const arr = [1,2,3]
// console.log("the array has elements :" + arr); // [1,2,3]
// arr.length = 0
// console.log("Now the array is empty :" + arr); // []
//how to empty array

// var and let
//In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
// var and let


//call array using loops---------------------------------------------
// const arr = [1,2,3,4,5]

//using for loop
// for(let i = 0; i< arr.length;i++){
//   console.log(arr[i]);
// }

//using while loop
// let i = 0;
// while(i < arr.length){
//   console.log(arr[i]);
//   i++;
// }

//using for of
// for(let ar of arr){
//   console.log(ar); // print elements
// }

//using for in 
// index deta hai lekin items b get kr sakte hain
// for(let index in arr){
//   // console.log(index); // index dega
//   console.log(arr[index]); // element dega
// }
//call array using loops----------------------------------------------


//array destructure
// let arr = [1,2,3,4]
// let [var1, , ,var4,] = arr;
// console.log(var1);
// console.log(var4);
//array destructure

//iterate object
// const person = {
//     name : 'Saeed',
//     age : 23,
//     "person hobbies" : ["reading", "designing", "researching"] // inverted comma se space create kr sakte hain
// }

// for(let key in person){
//     // console.log(key); // print keys
//     console.log(person[key]); // print keys

// }
//iterate object


//spread operators
// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]

// const newarr = [...arr1,...arr2] //1,2,3,4,5,6,7,8
// const newarr = [..."abc"] //a,b,c

// console.log(newarr);
//spread operators

//object destructure
// const obj = {
//     name: 'Saeed',
//     age: 23,
// }

// // let {name, age} = obj; //let name bnae ga mtlb js name ki property hai usi name se bnae ga
// let {name:myName, age:myAge} = obj;//myName ka let bnaega ab aur usme Saeed store krlega

// console.log(`My name is : ${myName}`);
// //object destructure


//object inside array
// const users = [
//     {userId: 1, userName: 'Aslam'},
//     {userId: 2, userName: 'Alam'},
//     {userId: 3, userName: 'Ali'},
// ];

// for(let user of users){
//     console.log(user.userId);// print all userId
//     console.log(user); // print all elements
// }
// //object inside array


//nested destructuring
// const arr = [
//     {user : 'Saeed', age: 23},
//     {user : 'Ali', age: 25},

// ]

// const [{user}, {age}] = arr;
// console.log(user); //Saeed
// console.log(age);  //25
//nested destructuring

//lexical scope
//agr variable func me define nhi to wo use func k bahir daikhe ga eg
// function myApp(){
// const var1 = 'myvar'
// function myFunc(){
//     console.log(var1); // is func me value ni thi phr isne upr check ki value ko mtlb apne lexical scope me check ki
// }
// myFunc();
// }
// myApp();
//lexical scope


//rest parameters
//agr hm is ka array bnana chahte hain to kese bne ga
// eg1
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`); //3
//     console.log(`b is ${b}`); //4
//     console.log(`c is ${c}`); //5,6,7,8 means array bn jaega
// }
// myFunc(3,4,5,6,7,8)
//eg2 : add parameters 
// function addnum(...a){
//     let total = 0;
//     //a k andr 1,2,3 store hogaya array ki trah
//     for(let num of a){
//         total = total + num;
//     }
//     console.log(total); //add krdega 1,2,3 ko
// }
// addnum(1,2,3) ;
//rest parameters

//callback function: dosra func kisi func me as an argument call hoojae
// function myFunc2(){
//     console.log('hello i m calling as an argument in myFunc');
// }
// function myFunc(a){
//     a();
// }
// myFunc(myFunc2)
//callback function


//for Each
// const num = [1,2,3]

// function myFunc(number,index){
//     console.log(`The index is ${index} and number is ${number}`);
// }
// num.forEach(myFunc);
//for Each


//map
// const arr = [1,2,3]

// arr.map((num) => {
//     console.log(num*num); //return krega squares
// })
//map

//filter
// const arr = [1,2,3,4,5,6,7]

//isodd func using filter method
// const isOdd = arr.filter((isodd) => {
//     return isodd % 2 ==0
// });
// console.log(isOdd); // 2,4,6


//isEven func using filter method
// const isEven = arr.filter((iseven) => {
//     return iseven % 2 !=0
// });
// console.log(isEven); // 1,3,5,7

//filter

//reduce
// const arr = [1, 2, 3, 4, 5, 6, 7]

//Reduce
//Initial Call: Accumulator       CurrentValue        Return
//First Call  : 1                 2                   3
//Second Call : 3                 3                   6
//Third Call  : 6                 4                   10

//return ki value accumulator me chale jaegi
// const sumAll = arr.reduce((accumulator, currentvalue) =>{
//     return accumulator + currentvalue
// });
// console.log(sumAll);
//addtoCart

// const cart = [{ product: 'product1', price: 10000 },
// { product: 'product2', price: 20000 }, 
// { product: 'product3', price: 30000 },
// ]

// const myCart = cart.reduce((accumulator, currentprice) => {
//    return accumulator + currentprice.price;
// },0); // initial accumulator ki value 0 hogi
// console.log(myCart);
//reduce


//sort array
//eg1
// const arr = [1,200,1200,400];

// arr.sort((a,b) => {
//     return a-b;
// })
// console.log(arr);
//eg2
// const names = ['Saeed', 'abc','Ahmed']
// names.sort();
// console.log(names);
//eg3
const products = [
    {productId: 1, price : 200},
    {productId: 2, price : 1200},
    {productId: 3, price : 400},
    {productId: 4, price : 300},
    {productId: 5, price : 500},

]
// array b change kr dega ye
// products.sort((a,b) => {
//    return a.price - b.price;
// })

// console.log(products);

// array change ni krega ye
// const lowToHigh = products.slice(0).sort((a,b) => {
//    return a.price - b.price;
// })

// console.log(products); // previous array
// console.log(lowToHigh); // new array

//sort array

//find array
// const users = [
//     {userId : 1, userName : 'Saeed'},
//     {userId : 2, userName : 'Ali'},
//     {userId : 3, userName : 'Ahmed'},

// ]
// const myUser = users.find((str) => {
//     return str.userId ===3;
// })
// console.log(myUser); 
//find array

//every array
// const arr = [2,4,6,8,10]
// //check even if true or false
// //tamam elements even hain k ni
// const isEven = arr.every((num)=> num%2==0)
// console.log(isEven);
//every array

//some array
//kia 1 b aesa hai jo even hai agr hai to true hojaega
// const arr = [1,3,5,7]
// //check even if true or false
// //tamam elements even hain k ni
// const isEven = arr.some((num)=> num%2==0)
// console.log(isEven);
//some array

//fill array
// const arr = [1,2,3,4,5,6]
// arr.fill(0,2,4)
// console.log(arr);
//fill array

//sets
// const num = new Set();
// num.add(3);
// console.log(num);
// if(num.has(1)){
//     console.log('1 is present');
// }
// else{
//     console.log('1 is not present');
// }

//sets
//methods
//methods: functions inside object
//this: wo method hai jo object me call horha hai yahan this = person
//eg1
// const person = {
//     name: 'Saeed',
//     age: 23,
//     about: function(){
//         console.log(`Person name is ${this.name} and age is ${this.age}`);
//     }
// }
// person.about();
//methods

//call apply bind
//1 object ka func dosre me call krna hoto use kr sakte hain

// const obj1 = {
//     name : 'obj1',
//     about : function(){
//         console.log(`this is ${this.name}`);
//     }
// }
// //obj2 k pas about ka func ni hia
// const obj2 = {
//     name : 'obj2',
// }

// obj1.about.call(obj2); // call se wo obj2 k lye wo fuction call krdega

//apply: same as call lekin array me b hm kr sakte hai
//bind: same lekin ye hmen 1 func return krega jo hm bd me b use kr sakte hain
//call apply bind


// merging two arrays
// const arr1 = ['Saeed ', 'Ali '];
// const arr2 = ['Afzal', 'Mughal'];

// const fullname = []

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         console.log(arr1[i] + arr2[j]);
//         i++
//     }
    
// }
// const arr1 = [1,2]
// const arr2 = [...arr1,3,4]

// console.log(arr2);
// merging two arrays

//location
console.log(window.location.href); //location mil jaegi
console.log(window.location.assign('www.google.com'));
console.log(window.location.replace('www.google.com')); //replace krdega
window.location.reload() // cache reload
window.location.reload(true) //server reload
history.forward() // agay jaane k lye
history.back() // back jaane k lye
history.go(-1) // 1 page back jaega (pagination k lye)
document.referrer() // is jaga kis website se aen hain


//location


//comment
