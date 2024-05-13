/*
32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/
var curr_user = ['zeeshan', 'mutahir', 'ali mehdi', 'AMMAR', 'raza abbas'];
var new_user = ['talib', 'ramsha', 'ali mehdi', 'AMMAR'];
new_user.forEach(function (chkuser) {
    var our_condition = curr_user.some(function (curr_one_user) { return curr_one_user.toLowerCase() === chkuser.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(chkuser, " already taken!"));
    }
    else
        console.log("User name ".concat(chkuser, " is available!"));
});
