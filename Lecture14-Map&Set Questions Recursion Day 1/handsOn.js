//Sum of first N natural numbers

// function sumN(N) {
//   if (N === 0) return 0; 
//   return N + sumN(N - 1);
// }

// console.log(sumN(5)); 
// console.log(sumN(10)); 

// let str = "This is uday";
// let count = 0;
// for (let i = 0; i <= str.length-1; i++) {
//   if (str[i] === " "){
//     count++;

// }
// }
// console.log(count+1);


let str = "This is uday";
console.log(countWord(str,0,0));

function countWord(str,count,i){
    if(i === str.length){
      return count+1;
    }
    if(str[i] === " "){
      count++;
    }
    return countWord(str,count,i+1);
}