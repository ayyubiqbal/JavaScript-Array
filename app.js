const arr1 = [1, 2, 3, 4, 5, 6, 7]
const arr2 = [8, 9, 10]

// arr1.push(arr2)
// arr1.push(...arr2)
Array.prototype.push.apply(arr1, arr2)

console.log(arr1);