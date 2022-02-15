const words = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

const group = words.reduce((acc, cur) => {
    const len = cur.length;
    if (acc[len]) {
        acc[len].push(cur)
    } else {
        acc[len] = [cur]
    }
    return acc;
}, {})
console.log(group);

/* {
  '3': [ 'One', 'Two', 'Six', 'Ten' ],
  '4': [ 'Four', 'Five', 'Nine' ],
  '5': [ 'Three', 'Seven', 'Eight' ]
}
 */