// Learn 01
// time : 20m + 10m | 30m
// تابع اعتبارسنجی کدملی

// function validateNationalCode(data) {
//     let result = false;

//     data = data.trim();
//     var wrongFormats = ['0000000000', '1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777', '8888888888', '9999999999'];

//     if (data.match('[0-9]{10}') && !wrongFormats.includes(data)) {

//         let sum = 0;
//         for (var i = 10; i > 1; i--) {
//             sum = sum + (Number(data[i - 1]) * i);
//         }

//         let sub = sum % 11;
//         let final = sub >= 2 ? final = 11 - sub : sub;

//         if (final == Number(data[0])) {
//             result = true;
//         }
//     }

//     return result;
// }


// var result = validateNationalCode('1111111111');
// document.write(result);





// Learn 03
// الگوریتم های تصاویر 
// A01 - A10
// را انجام دهید



// A01
// time : 5m + 5m | 40m

// function print(){
//     let result = (2 * 5) + 6 / (8 - 7);
//     document.write(result);
// }

// print();   





// A02
// time : 5m + 5m | 50m

// function print(data){
//     document.write(data);
// }

// print(12);   






// A03
// time : 5m + 5m | 60m

// function print(dataOne, dataTwo){
//     document.write(dataOne + dataTwo);
// }

// print(12, 3);   





// A04
// time : 5m + 10m | 75m

// function print(dataOne){
//     let result = 0;

//     result = (dataOne * dataOne * dataOne) / ( (dataOne * dataOne) + dataOne + 1 );

//     document.write(result);
// }

// print(3);   






// A05
// time : 5m + 10m | 90m

// function print(dataOne, dataTwo, dataThree){
//     let result = 0;

//     result = (dataOne + dataTwo + dataThree) / 3;

//     document.write(result);
// }

// print(3, 7, 2);  







// A06
// time : 5m + 10m | 105m

// function print(low, height){
//     let result = 0;

//     result = low * height

//     document.write(result);
// }

// print(3, 7); 






// A07
// time : 5m + 15m | 125m

// function print(radius, height){
//     const pi = 22.7;

//     let volum = height * (radius * radius) * pi;

//     document.write("volum is : " + volum);

    
//     let volumTotal = 2 * pi * radius * height + 2 * (pi * (radius * radius));

//     document.write("total volum is : " + volumTotal);
// }

// print(3, 7); 




// A08
// time : 5m + 15m | 145m

// function print(radius){
//     const pi = 22.7;

//     let area = 4 * pi * radius;

//     document.write("area is : " + area);

    
//     let volum = 4 / 3 * pi * (radius * radius);

//     document.write("volum is : " + volum);
// }

// print(3); 







// A09
// time : 5m + 15m | 165m

// function print(count, length){
//     const pi = 22.7;

//     let up = count * (length * length);
//     let down = 4 + Math.tan(pi / count);

//     let result = up / down;

//     document.write(result);
// }

// print(3, 20); 






// A10
// time : 5m + 10m | 180m

// function print(age){
//     const seconds = 31560000;

//     let result = age * seconds;

//     document.write(result);
// }

// print(35); 





