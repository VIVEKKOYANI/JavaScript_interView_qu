var obj = {};
// if(obj && obj.data && obj.data.person && obj.data.person.name){

// }

if(obj?.data?.person?.name){

} // Optional chaining

//! This code uses the optional chaining operator ?. to safely access obj.data.person.name.
//! If any part of the chain (obj, obj.data, or obj.data.person) is null or undefined, the expression short-circuits and returns undefined without throwing an error.
//! This is more concise and readable.