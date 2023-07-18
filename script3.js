//Learn 01
// تمرین کلاسی
// time : 10m + 10m | 20m
// حلقه ای بنویسید که تکت تکت حروف اسم و فامیلتان را در یک خط جدیدی چاپ کند

// var fullName = "Ali Reza Khazaei Nezhad";

// for(var i = 0; i < fullName.length; i++){
//     document.write(fullName[i]+ "<br>");
// }






//Learn 02
// تمرین کلاسی
// time : 10m + 10m | 40m
// حلقه ای بنویسید که تکت تکت حروف اسم و فامیلتان را در یک خط جدیدی چاپ کند
// اگر در نام و فامیلتان حروف صدا دار وجود دارد باید بصورت بولد و زیرخط دار و شبرنگیچاپ شود


// var fullName = "Ali Reza Khazaei Nezhad";

// for(var i = 0; i < fullName.length; i++){
//     var letter = fullName[i];

//     if(letter  == 'A' ||
//        letter  == 'a' ||
//        letter  == 'O' ||
//        letter  == 'o' ||
//        letter  == 'U' ||
//        letter  == 'u' ||
//        letter  == 'I' ||
//        letter  == 'i'){
//         document.write("<b><u><mark>" + letter + "</mark></b></u><br>");
//     }
//     else{
//         document.write(letter + "<br>");
//     }
// }





//Learn 03
// time : 5m + 5m | 50m

// تمرین قبلی را با تعداد کمتری خط کد بنویسید


// var fullName = "Ali Reza Khazaei Nezhad";
// fullName = fullName.toLowerCase();

// for(var i = 0; i < fullName.length; i++){
//     var letter = fullName[i];

//     if(letter  == 'a' ||
//        letter  == 'o' ||
//        letter  == 'e' ||
//        letter  == 'u' ||
//        letter  == 'i'){
//         document.write("<b><u><mark>" + letter + "</mark></b></u><br>");
//     }
//     else{
//         document.write(letter + "<br>");
//     }
// }





//Learn 04
// تمرین کلاسی
// time : 10m + 15m | 75m
// حرف اول و آخر نام و فامیل کاملتان را بصورت شبرنگی و حرف بزرگ بنویسید و مابقی حروف را کوچک

// var fullName = "aLI REZA KHAZAEI NEZHAD";

// var lowFullName = fullName.toLowerCase();
// var upFullName = fullName.toUpperCase();
// var result = "";

// for(var i = 0; i < fullName.length; i++){
//     if(i == 0 || i == fullName.length - 1){
//         result = result + "<mark>"  + upFullName[i] + "</mark>";
//     }
//     else{
//         result = result + lowFullName[i];
//     }
// }

// document.write(result);












//Learn 05
// Objects
// The object type refers to a compound value where you can set properties (named locations)
// that each hold their own values of any type. This is perhaps one of the most useful value
// types in all of JavaScript.

// var comment = {
//   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//   display: true,
//   points: 10,
// };

// console.log(comment);





//Learn 02
// var comment = {
//     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//     display: true,
//     points: 10,
//   };

// console.log(comment.description);
// console.log(comment.display);
// console.log(comment.points);




//Learn 03
// var product = {
//     title: "لیوان خوشگل",
//     price: 100000,
//     count: 10,
//     available: true
//   };

// console.log(product.title);
// console.log(product.price);
// console.log(product.count);
// console.log(product.available);




//Learn 04
// var products = [
//     {
//     title: "لیوان خوشگل",
//     price: 100000,
//     count: 10,
//     available: true
//   }
// ];

// console.log(products);





//Learn 05
// var products = [
//     {
//         title: "لیوان خوشگل",
//         price: 100000,
//         count: 10,
//         available: true
//     },
//     {
//         title: "فنجون",
//         price: 450000,
//         count: 2,
//         available: false
//     }
// ];

// console.log(products);





//Learn 06
// تمرین کلاسی
// چطور میتوانم محصول اولی را چاپ کنم؟
// var products = [
//     {
//         title: "لیوان خوشگل",
//         price: 100000,
//         count: 10,
//         available: true
//     },
//     {
//         title: "فنجون",
//         price: 450000,
//         count: 2,
//         available: false
//     }
// ];

// console.log(products[0]);





//Learn 07
// تمرین کلاسی
// چطور میتوانم محصول دومی را چاپ کنم؟
// var products = [
//     {
//         title: "لیوان خوشگل",
//         price: 100000,
//         count: 10,
//         available: true
//     },
//     {
//         title: "فنجون",
//         price: 450000,
//         count: 2,
//         available: false
//     }
// ];

// console.log(products[1]);






//Learn 08
// تمرین کلاسی
// چطور میتوانم خصوصیات درون محصول اول را چاپ کنم
// var products = [
//     {
//         title: "لیوان خوشگل",
//         price: 100000,
//         count: 10,
//         available: true
//     },
//     {
//         title: "فنجون",
//         price: 450000,
//         count: 2,
//         available: false
//     }
// ];

// console.log(products[0].title);
// console.log(products[0].price);
// console.log(products[0].count);
// console.log(products[0].available);





//Learn 09
// تمرین کلاسی
// چطور میتوانم خصوصیات درون محصول دوم را چاپ کنم
// var products = [
//     {
//         title: "لیوان خوشگل",
//         price: 100000,
//         count: 10,
//         available: true
//     },
//     {
//         title: "فنجون",
//         price: 450000,
//         count: 2,
//         available: false
//     }
// ];

// console.log(products[1].title);
// console.log(products[1].price);
// console.log(products[1].count);
// console.log(products[1].available);



//Learn 10
// تمرین کلاسی
// چطور میتوانم فقط خصوصیات محصولاتی را چاپ کنم که وضعیت موجودی آنها صحیح است

// var products = [
//     {
//         title: "لیوان خوشگل",
//         price: 100000,
//         count: 10,
//         available: true
//     },
//     {
//         title: "فنجون",
//         price: 450000,
//         count: 2,
//         available: false
//     }
// ];


// for (var i = 0; i < products.length; i++) {
//     var result= products[i];

//     if (result.available) {
//         console.log(
//             result.title + " | " +
//             result.price + " | " +
//             result.count
//         );
//     }
// }
