//////************************Callback******************************** */

// function add(a,b,callback){
//     document.write(`sum is ${a+b}<br>`);
//     callback();
// }

// add(5,6,function(){
//     document.write("print");
// });


// function examPreparation(subject,callback){
//     console.log(`stert my ${subject} preparation`);
//     callback();
// }

// examPreparation('maths',function(){
//     console.log(`exam preparation finished`);
// });

// function total(marks,callback){
//     let reduce = (accumulator,currentValue) => accumulator + currentValue;
//     let result = marks.reduce(reduce,0);
//     console.log(result);
//     callback();
// }
// let marks =[1,2,3,4,5,6];
// total(marks,function(){
//     console.log("sum is calculated");
// });


//// Handling of error in callbacks

// function calculateSquare(num,callback){
//     setTimeout(()=>{
//         const result = num * num;
//         callback(result); 
//     },1000);
// }
// let callback = (result) =>{
//     console.log(`square of number is ${result}`);
// };

// calculateSquare(7,callback);

///// " when this function gets a String instead of a Number type?"  Error comes

// function calculateSquare(num,callback){
//     setTimeout(() => {
//         if(typeof num !== "number"){
//             callback(new Error("Argument of type number is expected"));
//             return;
//         }
//         const result = num * num;
//         callback(null,result);
//     },1000);
// }
//  let callback = (error,result) => {
//      if(error !== null){
//          console.log(`Caught Error : ${error}`);
//          return;
//      }else{
//          console.log(`square of number is ${result}`);
//         }
//     };

    
//  calculateSquare("2",callback);


//nested callbacks

// let fs = require("fs");

// fs.mkdir("./abc",0777,makeDirectory);

// function makeDirectory(err){
//     if(err) throw err;
//     fs.writeFile("./abc/hello.txt","Hello World",writeFile);
// }

// function writeFile(err){
//     if (err) throw err;
//     console.log("File created with content");
//     fs.readFile("./abc/hello.txt",'UTF-8',readFile);
// }

// function readFile(err,data){
//     if (err) throw err;
//     console.log(data);
// }


/****************************************Promises***************************************************** */
// // create promises
// const promise = new Promise((resolve,reject) => {
//     const value = Math.random();
//     if (value <= 1/3.0){
//         resolve(value);
//     }else if(value <= 2/3.0){
//         reject("value <= 2/3.0 (reject)");
//     }else{
//         throw "value > 2/3.0 (throw)" 
//     }
// });

// /// consume promises 
// promise
//     .then(value => console.log("value" + value))
//     .catch(error => console.log("error" + error));

// second
// const promise = new Promise((resolve,reject) => {
//     let x = 2 + 3;
//     if (x == 6){
//         resolve("promise executed");
//     }else {
//         reject("promise rejected");
//     }
// });
// promise
//     .then(value => console.log(value))
//     .catch(value => console.log(value));


// let arr =[1,2,3,4,5,6,7,8];
// let promise = new Promise((resolve,reject)=>{
//     let newArray = arr.map((x)=> {
//         if(x % 2 !== 0){
//             return x*2;
//         }else{
//             return x;
//         }
//     });
//     resolve(newArray);
// });

// promise
//     .then(value => console.log(value))
//     .catch(err => console.log(err));


/////******************************** Error handling with promises************///////////////////////////////////// 


// let authorized = false;

// function getUserById(id){
//     return new Promise((resolve,reject) => {
//         if(!authorized){
//             reject("unauthorized access");
//         }
//         resolve({
//             id : id,
//             name : "admin"

//         });
//     });
// }

// try {
//     getUserById(10)
//         .then(user => console.log(user.name))
//         .catch(err => console.log(`caught error ${err}`));
// }catch(err){
//     console.log(`caught by try/catch ${error}`);
// }

/////////////////////******************Promise chaining****************************/////////////////////////

// new Promise((resolve,reject) =>{
//     setTimeout(()=> resolve(1),1000);
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result)=>{
//     console.log(result);
//     return result * 2;
// });


///****************************** */ Promise.all***************************/////////////////////////////// 

// const f1 = require('./user.json');
// const f2 = require('./product.json');

// Promise.all([f1,f2])
//     .then(res => {
//         console.log("Array of results", res)
//     })
//     .catch(err => {
//         console.log(err)
//     });

///// *******************************Promise.race***************************************//////////////////////////////

// const first = new Promise((resolve,reject) =>{
//     setTimeout(resolve,500,"first")
// })

// const second = new Promise((resolve,reject) =>{
//     setTimeout(resolve,1000,"second")
// })
// Promise.race([first,second]).then(result => console.log(result));

//// .call method
// function getOddNumbers() {
//     const result = Array.prototype.slice.call(arguments);
//     return result.filter(num => num % 2);
// }
//  let oddNumbers=getOddNumbers(10, 1, 3, 4, 8, 9);
//  console.log(oddNumbers);


//////** */.apply method
// const person = {
//     firstName : "rishabh",
//     lastName : "pachori"
// }
// function greet(greeting,message){
//     return `${greeting} ${this.firstName}. ${message}`; 
// }
// let result = greet.apply(person,["Hello","How are You!"]);
// console.log(result);

////// ..... bind method

/////// Closure ***********/////////////////////

// var pet = function(name){
//     var getName = function(){
//         console.log(name);
//     }
//     return getName;
// }
// mypet = pet("dog");
// mypet();

/************************************Async & Await ************************************/

const p1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> resolve("Hello Rishabh"),10000);
    });
}
const p2 = async() =>{
    const message = await p1()
    return message + "\n Hello Rishabh Pachori"; 
}
const p3 = async() =>{
    const message = await p2()
    return message + "\n Hello Hello Rishabh Pachori"
}
p3().then(res =>{
    console.log(res);
});

 