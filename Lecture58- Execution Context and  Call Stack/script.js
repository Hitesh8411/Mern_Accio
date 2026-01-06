// function countdown(n) {
//   console.log(n);
//   countdown(n - 1); // ❌ no stop condition
// }

// countdown(10);


// let a;
// const b =5;
// a =7;
// var c =10;
// console.log(a+b+c);

var a = 10;

function outer() {
  var b = 20;
  let c = 30;
  const d = 40;

  function inner() {
    var b = 200;  
    let c = 300;   
    const e = 50;

    console.log(a); 
    console.log(b); 
    console.log(c); 
    
  }

  inner();

  console.log(b); 
  console.log(c); 
}

outer();
