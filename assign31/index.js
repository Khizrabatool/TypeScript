/*
31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
//Exercise45 Q 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//creating Array
var userNames = ["Fahad", "Ali", "Zeeshan", "Admin", "Usman"];
//Remove all of the usernames from your array, and make sure the correct message is printed.
userNames = [];
// If the list is empty, print the message We need to find some users!
if (userNames.length === 0) {
    console.log("Your Array is empty, We need to find some users!");
}
else {
    //Using ForEach loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        //Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again "));
        }
    });
}
