// console.log("Start");
// const obj = new Promise ((resolve) => {
//     console.log("inside promise");
//     setTimeout(() => {
//         resolve ("we're done");
//     },0);
// });
// obj.then((msg) => {
//     console.log(msg);

// });
// console.log("End");

// console.log("Start");
// async function fn() {
//     console.log("before wait");
//     await Promise.resolve("I am resolved").then (function insideThen(msg) {
//         console.log(msg);
    
//     });
//     console.log("after wait");

// }
// fn();
// console.log("End");

console.log("A")
setTimeout(() => {
    console.log("B");

},1000);
Promise.resolve().then(() => {
    console.log("C");
});
console.log("D");