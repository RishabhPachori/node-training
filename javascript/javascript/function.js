
// function func1 () {
//     let user = "Hello User !";
//     console.log(user);
// }
// func1();
// //console.log(user);  // Not access local variables.



// let user = "Hello User";

// function func2() {
//     console.log(user);
// }

// console.log(user);  //  access global variables.
// func2();



// let userName = "rishabh";

// function func() {
//     let userName = "rishabh1";
//     console.log("Hello" + userName);
// }
// func();
// console.log("Hello" + userName);


// function sum (a,b) {
//     return a + b;
// }
// console.log(sum(2,3));

///// ***** Prime No *****//////

// function showPrime (n) {
//     for (let i = 2; i <= n ; i++) {
//         if(!isPrime(i)){
//             continue;
//         }
//         console.log(i);
//     }
// }

// function isPrime (n) {
//     for(let i =2 ; i < n; i++){
//         if(n % i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// showPrime(25);



// let sum = function (a,b) {
//     return a + b;
// }

// console.log(sum(2,3));

// showMessage("Hello Rishabh");

// function showMessage (message) {
//     console.log(`Message is ${message}`);
// }

// showMessage("Hello Rishabh");    ////// shows Error 
// var showMessage = function (message) {
//     console.log(`Message is ${message}`);
// }

// Function Declaration is only visible inside the code block in which it resides.
// 'use strict';
// let age =18
// if (age < 18) {
//     function welcome (){
//         console.log("Hello1");
//     }
    
// }else {
//     function welcome(){
//         console.log("Hello2");
//     }
// }

// welcome(); /// Error welcome is not defined


// so how we can define it

// 'use strict';
// let age =18;
// let welcome;
// if (age < 18) {
//     welcome=function(){
//         console.log("Hello1");
//     }
    
// }else {
//     welcome=function welcome(){
//         console.log("Hello2");
//     }
// }

// welcome(); /// ok

// we can use ternary operator also

// let age=18;

// let welcome = (age < 18) ?
//     function() { console.log("Hello"); } :
//     function() { console.log("Hello2"); };
// welcome();

// By using arrow function

// let age = 18;
//  let welcome = (age < 18) ?
//     () => console.log("Hello") :
//     () => console.log("Hello1");
// welcome();


// let sum = (a,b) => {
//     return a + b;
// }

// console.log(sum(2,3));

//example arrow function 

// let ask = (question,yes,no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask("Do You agree?",
//     () => {console.log("You agreed") ;},
//     () => {console.log("You canceled");}
// );


/// Arrow have no this & can't be called with new

// let user = {
//     name :"rishabh",
//     let sayHi = () => { console.log(this.name); } ////Error
// }

// user.sayHi();

/// How we can remove this 

// let user = {
//     name :"rishabh",
//     sayHi (){
//         let arrow = () => { console.log(this.name); }
//         arrow();
//     }
        
// }

// user.sayHi();

/// arrow functions have no arguments 


//  function func(x){
//      console.log(arguments);
//  }
//  func(5);

// let func = (x) => {console.log(arguments);}
// func(1);




