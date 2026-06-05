// var a = 10; //Reinitialization & Redeclare
// let b = 20; //Reinitialize
// const c = 30; 

// const { cacheSignal } = require("react");

// console.log(a);
// console.log(b);
// console.log(c);

// var num = 10;
// var str = "sharmika";
// var undefined;
// var Null = null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolean);


// var bigInt = 123n;
// var symbol = Symbol(' li ');
// console.log(typeof bigInt)
// console.log(typeof symbol)

// var arr = [10,20,30,40]
// console.log( typeof arr , arr);
// var obj = {
// //     name:"sharmika",
// //     dept:[`AI&DS`,"ct"]
// // }
// // console.log(typeof obj,obj)

// //Arithmetic operator (+,-,*,%,/)
// var a = 1
// var b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a % b);
// console.log(a / b);

// //logical operator (&,||,!)
//                 &&       ||
// // true true    true    true
// // true false   false   true
// // false true   false   true
// // false false  false   false

// var a = true;
// var b = false;

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

//Relational operator(>,>=,<,<=,==,!=)

// a = 10; 
// b = "10";

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);

//Assingment operator (=,+=,-=,%=,*=./=,**=)
// a = 10;
// b = 20;

// a += b;
// console.log(a)
// a -= b;
// console.log(a)


//Unary operator(--,++)

// var a = 10;
// console.log(a++);
// console.log(++a);

// var a = 10;
// console.log(a--);
// console.log(--a);

// a = 1;
// b = 1;
// c = 0;

// var result = a++ + --b + ++c - ++a + ++b + c++ 
// + b++ + a;

// console.log(result)
//conditional statement
// var a = 10;
// var b = 20;
// //if condition
// if(true){
//     //Template literals
//     console.log('${a} + ${b} = ${a+b}')
// }

// if(true){
//     a = 10;
//     console.log(a);
// }
//var a; //Hoisting
// console.log(a);
// var a = 10;

// var a = 10; // global scope
// // let b = 20; // global scope
// let b = 20; //global scope
// if (true){
//     console.log(a);
//     //let b = 30; //B lock scope
//     console.log(b); // Blockscope
// }
// console.log(a);
// console.log(b);
// var a = 10;
// if( a%2==0){
//     console.log('${a} is Even');
// }
// else{
//     console.log('${a} is Odd');
// }
// var mark = 30;
// if( mark >= 90){
//     console.log("o grade");
// }
// else if(mark >= 70){
//     console.log("A grade");
// }
// else if(mark >= 35){
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }
// var a = 10;
// // condition ? true statement: false statement
// var result = a%2===0 ? "Even" : "Odd";
// console.log(result)
// mark = 30;
// var result = (mark>=90) ? "O Grade" :
//              (mark>=70) ? "A Grade" :
//              (mark>=35) ? "Pass" :
//              "Fail"
//              console.log(result);

// var day = 2;
// switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     Default:{
//         console.log("Invalid Input");
//     }
// }
// Looping statement

// 1 time 11 times 10 times
// for(var i=1;i<=10;i++){
//     console.log(i);
// // }
// var val = 10246;
// var count = 0;
// while(val >0){
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count);

// do{
//     console.log("do...while")
// }while(false);

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
//}

// function add(a,b){
//     console.log(10+20);
// }
// add();  //Hoistag

// function add(a=5 , b=6){
//     console.log(a+b);
// }
// add();  //Hoistag

//Arrow Function
// var demo = () => {
//     console.log(10 + 20);
// }
// demo( 10,20);
// demo();
// demo(10);

// //spread operator
// var arr = [10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
//     console.log(arr2);

//Destrucuring operator

// var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);

// var{name,mobile,dept,email,isActive} = {
//     name:"sharmika",
//     mobile:9876543210,
//     dept:["CT","AIDS"],
//     email:"sharmika@gmail.com",
//     isActive:true

// }
// console.log(name,mobile,dept,email,isActive)

// var arr = [10,20,30,40,50];
// //for...in
// for(let index in arr){
//     console.log(index)
// }
// //for...in
// for(let value of arr){
//     console.log(value)
// }

// var obj = {
//     name : "sharmika",
//     dept:["CT","AIDS"],
//     mobile:9876543210
// }
// for(let key in obj){
//     console.log(key,obj[key])

// }

// var arr = [1,2,3,4,5];
// var result = arr.map((val)=>(val*2));
// console.log(result)

// var even = arr.filter((val)=>val%2===0);
// console.log(even)

// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum)

var userName = {
    name:"sharmika"
    dept:["CT","AIDS"],
    skills:{
        programming: ["java","javascript","c"]
        Database:["SQL"]
    }
    }
}
var user = {
    ...userName,
    password:12345678
}
console.log(user);