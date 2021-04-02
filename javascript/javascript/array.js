///POP METHOD
// arr = [1,2,3,5,54,56,5];
// console.log(arr);
// arr.pop();
// console.log(arr);

/// PUSH METHOD
// arr = [1,2,3,5,54,56,5];
// arr.push(3);
// console.log(arr);

// // SHIFT METHOD
// arr = [1,2,3,5,54,56,5];
// arr.shift();
// console.log(arr);

// // UN SHIFT METHOD
// arr = [1,2,3,5,54,56,5];
// arr.unshift(11);
// console.log(arr);

////**** Shift and unshift method are comparatively slow than array push and pop method
/////// because both the methods apply on beginning of the array it shift the index and than update the whole array   */

/// For of loop  doesn’t give access to the number of the current element, 
/////just its value, but in most cases that’s enough. And it’s shorter.

// For in loop iterates over all properties, not only the numeric ones.
// for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower

// let numbers = [1,2,3,4,5,6,7,8];
//  for (let i =0; i < numbers.length; i++){
//      console.log(numbers[i]);
//  }
//  for (let number of numbers){
//      console.log(number);
//  }

//  for (let number in numbers){
//      console.log(numbers[number]);
//  }


// //ARRAY LENGTH
// let arr = [1,2,3,4];
// arr[12] = 55;

// console.log(arr.length);   ///13 length = greatest numeric index +1 

//IF WE DECREASE THE ARRAY LENGTH MANUALLY THE ARRAY IS TRUNCATED

// arr = [1,2,3,4,5];
// arr.length = 2; ///// truncate the array to 2 elements
// //console.log(arr);
// arr.length=5;
// console.log(arr[3]);
// console.log(arr);


// let newArray = new Array (1,2,3,4,5);
// console.log(newArray);

// let arr = new Array(2);  /// if we pass a single element 
// console.log(arr[0]);  //// undefined

// let matrix = [
//     [1,23,4,5],
//     [1,3,45,6],
//     [5,89,6,7]
// ]
// console.log(matrix[1][3]);

// console.log([] + 1);
// console.log([1] + 1);
// console.log([1,2] + 1);

// console.log([]==[]); ///false
// console.log([0]==[0]); /// false
// console.log(0==[]); /// true
// console.log("0"==[]); // false


/*******************************ARRAY METHODS******************************************** */

//// SPLICE METHOD modifies the array and  Returns the array of removed elements.

// let arr = ["I" , "Me","Myself"];
//  delete arr[1];
//  console.log(arr); /// [ 'I', <1 empty item>, 'Myself' ]

// let arr = ["I" , "Me","Myself"];
// // arr.splice(1,1,"LOVE");
// // console.log(arr);

// arr.splice(2,0,"rishabh","pachori");
// console.log(arr);

/****NEGATRIVE INDEX */
// let arr=[1,2];
// arr.splice(-1,0,3,4);
// console.log(arr);
// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4

///// Slice method   return the new array

// let arr = ["I" , "Me","Myself"];
// console.log(arr.slice(1,3));  /// [ 'Me', 'Myself' ]
// console.log(arr.slice(-2));  /// [ 'Me', 'Myself' ]

// ////CONCAT METHOD
// let arr = [1,2];
// console.log(arr.concat([3,4]));  //[ 1, 2, 3, 4 ]

//// forEach 

// ["I" , "Me","Myself"].forEach((item,index,array)=>{
//     console.log(`item is ${item} + index is ${index} + array is ${array}`);
// });

// let arr = ["I" ,"Myself", "Me","Myself"];
// console.log(arr.indexOf("Me")); 2
// console.log(arr.lastIndexOf("Myself")); /// 3

///// Find & findIndex

// let users =[
//     {id : 1, name : "rishabh"},
//     {id : 2, name : "harshit"}
// ];

// // let user = users .find(item => item.id ==2);
// // console.log(user);
// let user = users .findIndex(item => item.id ==2);
// console.log(user);

/************** FILTER********************** */
// let users =[
//     {id : 1, name : "rishabh"},
//     {id : 2, name : "harshit"}
// ];

// let user = users.filter(item => item.id < 2);
// console.log(user);

/*****************************MAP******************************** */

// let number = [1,2,3,4,5];
// let newArray = number.map((x) => {return x*2 ;});
// console.log(newArray);

// let arr =[1,2,3,4,5,6,7];
// let newArray = arr.map((x) => {
//     if(x % 2 !== 0){
//         return x*2;
//     }else {
//         return x;
//     }
// });

//  console.log(newArray);

// const numbers = [4, 9, 36, 49];

//     let oddSquareRoots = numbers.map((num) => {
//        if(num % 2 != 0) {
//            return Math.sqrt(num)     
//        }
//        return num;
//     });

//     console.log(oddSquareRoots);

// let arr= [1,2,3,4,5,6,7,8];
// for (let i= 0; i<=arr.length;i++){
//     if (i % 2 !== 0){
//         console.log(i*2);
//     }
// }
 
/*****************Sort*************************** */
// let arr = [2,43,54,56,6,66];
// arr.sort((a,b) => a -b);
// console.log(arr);

// let arr = [2,43,54,56,6,66];
// arr.sort((a,b) => b - a);
// console.log(arr);

/***************************Reverse********** */
// let arr = [2,43,54,56,6,66];
// arr.reverse();
// console.log(arr);

/**************************Reduce****************** */
// let arr = [1,2,3,4,5];
// let reduce = (accumulator,currentValue) => accumulator + currentValue;
// console.log(arr.reduce(reduce,0));



