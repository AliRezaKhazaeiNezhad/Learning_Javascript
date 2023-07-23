// توابع آرایه

// آموزش هایی که دارای ستاره در ابتدای آن هستند (نمادزیر)
//  حتما در کلاس توسط دانشجو پیاده سازی شود
// ***********




// Learn 01
// time : 5m + 5m | 10m
// The at() method returns an indexed element from an array.


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = 2;
// let fruit = fruits.at(index);

// console.log(fruit);










// Learn 02
// time : 5m + 5m | 20m
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const children = arr1.concat(arr2, arr3);


// console.log(children);










// Learn 03
// time : 5m + 5m | 30m
// Copy the first two array elements to the third and fourth position
// array.copyWithin(target, start, end)


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2); 

// console.log(fruits);








// Learn 04
// time : 5m + 5m | 40m
// entries()
// Create an Array Iterator, and then iterate over the key/value pairs


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//     console.log(x);
// }











// Learn 05
// time : 5m + 5m | 50m
// every()
// Checks if every element in an array pass a test


// const ages = [32, 33, 16, 40];
// console.log(ages.every(checkAge));

// function checkAge(age) {
//   return age > 18;
// }









// Learn 06
// time : 5m + 5m | 60m
// fill()
// Fill the elements in an array with a static value


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.fill("Kiwi"); 

// console.log(result);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.fill("Kiwi", 2, 4); 

// console.log(result);









// ***********
// Learn 07
// time : 5m + 5m | 70m
// filter()
// Creates a new array with every element in an array that pass a test


// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }


// console.log(result);







// ***********
// Learn 08
// time : 5m + 5m | 80m
// find()
// Returns the value of the first element in an array that pass a test
// array.find(function(currentValue, index, arr),thisValue)


// const fruits = ["apple", "orange", "banana", "limon"];

// function checkData(fruit, i, arr) {
//   console.log(i + " " + fruit);
// }

// fruits.find(checkData);











// Learn 09
// time : 5m + 5m | 90m
// flat()
// Create a new array with the sub-array elements concatenated
// array.flat(depth)



// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];

// const newArr = myArr.flat(2);
// console.log(newArr);








// ***********
// Learn 10
// time : 5m + 5m | 100m
// from()
// Creates an array from an object
// Array.from(object, mapFunction, thisValue)



// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log(myArr);






// ***********
// Learn 11
// time : 5m + 5m | 110m
// includes()
// Check if an array contains the specified element
// array.includes(element, start)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.includes("Mango");
// console.log(result);








// ***********
// Learn 12
// time : 5m + 5m | 120m
// indexOf()
// Search the array for an element and returns its position


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);






// ***********
// Learn 13
// time : 5m + 5m | 130m
// isArray()
// Checks whether an object is an array


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits);
// console.log(result);







// ***********
// Learn 14
// time : 5m + 5m | 140m
// join()
// Joins all elements of an array into a string


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();

// console.log(text);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");

// console.log(text);








// ***********
// Learn 15
// time : 5m + 5m | 150m
// map()
// Creates a new array with the result of calling a function for each array element


// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }

// console.log(newArr);




// ***********
// Learn 16
// time : 5m + 5m | 160m
// pop()
// Removes the last element of an array, and returns that element


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();

// console.log(fruits);






// ***********
// Learn 17
// time : 5m + 5m | 170m
// push()
// Adds new elements to the end of an array, and returns the new length



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

// console.log(fruits);







// ***********
// Learn 18
// time : 5m + 5m | 180m
// reverse()
// Reverses the order of the elements in an array


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();

// console.log(fruits);





// ***********
// Learn 19
// time : 5m + 5m | 190m
// shift()
// Removes the first element of an array, and returns that element


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift(); 

// console.log(fruits);




// ***********
// Learn 20
// time : 5m + 5m | 200m
// sort()
// Sorts the elements of an array


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();

// console.log(fruits);





// Learn 22
// time : 5m + 5m | 220m
// toString()
// Converts an array to a string, and returns the result


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();

// console.log(text);







// Learn 23
// time : 5m + 5m | 230m
// unshift()
// Adds new elements to the beginning of an array, and returns the new length


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");

// console.log(fruits);









// Learn 24
// time : 5m + 5m | 240m
// unshift()
// Adds new elements to the beginning of an array, and returns the new length


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");

// console.log(fruits);







// Learn 25
// time : 5m + 5m | 250m
// valueOf()
// Returns the primitive value of an array


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.valueOf();

// console.log(myArray);