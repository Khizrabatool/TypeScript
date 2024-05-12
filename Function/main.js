// function greet() {
//   return "hello world";
// }
// let message = greet();
// console.log(message);
// function sum() {
//   return 2 + 2;
// }
// let result = sum();
// console.log(result);
// function  sum(num1: number, num2: number) {
//     return num1 + num2
// }
// let result =sum(4,4);
// let result2 =sum(8,8);
// let result3 =sum(5,5);
// console.log(result)
// console.log(result2)
// console.log(result3)
//Arrow function
// let greet=(name: string) => `Hello ${name}`
// console.log(greet('Okasha'))
// Zeeshan Haider <hyder.zeeshan110@gmail.com>
// Thu, May 9, 7:33 PM (2 days ago)
// to Syed.zeeshanhaider, me
// // multiplication function
// function multiply(num1: number, num2: number) {
//   return num1 * num2;
// }
// let multiResult = multiply(2, 2);
// console.log(multiResult);
// // Division Function
// function divide(num1: number, num2: number) {
//   return num1 / num2;
// }
// let divideResult = divide(4, 2);
// console.log(divideResult);
// // subtraction function
// function subtraction(num1: number, num2: number) {
//   return num1 - num2;
// }
// let subtractionResult = divide(4, 2);
// console.log(subtractionResult);
// // default parameters function
// function userGreet(name: string = "user") {
//   console.log(`Hello ${name}`);
// }
// userGreet(`Okasha`);
// userGreet();
// function usrAge(age: number, name: string = "User") {
//   console.log(`Hello ${name} your age is ${age}`);
// }
// usrAge (20)
/* arrow function
==================
*/
// let greet = (name: string) => {
//     console.log(`hello ${name}`);
// }
// greet(`Okasha`);
// let greet = (name: string) => `hello ${name}`;
// let result = greet("Okasha")
// console.log(result);
// let num = 10
// let evenNum = (num: number) =>  num % 2 === 0 ? "Even":"Odd"
// console.log(evenNum(12));
/*Rest Parameter
================= */
// function singAllSong(singer: string, ...song: string[]) {
//    for (const thissong of song) {
//         console.log(`${thissong} was sung by ${singer}`);
//     }
// }
// //singAllSong("ABC")
// //singAllSong("ABC","def")
// singAllSong("ABC","DEF","IJK")
/*Return Type
============= */
//Type: (songs: string[]) => number
// function singSongs(song: string[]) {
//     for (const songs of song) {
//         console.log(`${songs}`);
//     }
//     return singSongs.length        
// }
//Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs, index) {
    return index < songs.length
        ? songs[index]
        : undefined;
}
/*Return Type Annotations
// */
// function singSongRecursive(songs: string[], count=0): number {
//     return songs.length ? singSongRecursive(songs.slice(1), count+1) : count;
// }
var singSongRecursive = function (song, count) {
    if (count === void 0) { count = 0; }
    return song.length ? singSongRecursive(song.slice(1), count + 1) : count;
};
// Homework
// functions / arrow functions / global variable / local variable / hoisting
