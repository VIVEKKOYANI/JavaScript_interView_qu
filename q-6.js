class Person {

}

console.log("class", typeof Person); // Function

// Explanation
//! Class Declaration:

// class Person {} declares a class named Person. In JavaScript, classes are a special type of function, and they are essentially syntactic sugar over the existing prototype-based inheritance.
// !typeof Operator:

// The typeof operator returns a string indicating the type of the unevaluated operand.
// When applied to a class, the typeof operator returns "function" because, under the hood, classes in JavaScript are actually special functions.