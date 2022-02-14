// Our custom reduce system
function myReduce(arr, callback, initial) {
    let accumulator = initial, start = 0;
    if (!initial) {
        accumulator = arr[0]
        start = 1;
    }
    for (let i = start; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator;
}

// --------
const arr = [1, 2, 3, 4, 5]
const sum = myReduce(arr, (acc, cur) => {
    // console.log(`acc ${acc}, cur ${cur}`);
    return acc + cur;
})
console.log(sum);
// --------


// --------------------
const votes = [
    'Java',
    'JavaScript',
    'Python',
    'Java',
    'Python',
    'JavaScript',
    'JavaScript',
]
const result = myReduce(votes, (acc, cur) => {
    // console.log(`acc ${acc}, cur ${cur}, ${acc[cur]}`);
    if (acc[cur]) {
        // console.log(acc[cur]);
        acc[cur]++;
    }
    else {
        acc[cur] = 1;
    }
    return acc;
}, {})
console.log(result);
// --------------------

/*
// expected result
const result = { Java: 2, JavaScript: 3, Python: 2 }
*/


// arr to obj with reduce method
/* const result = votes.reduce((acc, cur) => {
    // console.log(`acc ${acc}, cur ${cur}, ${acc[cur]}`);
    if (acc[cur]) {
        // console.log(acc[cur]);
        acc[cur]++;
    }
    else {
        acc[cur] = 1;
    }
    return acc;
}, {})

console.log(result); */