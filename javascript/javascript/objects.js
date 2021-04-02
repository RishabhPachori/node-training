// let user = new Object(); /// object constructor syntax
// let user2 = {}; //// object literal syntax

// const user = {
//     name : "rishabh",
//     age : 22,
//     "full name" : "Rishabh Pachori" ///// multiword property name must be quoted
// }
// //console.log(user.name);
// console.log(delete user.age);
// console.log(user);

// user.name="Harshit";  // const allows to change te property value
// console.log(user);

// // // get full name property we have to use []
// // console.log(user["full name"]);

// let fruit = "apple";
// let bag = { [fruit + 'mobile'] : 5
// };

// console.log(bag.applemobile);

// function makeUser(name,age){
//     return {
//         name : name,
//         age : age
//     };
// }

// let user = makeUser("rishabh",22);
// console.log(user.name);

// let users = {
//     name : "rishabh",
//     age : 22
// }

// for (let user in users) {
//     //console.log(user);
//     console.log(users[user]);
// } 

//// Symbols are unique

// let id = Symbol("id");
// let users = {
//     name : "rishabh",
//     age : 22,
//     [id] : 1
// };

// for (let user in users) {
//     console.log(users);
// }
// console.log(users[id]);

// let a = {};
// let b = a;  ///// copy the reference

// console.log(a===b); //true
// console.log(a==b);  //true

// let a = {};
// let b = {};  //// two independent objects
// console.log(a===b);
// console.log(a==b);


// let user = { name : "rishabh"};

// let user1 = {name1 : "rishabh1"};
// let user2 = {name2 : "rishabh2"};


// Object.assign(user,user1,user2);

// console.log(user);

// let user = {
//     name : "rishabh",
//     age : 22,
//     sizes : {
//         height : 172,
//         weight : 60
//     }
// }
// console.log(user.sizes.weight);

// function User(name,age){
//     this.name = name;
//     this.age = age;
//     this.isAdmin = true;
// }

// let user = new User("rishabh",22);
//  console.log(user.name);  // rishabh
//  console.log(user.age);   /// 22
//  console.log(user.isAdmin);   //// true


// ******Is it possible to create functions A and B such as new A()==new B()?******///////

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// If it is, then provide an example of their code.

/// solution

// let object = {};
//  function A() { return object;}
//  function B() { return object;}

//  console.log(new A == new B);  ./// true



/// Calculator

// function Calculator() {
//     this.read = function(){
//         this.a = 2;//+prompt('a?',0);
//         this.b = 3;//+prompt('b?',0);
//     };
//     this.sum = function(){
//         return this.a + this.b;
//     }
//     this.multiply = function(){
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();
// console.log("sum is:" + calculator.sum());
// console.log("multiply is:" + calculator.multiply());



// function Accumulator(firstvalue) {
//     this.value = firstvalue;
//     this.read = function(){
//         this.value += 2; // +prompt('enter digit?',0);
//     }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);


// let user = {name : "rishabh"};
// console.log(user.toString()); //// [object Object]  returns a string "[object Object]".these methods must return a primitive, not an object.
// console.log(user.valueOf()== user);  /// true  returns the object itself.

// let obj ={
//     toString(){
//         return "2";
//     }
// }
// console.log(obj * 2);  ///obj * 2 first converts the object to primitive (that’s a string "2") "2"*2=>> 2*2 =4

// let obj ={
//     toString(){
//         return "2";
//     }
// }
// console.log(obj + 2); //// 22 ("2" + 2), conversion to primitive returned a string => concatenation

