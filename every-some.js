const studentsArr = [
    { id: 1, name: 'Ayyub Iqbal', gpa: 5, email: 'iqbal@gmail.com' },
    { id: 2, name: 'Mahfuz Swaron', gpa: 3.5, email: 'mahfuz@gmail.com' },
    { id: 3, name: 'tusar Ahmed', gpa: 2.5, email: 'tusar@gmail.com' },
]

const allPassed = studentsArr.every((value) => value.gpa >= 2.5) //it returns true or false, need to meet condition with every item for getting 'true' return; 
// console.log(allPassed);
if (allPassed) {
    console.log('congrats! everyone has been passed');
}
else {
    console.log('Not everyone has been passed, no problem at all.');
}

const gpa5 = studentsArr.some((value) => value.gpa === 5) //it returns also true or false, but has to meet condition at least with one item 
// console.log(gpa5);

if (gpa5) {
    console.log('Yeah!!, We have some gpa-5 people');
}
else {
    console.log('Nobody got gpa-5');
}