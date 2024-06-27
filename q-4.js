let person = {name: "Noren Red"};
const members = [person];
person = null;

console.log("members", members); // [{name: "Noren Red"}]

//? Here's what's happening:

//! You create an object person with a name property: {name: "Noren Red"}.
//! You create an array members and add the person object to it: [person].
//! At this point, members contains a reference to the person object.
//! You set person to null, which only updates the person variable, not the object itself.
//! Since members still holds a reference to the original object, it remains unchanged.
//! In JavaScript, objects are reference types, which means that when you assign an object to a variable or add it to an array, you're actually storing a reference to the object, not a copy of the object itself. This is why updating the person variable doesn't affect the object stored in the members array.

//! If you want to remove the object from the members array, you would need to use a method like splice() or filter() to update the array itself.




