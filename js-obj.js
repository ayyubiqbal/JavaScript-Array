const person = {
    name: 'Ayyub Iqbal',
    Age: 23,
    Study: 'Diploma in CST',
    hobby: ['Reading', 'Watching', 'Listening', 'Eating', 'Traveling'],
    action() {
        this.hobby.forEach(hobby => console.log(`${this.name} is ${hobby} and his age is ${this.Age}`))
    }
}

person.action()

// update property / element
// dot notation
person.Age = 25;
// bracket notation
person['name'] = 'Abu Ayub MD Iqbal';
person.education = 'Diploma in Computer Science and Technology'

// delete element
delete person.Study;

console.log('------------------------');
console.log(person);