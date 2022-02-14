const numbers = [1, 2, 3, 4, 5]

function sumFunc(accumulator, currentValue, index, arr) {
    // console.log(`index ${index}, Acc ${accumulator}, Cur ${currentValue}`);
    return accumulator + currentValue;
}

const sum = numbers.reduce(sumFunc, 0)
// console.log(sum);

let nestedArray = [1, [2, 3], 4, [5, 6, 7]]
const flatArray = nestedArray.flat();
// console.log(flatArray);

const flatArray1 = nestedArray.reduce((acc, cur) => {
    console.log(`acc - ${acc}, cur - ${cur}`);
    return acc.concat(cur)
}, [])
console.log(flatArray1);