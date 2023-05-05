// Learn01
// function temp(){

// }

// Learn02
// function temp(){
//     alert();
// }

// Learn03
// function temp(){
//     alert(1 + 2);
// }

// Learn04
// function temp(){
//     alert(1 + 2);
// }

// temp();

// Learn05
// function temp(){
//     return 1 + 2;
// }

// Learn06
// function temp(){
//    return 1 + 2;
// }

// var result = temp();

// Learn07
// function temp(){
//     return 1 + 2;
//  }

//  var result = temp();

//  alert(result);

// Learn08
// function temp(a){
//     alert(a);
//  }

// temp(2);

// Learn09
// function temp(a, b){
//     alert(a + b);
//  }

// temp(2, 3);

// Learn10
// ===========>   QUESTION1
// function temp(a){
//     // ===========>   We want display numbers like 9,000,000
//     alert(a);
//  }

// temp(9000000);

// Learn11
// function temp(a){
//     alert(a.toLocaleString());
//  }

// temp(9000000);

//          STRING METHODS
// Learn12
// ===========>   QUESTION2
// function temp(str){
//     // ===========>   Display the length of str paramater
//     alert(str);
// }

// temp("This text is sample !!!");

// Learn13
// function temp(str){
//     str = str.length;
//     alert(str);
// }

// temp("This text is sample !!!");

// Learn14
// ===========>   QUESTION3
// function temp(str){
//      // ===========>   Display  `text` as result
//     alert(str);
// }

// temp("This text is sample !!!");

// Learn15
// function temp(str){
//     str = str.slice(5, 9);
//     alert(str);
// }

// temp("This text is sample !!!");

// Learn16
// ===========>   QUESTION4
// function temp(str){
//      // ===========>   Display  `Banana, Kiwi` as result
//     alert(str);
// }

// temp("Apple, Banana, Kiwi");

// Learn17
// The difference is that the second parameter specifies the length of the extracted part.
// function temp(str){
//     str = str.substr(7);
//     alert(str);
// }

// temp("Apple, Banana, Kiwi");

// Learn18
// ===========>   QUESTION5
// function temp(str){
//      // ===========>   Display  `Kiwi` as result
//     alert(str);
// }

// temp("Apple, Banana, Kiwi");

// Learn19
// function temp(str){
//     str = str.substr(-4);
//     alert(str);
// }

// temp("Apple, Banana, Kiwi");

// Learn20
// ===========>   QUESTION6
// function temp(str){
//      // ===========>   Display `Please visit Apple!` as result
//     alert(str);
// }

// temp("Please visit Microsoft!");

// Learn21
// function temp(str){
//     str = str.replace("Microsoft", "Apple");
//     alert(str);
// }

// temp("Please visit Microsoft!");

// Learn22
// function temp(str){
//     str = str.toUpperCase(");
//     alert(str);
// }

// temp("Please visit Microsoft!");

// Learn23
// function temp(str){
//     str = str.toLowerCase();
//     alert(str);
// }

// temp("Please visit Microsoft!");

// Learn24
// function temp(){
//     let text1 = "Hello";
//     let text2 = "World";
//     let text3 = text1.concat(" ", text2);
//     alert(text3);
// }

// temp();

// Learn25
// function temp() {
//   let text1 = "      Hello World!      ";
//   let text2 = text1.trim();
//   alert(text2);
// }

// temp();

// Learn26
// ===========>   QUESTION7
// ===========>   Where the best place to use trim?

// Learn27
// function temp() {
//   let text1 = "     Hello World!     ";
//   let text2 = text1.trimStart();
//   alert(text2);
// }

// temp();

// Learn28
// function temp() {
//   let text1 = "     Hello World!     ";
//   let text2 = text1.trimEnd();
//   alert(text2);
// }

// temp();

// Learn29
// function temp() {
//   let text = "HELLO WORLD";
//   let char = text.charAt(0);
//   alert(char);
// }

// temp();

// Learn30
function temp() {
  let text = "HELLO WORLD";
  text[0] = "A";
  alert(text);
}

temp();
