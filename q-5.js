const isNumberEqual = 108 == ['108'];

console.log("isNumberEqual",isNumberEqual); // true;

//! Equality Comparison with == (Loose Equality):
// The == operator in JavaScript performs loose equality comparison, which means it converts the operands to the same type before making the comparison.
// When comparing a number (108) with an array (['108']), JavaScript first converts the array to a primitive value.
//! Array to Primitive Conversion:
// The array ['108'] is converted to a string. This is done by calling the toString() method on the array, which returns the string '108'.
//! Type Coercion:
// After converting the array to the string '108', JavaScript then compares the number 108 with the string '108'.
// During this comparison, JavaScript converts the string '108' to a number 108.
//! Final Comparison:
// Now, both operands are numbers (108 == 108), which evaluates to true.