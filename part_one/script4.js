//Learn 01
// time : 5m + 0m | 05m
// A JavaScript function is a block of code designed to perform a particular task.

// function mySum(){

// }





//Learn 02
// time : 5m + 0m | 10m

// function mySum(){
//     document.write("Hello world");
// }






//Learn 03
// time : 5m + 0m | 15m
// A JavaScript function is executed when "something" invokes it (calls it).

// function mySum(){
//     document.write("Hello world");
// }

// mySum();






//Learn 04
// time : 5m + 5m | 25m
// A JavaScript function can get parameter

// function mySum(numberOne, numberTwo){
//     document.write(numberOne + numberTwo);
// }

// mySum(2, 5);








//Learn 05
// time : 5m + 5m | 25m
// A JavaScript function can return result

// function mySum(numberOne, numberTwo){
//     return numberOne + numberTwo;
// }

// var data = mySum(2, 5);

// document.write(data);








//Learn 06
// time : 05m + 10m | 40m
// تمرین کلاسی
// توابع پنج عملیات جبری را بنویسید





// function sum(numberOne, numberTwo){
//     return numberOne + numberTwo;
// }

// function multi(numberOne, numberTwo){
//     return numberOne * numberTwo;
// }

// function minus(numberOne, numberTwo){
//     return numberOne - numberTwo;
// }

// function sub(numberOne, numberTwo){
//     return numberOne % numberTwo;
// }

// function div(numberOne, numberTwo){
//     return numberOne / numberTwo;
// }








//Learn 07
// time : 05m + 10m | 55m
// تمرین کلاسی
// تابعی بنویسید که فضاهای خالی اول و اخر رشته زیر را حذف کند
// "     this is test text.        "
// در این تمرین میتوانید در اینترنت جستجو نمایید





// function removeWiteSpaces(data){
//     return data.trim();
// }

// var data = removeWiteSpaces("     this is test text.        ");
// document.write(data);









//Learn 08
// time : 05m + 05m | 65m
// تمرین کلاسی
// تابعی بنویسید که طول رشته زیر را مشخص کند
// "this is test text."
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function calcLength(data){
//     return data.length;
// }

// var data = calcLength("this is test text.");
// document.write(data);









//Learn 09
// time : 05m + 10m | 80m
// تمرین کلاسی
// تابعی بنویسید که کلمه خزاعی را از رشته خروجی بگیرد
// "Ali Reza Khazaei Nezhad"
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function sliceData(data){
//     return data.slice(9,16);
// }


// var data = sliceData("Ali Reza Khazaei Nezhad");
// document.write(data);





//Learn 10
// time : 05m + 05m | 90m
// تمرین کلاسی
// تابعی بنویسید که کلمه خزاعی را از رشته خروجی بگیرد
// "Ali Reza Khazaei Nezhad"
// در این تمرین میتوانید در اینترنت جستجو نمایید


// function sliceData(data){
//     return data.slice(-15, -7);
// }


// var data = sliceData("Ali Reza Khazaei Nezhad");
// document.write(data);






//Learn 11
// time : 05m + 05m | 100m
// تمرین کلاسی
// تابعی بنویسید که زیر رشته خزاعی را خروجی بدهد
// "Ali Reza Khazaei Nezhad"
// در این تمرین میتوانید در اینترنت جستجو نمایید


// function sliceData(data){
//     return data.substr(9, 7);
// }


// var data = sliceData("Ali Reza Khazaei Nezhad");
// document.write(data);






//Learn 12
// time : 05m + 15m | 115m
// تمرین کلاسی
// تابعی بنویسید که اگر طول رشته بیشتر از ده کاراکتر بود انرا بریده و سه نقطه نمایش دهد
// "Ali Reza Khazaei Nezhad"  ===> Ali Reza ...


// function detail(data){
//     if(data.length > 10){
//         return data.substr(0, 9) + "...";
//     }
// }

// document.write(detail("Ali Reza Khazaei Nezhad"));









//Learn 13
// time : 05m + 05m | 125m
// تمرین کلاسی
// تابعی بنویسید که رشته زیر را گرفته و خروجی بعدی را نمایش دهد
// "Lorem ipsum dolor,"
// "LOREM ipsum dolor,"
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function replaceData(data){
//     return data.replace("Lorem", "LOREM");
// }

// document.write(replaceData("Lorem ipsum dolor,"));







//Learn 13
// time : 05m + 05m | 135m
// تمرین کلاسی
// تابعی بنویسید که رشته زیر را گرفته و خروجی بعدی را نمایش دهد
// "Lorem ipsum dolor,"
// "LOREM ipsum $data,"
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function replaceData(data){
//     return data.replace("Lorem", "LOREM").replace("dolor", "$data");
// }

// document.write(replaceData("Lorem ipsum dolor,"));










//Learn 14
// time : 05m + 05m | 145m
// تمرین کلاسی
// تابعی بنویسید که رشته زیر را گرفته و خروجی بعدی را نمایش دهد
// "Lorem ipsum dolor,"
// "LOREM IPSUM DOLOR,"
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function upperData(data){
//     return data.toUpperCase();
// }

// document.write(upperData("Lorem ipsum dolor,"));










//Learn 15
// time : 05m + 05m | 155m
// تمرین کلاسی
// تابعی بنویسید که رشته زیر را گرفته و خروجی بعدی را نمایش دهد
// "LOREM IPSUM DOLOR,"
// "Lorem ipsum dolor,"
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function upperData(data){
//     return data.toLowerCase();
// }

// document.write(upperData("LOREM IPSUM DOLOR,"));







//Learn 16
// time : 05m + 05m | 165m
// تمرین کلاسی
// تابعی بنویسید که به قبل از رشته زیر مقدار سه تا صفر بیافزاید
// "5"
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function padStartData(data){
//     return data.padStart(4, "0");
// }

// document.write(padStartData("5"));









//Learn 17
// time : 05m + 05m | 175m
// تمرین کلاسی
// تابعی بنویسید که به انتهای از رشته زیر مقدار سه تا صفر بیافزاید
// "5"
// در این تمرین میتوانید در اینترنت جستجو نمایید



// function padEndData(data){
//     return data.padEnd(4, "0");
// }

// document.write(padEndData("5"));