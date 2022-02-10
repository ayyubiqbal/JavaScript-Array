const arr = [];
arr[0] = 1;
arr[1] = 2;
arr.push(3)
arr.push(4)
arr[100] = 100;
arr.unshift(0)
arr[arr.length] = 101;
arr[arr.length] = 102;
arr[arr.length] = 103;
arr[arr.length] = 104;
// console.log(arr, arr.length);


// constructor pattern
const a1 = new Array() //[]
a1[0] = 10;
a1.push(11, 12, 13)
// console.log(a1, a1.length);

const a2 = new Array(5)
// a2.push(1, 2, 3, 4, 5)
// console.log(a2, a2.length);

const a3 = new Array(1, 2, 3, 4, 5, 6)
a3[a3.length] = 7
// console.log(a3, a3.length);

//factory pattern

const b1 = Array() //[]
b1[0] = 10;
b1.push(11, 12, 13)
// console.log(b1, b1.length);

const b2 = Array(5)
// a2.push(1, 2, 3, 4, 5)
// console.log(a2, a2.length);

const b3 = Array(1, 2, 3, 4, 5, 6)
b3[b3.length] = 7
// console.log(b3, b3.length);


// console.log(a1.__proto__.constructor);
// console.log(b1.__proto__.constructor);


