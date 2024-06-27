let name = 'vivek';
age = 21;

console.log("name", delete name);
console.log("age", delete age);

//! The delete operator in JavaScript is primarily used for deleting properties from objects, not for deleting variables declared with var, let, or const.
//! Deleting global variables declared without var, let, or const is possible, but it's generally not recommended because it can lead to unexpected behavior and is considered bad practice in most cases.