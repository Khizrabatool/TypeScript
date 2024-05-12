//Exercise45 Q 30
//Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each use
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//creating array
let userNames = ["fahad", "Ali", "Zeeshan", "Admin", "Usman"];

userNames.forEach(oneUser => {
    if (oneUser==='Admin') {
        console.log(`Hello ${oneUser} would you like to see a status report?`);
        
    } else console.log(`Hello ${oneUser}, thank you for logging in again`);
    
})
// //using ForEach loop on Array
// userNames.forEach(oneUser =>{
//     if(oneUser === "Admin"){
// console.log(`Hello ${oneUser}, would you like to see a status report?`)
//     }
//     //Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//     else{
//         console.log(`Hello ${oneUser}, thank you for logging in again `)
//     }
// })