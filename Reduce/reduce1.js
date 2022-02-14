const numbers = [1, 2, 3, 4, 5]

function sumFunc(accumulator, currentValue, index, arr) {
    console.log(`index ${index}, Acc ${accumulator}, Cur ${currentValue}`);
    return accumulator + currentValue;
}

const sum = numbers.reduce(sumFunc, 0)
console.log(sum);