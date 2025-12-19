function multiplier(expo) {
  return function (value) {
    return value * expo;
  };
}

// const result = multiplier(3)(2);

const demo = multiplier(3);
const result = demo(2);

// console.log(result)

// -------- ### -------

// function syncCallback(value,fn){
//     console.log(value)
//     //
//     const result = fn(value);
//     console.log(result);
// }

// function asyncFunction(value, fn){
// function asyncFunction(fn, value){
//     console.log('Start');
//     setTimeout(()=>{fn(value)},4000)
//     setTimeout(()=>{fn(value)},1000)
//     console.log('end');
// }

// syncCallback(`Pratik`, greet)

// asyncFunction('Suraj', greet)
// asyncFunction( greet,'Suraj')

// HOFs

function greet(name) {
  return `Hello ${name}`;
}

// function withLogger(fn){
//     return function(...args){
//         console.log(`Hello Welcome to the Execution Process of ${fn.name}`);
//         const result = fn(...args)
//         console.log(`End of Execution!`)
//         return result;
//     }
// }

// const solution = withLogger(greet);
// console.log(solution('Pratik'))

// Array funtion

const arr = [1, 2, 3, 4, 5];

const arr2 = [
  {
    productName: "P1",
    price: 10,
    qty: 100,
    //total : price * qty.
  },
  {
    productName: "P2",
    price: 56,
    qty: 10,
  },
  {
    productName: "P3",
    price: 100,
    qty: 5,
  },
  {
    productName: "P4",
    price: 40,
    qty: 10,
  },
  {
    productName: "P5",
    price: 70,
    qty: 5,
  },
  {
    productName: "P6",
    price: 45,
    qty: 16,
  },
];

console.log(arr2);

const newArr = arr.map((val) => val * val);
console.log(newArr);

const products = arr2.map((val) => ({ ...val, total: val.price * val.qty }));

console.log(products);

// filters
//price > 50
const filterdArray = arr2.filter((val) => val.price > 50);
console.log(filterdArray);

// Reduce
// Revenue

const cost = products.reduce((acc, it) => (acc += it.total), 0);
console.log(cost);

const fruits = ["apple", "banana", "orange", "apple", "orange"];
// Expected O/P : {apple: 2, banana: 1, orange: 2}

const count = fruits.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(count);

/// [[1,2],[3],[[4],[5,6]]]
// [1,2,3,4,5,6]

// Chaining

const finalCost = arr2
  .map((val) => ({ ...val, total: val.price * val.qty }))
  .filter((val) => val.total > 500)
  .reduce((acc, val) => (acc += val.total), 0);

console.log(finalCost);
