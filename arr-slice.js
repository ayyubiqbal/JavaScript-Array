const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const sliced = arr.slice(1, 4) //2, 3, 4
// const sliced = arr.slice(index no(inclusive), index no(exclusive))
console.log(sliced);

// clone array
const clone = arr.slice()
console.log(clone);

console.log(clone === arr);


// Array like objects to Array
function toArray() {
    return Array.prototype.slice.call(arguments);
}

const argArray = toArray(1, 2, 3, 4, 5, 6, 'hello')
console.log(argArray);
console.log(argArray.__proto__.constructor);