const names = ['John', 'Mary', 'Bob'];
const greet = names.map(name => `HELLO ${name}`);
console.log(greet);

// function greeting(name){
//     console.log(`Hello ${name}`)
// }
let greeting = name => console.log(`Hello ${name}!`)


const userInfo = (firstName, lastName, callBack) => {

}
const arr = [
    {
        name: 'Bike', price: '100'
    },
    {
        name: 'Tv', price: '100'
    }
]
const total = arr.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)
console.log(total)