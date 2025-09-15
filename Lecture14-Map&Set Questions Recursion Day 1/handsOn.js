//Sum of first N natural numbers

function sumN(N) {
  if (N === 0) return 0; 
  return N + sumN(N - 1);
}

console.log(sumN(5)); 
console.log(sumN(10)); 

