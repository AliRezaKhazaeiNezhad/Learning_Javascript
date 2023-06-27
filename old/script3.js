// Arrays

// Learn01
// const person = ["John", "Doe", 46];



// Learn02
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;

// alert(length);

// Learn03
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[0];

// alert(fruit);

// Learn04
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];

// alert(fruit);

// Learn05
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// for (let i = 0; i < fLen; i++) {
//   alert(fruits[i]);
// }

// Learn06
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.forEach((val , index) =>
// {
//     alert(index + ' || ' + val);
// });

// Learn07
// const fruits = ["Banana", "Orange", "Apple"];

// alert(fruits.length);

// fruits.push("Lemon");

// alert(fruits.length);


// Learn08
// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";

// alert(fruits.length);

// Learn09
// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// alert(person.length);
// alert(person[0]);

// Learn10
// const points = new Array(40, 100, 1);

// alert(points[1]);

// Learn11
// const fruits = ["Banana", "Orange", "Apple"];
// var result = Array.isArray(fruits);
// alert(result);

// Learn12
// =====================> Array methods
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// alert(fruits);

// Learn13
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// var x = fruits.toString();

// alert(x);

// Learn14
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// var x = fruits.join(" * ");

// alert(x);

// Learn15
// The pop() method removes the last element from an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();

// alert(fruits);

// Learn16
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();

// alert(fruit);

// Learn17
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// alert(fruits);

// Learn18
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.push("Kiwi");
// alert(length);

// Learn18
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// alert(fruit);

// Learn20
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.unshift("Lemon");
// alert(fruit);

// Learn21
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";
// alert(fruits);

// Learn22
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// alert(fruits[0]);

// Learn23
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// alert(myChildren);

// Learn24
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);

// alert(myChildren);

// Learn25
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// alert(fruits);

// Learn26
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");

// alert(fruits);

// Learn27
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);

// alert(fruits);

// Learn28
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// alert(citrus);

// Learn29
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// alert(citrus);

// Learn30
// =====================> Sorting
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// alert(fruits);

// Learn31
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// alert(fruits);

// Learn32
// ==============>   Important
// const points = [40, 100, 1, 5, 25, 10];

// function myArrayMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   alert(max);
// }

// myArrayMax(points);

// Learn33
//   ==============> Write code to calculate minmum value
// const points = [40, 100, 1, 5, 25, 10];

// Learn34
//   ==============> Minimum value
// const points = [40, 100, 1, 5, 25, 10];

// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//         min = arr[len];
//     }
//   }
//   alert(min);
// }

// myArrayMin(points);

// Learn35
// ==============>   ****** MOST IMPORTNAT ******
// Sorting Object Arrays
// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// cars.sort(function (a, b) {
//   return a.year - b.year;
// });

// cars.forEach((x) => {
//   alert(x.type.concat(" || ", x.year));
// });

// Learn36
// =================>  Question
// =================> Sort by name then by price
// Result :
// X01 100
// X03 100
// X00 100
// X03 100
// X05 110
// X04 110
// X06 110
// X07 110

// const myArr = [
//   { name: "X00", price: 100 },
//   { name: "X01", price: 100 },
//   { name: "X02", price: 100 },
//   { name: "X03", price: 100 },
//   { name: "X04", price: 110 },
//   { name: "X05", price: 110 },
//   { name: "X06", price: 110 },
//   { name: "X07", price: 110 },
// ];



// Learn37
// const myArr = [
//   { name: "X00", price: 100 },
//   { name: "X01", price: 100 },
//   { name: "X02", price: 100 },
//   { name: "X03", price: 100 },
//   { name: "X04", price: 110 },
//   { name: "X05", price: 110 },
//   { name: "X06", price: 110 },
//   { name: "X07", price: 110 },
//   { name: "X08", price: 120 },
//   { name: "X09", price: 120 },
//   { name: "X10", price: 120 },
//   { name: "X11", price: 120 },
//   { name: "X12", price: 130 },
//   { name: "X13", price: 130 },
//   { name: "X14", price: 130 },
//   { name: "X15", price: 130 },
//   { name: "X16", price: 140 },
//   { name: "X17", price: 140 },
//   { name: "X18", price: 140 },
//   { name: "X19", price: 140 },
// ];

// myArr.sort((p1, p2) => {
//   if (p1.price < p2.price) return -1;
//   if (p1.price > p2.price) return 1;
//   return 0;
// });

// let txt = "";
// function myFunction(value) {
//   txt += value.name + " " + value.price + " \r\n ";
// }

// myArr.forEach(myFunction);

// alert(txt);



