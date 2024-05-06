/*
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
var a = 'Pakistan';
var lowercasestring = 'apple';
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Tests for equality and inequality with strings
console.log(a == 'Pakistan');
console.log(a != "PAKISTAN");
//• Tests using the lower case function
console.log('Lower Case', lowercasestring == lowercasestring.toLowerCase());
//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
console.log('\n Ten not equal to 10');
console.log(ten != 10);
console.log('\n Ten equal to 10');
console.log(ten == 10);
console.log('\n Ten greater than 10');
console.log(ten > 10);
console.log('\n Ten less than 10');
console.log(ten < 10);
console.log('\n Ten greater than equal to 10');
console.log(ten >= 10);
console.log('\n Ten less than equal to 10');
console.log(ten <= 10);
//Tests using "and" and "or" operators
console.log('\n Is ten equal to ten and twenty equal to twenty?');
console.log(ten == 10 && twenty == 20);
console.log('\n Is ten equal to ten or twenty not equal to twenty?');
console.log(ten == 10 || twenty != 20);
//Test whether an item is in a array
console.log('\nIs apple is in the fruit list?');
console.log(fruits.includes('apple'));
//• Test whether an item is not in a array
console.log('\nIs apple is not included in the fruit list?');
console.log(!fruits.includes('apple'));
