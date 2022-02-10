const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
// console.log(sum.name);

const funcs = [sum, sub, mult, div, mod];
const a = 10, b = 20;
for (let i = 0; i < funcs.length; i++) {
    const result = funcs[i](a, b);
    // console.log(`${funcs[i].name} Result = ${result}`);
    // console.log(funcs[i].name);
}



const pointTable = [
    [0, 0],
    [3, 4],
    [5, 6],
    [7, 8],
];

// one dimensional traverse
for (let i = 0; i < pointTable.length; i++) {
    // console.log(`Array ${i} - x = ${pointTable[i][0]} and y = ${pointTable[i][1]}`)
}

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        // console.log(numbers[i][j]);
    }
}

for (let i = 0; i < pointTable.length; i++) {
    for (let j = 0; j < pointTable[i].length; j++) {
        // console.log(`Pints [${i}, ${j}] = ${pointTable[i][j]}`);
    }
}

const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const matrixB = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
]

const matrixSum = (matrixA, matrixB) => {
    const result = []
    for (let i = 0; i < matrixA.length; i++) {
        const row = []
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j])
        }
        result.push(row)
    }
    return result;
}

const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);