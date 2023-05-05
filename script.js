//Learn 01
// alert();

//Learn 02
// alert(true);

//Learn 03
// alert(false);

//Learn 04
// alert('a');

//Learn 05
// alert(' ');

//Learn 06
// alert('@');

//Learn 07
// alert('A');
//========> I WANT    Ali Reza Khazaei Nezhad

//Learn 08
// alert("Ali Reza Khazaei Nezhad");

//Learn 09
// alert("Ali Reza " + "Khazaei Nezhad");

//Learn 10
// alert("Ali Reza" + "Khazaei Nezhad");

//Learn 11
// alert("Ali Reza" + ' ' + "Khazaei Nezhad");

//Learn 12
// alert(1);

//Learn 13
// alert(2 + 3);

//Learn 14
// alert(6 - 4);

//Learn 15
// alert(3 * 3);

//Learn 16
// alert(8 / 4);

//Learn 17
// alert(9 % 4);

//Learn 18
// alert(6 - 4 + 3 * 2);
//========> I WANT -8 ??

//Learn 19
// alert(6 - (4 + 3) * 2);
//========> I WANT -2 ??

//Learn 20
// alert((6 - (4 + 3)) * 2);
// *** It is toooooooooo hard to read

//Learn 21
//Values & Types
//The following built-in types are available:
//
// string
// number
// boolean
// null and undefined
// object
// symbol (new to ES6)

// var a;
// typeof a;    //undefined

// alert(typeof a);

// var a;
// a = "hello world";
// typeof a; // "string"

// alert(typeof a);

// var a;
// a = 42;
// typeof a; // "number"

// alert(typeof a);

// var a;
// a = true;
// typeof a; // "boolean"

// alert(typeof a);

// var a;
// a = null;
// typeof a; // "object" -- weird, bug

// alert(typeof a);

// var a;
// a = undefined;
// typeof a; // "undefined"

// alert(typeof a);

// var a;
// a = { b: "c" };
// typeof a; // "object"

// alert(typeof a);

//Learn 22
// Objects
// The object type refers to a compound value where you can set properties (named locations)
// that each hold their own values of any type. This is perhaps one of the most useful value
// types in all of JavaScript.

// var comment = {
//   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//   display: true,
//   points: 10,
// };

// alert(comment.description);
// alert(comment.display);
// alert(comment.points);

// Or call like this :

// alert(comment["description"]);
// alert(comment["display"]);
// alert(comment["points"]);

//Learn 23
// Question1     =================>  How can have multiple(list of) comments?

//Learn 24
//Count the number of items in array

// var cars = ["Saab", "Volvo", "BMW"];
// var items = ["Egg", true, "Mammad", 22, 192.85];
// var data = ["Car", false, "Rasoul", 1, 192.85, 20.50, 'c'];

// // cars.length

// alert(cars.length);
// alert(items.length);
// alert(data.length);

//Learn 25
//Accessing the Last Array Element
//introduction to index

// var cars = ["Saab", "Volvo", "BMW"];
// var items = ["Egg", true, "Mammad", 22, 192.85];
// var data = ["Car", false, "Rasoul", 1, 192.85, 20.50, 'c'];

// alert(cars[2]);
// alert(items[4]);
// alert(data.length[6]);

//Learn 26
//Accessing the Last Array Element
//BEST PRACTICE

// var cars = ["Saab", "Volvo", "BMW"];
// var items = ["Egg", true, "Mammad", 22, 192.85];
// var data = ["Car", false, "Rasoul", 1, 192.85, 20.50, 'c'];

// alert(cars[cars.length - 1]);
// alert(items[items.length - 1]);
// alert(data[data.length - 1]);

//Learn 27
//Looping Array Elements

// for (let i = 0; i < 5; i++) {
//   alert(i);
// }

//Learn 28

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var counter = fruits.length;

// for (let i = 0; i < fLen; i++) {
//   alert(fruits[i]);
// }

//Learn 29
//Adding array Elements

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("Lemon");

// var counter = fruits.length;

// for (var i = 0; i < fLen; i++) {
//   alert(fruits[i]);
// }

//Learn 30
//Defining array

// var points = new Array();
// var points = [];

//Learn 23
// Question1     =================>  How can have multiple(list of) comments?
// Answer1       =================>  :

//Creating object for comment
// var comment = {
//   description: "",
//   display: false,
//   points: 0,
// };

// //Creating comments
// var comment1 = {
//   description: "1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//   display: true,
//   points: 10,
// };

// var comment2 = {
//   description: "2 - Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//   display: true,
//   points: 2,
// };

// var comment3 = {
//   description: "3 - Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//   display: false,
//   points: 22,
// };


// //Creating array for comments
// var commenList = new Array();

// commenList.push(comment1);
// commenList.push(comment2);
// commenList.push(comment3);


// //Iterating comments

// for (var i = 0; i < commenList.length; i++) {
//   var result =
//     commenList[i].points +
//     " | " +
//     commenList[i].display +
//     " | " +
//     commenList[i].description;
//   alert(result);
// }
