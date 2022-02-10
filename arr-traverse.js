const arr = [1, 2, 3, 4, 5, 6];
const m = arr[3];
const n = arr[4]
const x = 1, y = 0;
console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 2]);

/* 
sum = 0 + 1 = 1;
sum = 1 + 2 = 3;
sum = 3 + 3 = 6;
sum = 6 + 4 = 10;
sum = 10 + 5 = 15;
sum = 15 + 6 = 21;
*/
const arr = [67, 52, 53, 344, 35, 26, 99];

let sum = 0;
for (i = 1; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);
const avg = sum / arr.length;
console.log(avg);



// find largest number
let max = arr[0];
let min = arr[0];
for (i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i]
    if (min > arr[i]) min = arr[i]
}
console.log(max);
console.log(min);