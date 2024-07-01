var a = {};
b = {key: 'b'};
c = {key: 'c'};

a[b] = 123;
a[c] = 456;

console.log("a", a); // { "[object Object]": 456 }

// both b and c are converted to the string "[object Object]". This means that the second assignment overwrites the first one. Therefore, the final object a will have only one property with the key "[object Object]" and the value 456.

