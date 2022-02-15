const blogs = [
    { title: '10 funny example of JavaScript Array', likes: 45, },
    { title: 'Understand JavaScript Array in a new way', likes: 60, },
]
const person = {
    name: 'Ayyub Iqbal',
    Age: 23,
    Study: 'Diploma in CST',
    email: 'abuayubiqbal@gmail.com',
    blogs: blogs,
    hobby: ['Reading', 'Watching', 'Listening', 'Eating', 'Traveling'],
    action() {
        console.log(this);
        console.log('------------------------');
        this.hobby.forEach(hobby => console.log(`${this.name} is ${hobby} and his age is ${this.Age}`))
        console.log('------------------------');
    },
    logBlogs() {
        console.log('------------------------');
        this.blogs.forEach((blog) => {
            console.log(blog.title, blog.likes);
        })
        console.log('------------------------');
    }
}
// object method
person.action()
person.logBlogs()

// global this

console.log('------------------------');
console.log('Global or Window object,', this);
console.log('------------------------');

// String method
const name1 = 'ayyub iqbal';
console.log(` ---------- ${name1.toUpperCase()} ---------- `);

// update property / element
// dot notation
person.Age = 25;
// bracket notation
person['name'] = 'Abu Ayub MD Iqbal';

// add new property
const education = 'Diploma in Computer Science and Technology';
person['education'] = education;
// person['education'] = 'Diploma in Computer Science and Technology';

// delete element
delete person.Study;

console.log('------------------------');
console.log(person);
console.log('------------------------');
console.log('person is an', typeof person);
console.log('------------------------');


// --------------------
const numbers = {}
const x = 0;
const y = 1;
numbers['x'] = x;
numbers['y'] = y;
console.log(numbers);

