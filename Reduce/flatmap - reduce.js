let nestedArray = [1, [2, 3], 4, [5, 6, 7]]
const flatArray = nestedArray.flat();
// console.log(flatArray);

const flatArray1 = nestedArray.reduce((acc, cur) => {
    // console.log(`acc - ${acc}, cur - ${cur}`);
    return acc.concat(cur)
}, [])
// console.log(flatArray1);

// ----------------------------------------------

const arr = [1, 2, 3, 4, 5]

const map = arr.map((x) => [x * 2])//.flat()
console.log(map);

// flatmap method
const flatmap = arr.flatMap((x) => [x * 2])
console.log(flatmap);

// flatmap using reduce
const reducedFlatMap = arr.reduce((acc, cur) => {
    return acc.concat(cur * 2)
}, [])
console.log(reducedFlatMap);


// flatmap operation
const flatmap1 = arr.flatMap((x) => [x, x * 2])
console.log(flatmap1)

// flatmap using reduce
const reducedFlatMap1 = arr.reduce((acc, cur) => {
    return acc.concat(cur, cur * 2)
}, [])
console.log(reducedFlatMap1);