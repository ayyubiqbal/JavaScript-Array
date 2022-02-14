const names = [
    'Ayyub Iqbal',
    'Mahfuz Swaron',
    'tusar Ahmed',
]

/* function reuse(arr, logic) {
    for (let i = 0; i < arr.length; i++) {
        logic(arr[i], i, arr)
    }
} */

/* const result1 = []
reuse(names, (value) => {
    result1.push(value.length)
})

console.log(result1); */


/* const result2 = []
reuse(names, (value) => {
    result2.push(value.toUpperCase())
})

console.log(result2); */


/* const result3 = []
reuse(names, (value) => {
    result3.push(value.substr(6))
})

console.log(result3);  */


// custom map building
function reuseAndMap(arr, logic) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(logic(arr[i], i, arr))
    }
    return result;
}

const lengths = reuseAndMap(names, (value) => value.length)
const upperCase = reuseAndMap(names, (value) => value.toUpperCase())
const sliced = reuseAndMap(names, (value) => value.substr(6))

// console.log(lengths);
// console.log(upperCase);
// console.log(sliced);



// map method
const lengths2 = names.map((value) => value.length)
const upperCase2 = names.map((value) => value.toUpperCase())
const sliced2 = names.map((value) => value.substr(6))

/* console.log(lengths2);
console.log(upperCase2);
console.log(sliced2);
 */

const studentsArr = [
    { id: 1, name: 'Ayyub Iqbal', gpa: 4.5, email: 'iqbal@gmail.com' },
    { id: 2, name: 'Mahfuz Swaron', gpa: 3.5, email: 'mahfuz@gmail.com' },
    { id: 3, name: 'tusar Ahmed', gpa: 2.5, email: 'tusar@gmail.com' },
]

const mappedStudents = studentsArr.map((value) => {
    return {
        ...value,
        title: `Hello ${value.name}`,
        mgs: `Your GPA is ${value.gpa},  you have been ${value.gpa >= 3 ? 'passed' : 'failed, sorry!'}`
    }
})

console.log(mappedStudents);