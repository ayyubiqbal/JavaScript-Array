const products = [
    { name: 'iphone', price: 1000 },
    { name: 'iphone', price: 1000 },
    { name: 'iphone', price: 1000 },
    { name: 'samsung', price: 2000 },
    { name: 'nokia', price: 3000 },
    { name: 'nokia', price: 3000 },
    { name: 'huawei', price: 4000 },
    { name: 'samsung', price: 2000 },
]

const invoice = products.reduce((acc, cur) => {
    if (acc[cur.name]) {
        // console.log(`inside if ${acc[cur.name]}`);
        acc[cur.name].quantity++;
        acc[cur.name].price += cur.price;
    } else {
        acc[cur.name] = {
            price: cur.price,
            quantity: 1,
        }
    }
    return acc
}, {})

console.log(invoice);

/*
// result
{
    iphone: { price: 3000, quantity: 3 },
    samsung: { price: 4000, quantity: 2 },
    nokia: { price: 6000, quantity: 2 },
    huawei: { price: 4000, quantity: 1 }
}
*/

// task - total price

// basic object operation to understand array reducing from array to objects
var obj6 = {
    x: 10
}
obj6.x = 45;
obj6.a = 15;

console.log(obj6);
console.log(obj6.c);

obj6['y'] = 100;

var prop = 'z'; //cur.name = 'z'
obj6[prop] = 55; //obj6[cur.name] = 55;
console.log(obj6);
