const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
]

const result = arr.reduceRight((acc, cur) => {
    return acc.concat(cur)
}, [])
console.log(result);


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduceRight((acc, cur) => {
    console.log(`acc [${acc}], cur [${cur}]`);
    return acc += cur;
}, 0)

console.log(`sum = ${sum}`);