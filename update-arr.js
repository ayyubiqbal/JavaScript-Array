// update array
const arr1 = new Array(10)
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = false
}
// console.log(arr1);

const arr2 = new Array(10)
arr2.fill(true)
// console.log(arr2);



// fill array and update - tik tok toe
const response = new Array(9)
response.fill(false)
for (let i = 0; i < response.length; i++) {
    const random = Math.floor(Math.random() * 10 + 1);
    response[i] = random > 5 ? 'X' : 'O'
    /* if (random > 5) {
        response[i] = 'X'
    }
    else {
        response[i] = 'O'
    } */
}
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(response);


const names = ['Iqbal', 'Mahfuz', 'Tusar']
names[0] = 'Ayyub Iqbal';
names[1] = 'Mahfuz Swaron';
names[2] = 'Abd Aziz tusar';
// console.log(names);
// --------------
// Array is mutable
function update(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${i + 1}. ${arr[i]}`;
    }
    return arr;
}

const updatedName = update(names)
console.log(updatedName);
console.log(names);

console.log(names === updatedName);
// in function, we passed the reference. That's why, it changed our original Array.