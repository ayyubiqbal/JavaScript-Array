// Use push to insert at the end
const arrP1 = [1, 2, 3, 4, 5, 6, 7]
const arrP2 = [8, 9, 10]
// arrP1.push(arrP2)
// arrP1.push(...arrP2)
Array.prototype.push.apply(arrP1, arrP2)
// console.log(arrP1);

// Use unshift to insert at the beginning
const arrU1 = [5, 6, 7, 8, 9]
const arrU2 = [1, 2, 3, 4]
// arrU1.unshift(...arrU2)
Array.prototype.unshift.apply(arrU1, arrU2)
// console.log(arrU1);

// Use splice to insert at the given index
const arrS1 = [1, 2, 3, 5, 9]
const arrS2 = [6, 7, 8]
arrS1.splice(3, 0, 4)
arrS1.splice(5, 0, ...arrS2)

console.log(arrS1);