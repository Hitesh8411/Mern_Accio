//Pattern Question
// 1
// 1 2
// 2 3 4
// 3 4 5 6
// 4 5 6 7 8
// write a function to print above pattern

// function printPattern(n) {
//     console.log("1");
//     for (let i = 2; i <= n; i++) {
//         let line = "";
//         for (let j = 0; j < i; j++) {
//             line = line + (i + j)
//         }
//         console.log(line);
//     }
//     }


// Problem: Delete All Odd Numbers from an Array


function removeOdd(arr) {
        let input =[];
        let n = arr.length;
        for (let i =0 ; i < n; i++) {
            if (arr[i] % 2 === 0) {
                input.push(arr[i]);
            }
        }
        if (input.length > 0) 
            console.log(input.join(" "));
        else{
            console.log("-1")
        }
        
}


let arr = [1,3,5]
removeOdd(arr);



function AbsDiffSum(N, myArr) {
  myArr.sort((a, b) => a - b);

  let minElement = myArr[0];
  let maxElement = myArr[N - 1];

  let sumMin = 0, sumMax = 0;
  

  for (let i = 0; i < N; i++) {
    sumMin += Math.abs(minElement - myArr[i]);
    sumMax += Math.abs(maxElement - myArr[i]);
  }

  return Math.max(sumMin, sumMax);
}
console.log(AbsDiffSum(6, [1, 1, 5, 5, 8, 9]));