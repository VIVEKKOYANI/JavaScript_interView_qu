(function(){
    var a = b = 3;
})();

console.log("a", (typeof a !== 'undefined')); // false
console.log("b", (typeof b !== 'undefined')); // true

// a is not accessible outside the function because it was declared with var inside the function, hence it is undefined when checked globally.
// b is accessible outside the function because it was not declared with var, let, or const inside the function, making it a global variable.