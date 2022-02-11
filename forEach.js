// forEach method working system
/* 
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

function log(value) {
    console.log(value);
}

function logic(value, index, array) {
    console.log(value, index, array);
}

myForEach([1, 2, 3], log)

myForEach(['One', 'Two', 'Three', 'Four'], logic) 
*/


/* function forEch(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
} */

const numbers = [20, 30];
let sum = 0;

// function sumFunc(value) {
//     sum += value;
// }

/* forEch(numbers, function (value) {
    sum += value;
})
 */

numbers.forEach((value) => sum += value)
console.log(sum);