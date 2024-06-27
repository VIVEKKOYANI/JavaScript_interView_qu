for(var i =0; i < 10; i++){
    setTimeout(() => {console.log(i)}, 0);
}
// outPut
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// var is global scope 

// resolve this way

for(var i =0; i < 10; i++){
    (function(counter){
        setTimeout(() => {console.log(counter)}, 0);
    })(i)
}

// outPut
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9