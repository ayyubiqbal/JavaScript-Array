const votes = [
    'Java',
    'JavaScript',
    'Python',
    'Java',
    'Python',
    'JavaScript',
    'JavaScript',
]

const result = votes.reduce((acc, cur) => {
    console.log(`acc ${acc}, cur ${cur}, ${acc[cur]}`);
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