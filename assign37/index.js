/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/
function make_shrit(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love Typescript"; }
    console.log("Size of this shirt is ".concat(size, " and ").concat(text));
}
make_shrit();
make_shrit("mediumn");
make_shrit("Small", "I love python");
