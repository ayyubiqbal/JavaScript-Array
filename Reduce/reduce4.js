const realEstates = [
    {
        id: '3c5d9d23-4a8f-4b8e-8c3b-d8d9b8d8d8d8',
        price: 1000000,
        city: 'New York',
    },
    {
        id: '3c5d9d3f-4a8f-4b8e-8c3b-d8d9b8d8d8d8',
        price: 1500000,
        city: 'New York'
    },
    {
        id: '3c5d9d9e-4a8f-4b8e-8c3b-d8d9b8d8d8d8',
        price: 2000000,
        city: 'New York'
    },
]
console.log(realEstates);

function reducer(acc, cur) {
    console.log('-------------------------------------');
    console.log(acc, cur);
    console.log('-------------------------------------');
    return {
        ...acc,
        [cur.id]: cur,
    }
}

const newRealEstates = realEstates.reduce(reducer, {})

console.log(newRealEstates);