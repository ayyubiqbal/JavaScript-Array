const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// first element
numbers.shift()

//last element
numbers.pop()
numbers.length = numbers.length - 1;

// console.log(numbers.indexOf(2));

// numbers.splice(index no, amount of element for delete, add new element/s (optional))
// remove inside element with splice using index
numbers.splice(0, 3)
// 0 index the koita elements delete hobe.


const numbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// remove inside element with splice using value
const toBeDeleted = 5;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === toBeDeleted) {
        numbers2.splice(i, 1)
    }
}

// console.log(numbers2);


let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter array
const toBeDeleted1 = 7;
numbers3 = numbers3.filter((item) => item !== toBeDeleted1)
// console.log(numbers3);

// numbers3[2] = undefined
// delete numbers3[2]
// console.log(numbers3);

// reset whole array
let x = [1, 2, 3]
let y = x;
// let y = [1, 2, 3];
x = []
// console.log(x, y);

//Alternative
let xx = [1, 2, 3]
let yy = xx;
// xx = []
xx.length = 0;
// console.log(xx, yy);


// console.log(numbers3);
// reset array using while loop
while (numbers3.length) numbers3.pop()
console.log(numbers3);