// Array of objects
const students = [
    { id: 1, name: 'Iqbal', age: 20 },
    { id: 2, name: 'Mahfuz', age: 21 },
    { id: 3, name: 'Tusar', age: 22 },
]

const givenId = 2;
const updatedName = 'Mahfuz Swaron';

for (let i = 0; i < students.length; i++) {
    if (students[i].id === givenId) {
        students[i].name = updatedName;
        break;
    }
}
console.log(students);