// const arr2 =new Array("10");
// console.log(arr2);
// const arr21 =new Array(10);
// console.log(arr21);

// more array methods

const teams=["CSk", "RCB", "SRH", "KKR","GT"];

//indexOf(value) 
// console.log(teams.indexOf("SRH"));
// console.log(teams.indexOf("ABC"));

//task replace kkr with lsg

// let i = teams.indexOf("KKR")
// teams[i]="LSG";
// console.log(teams);

// const kkrIndex = teams.indexOf("KKR");
// if (kkrIndex != -1) {
//     teams[kkrIndex] = "LSG";
// }
// console.log(teams);

// console.log("Finding SRH: ", teams.includes("SRH"));
// console.log("Finding SRK", teams.includes("SRK"));

// replaace kkr with lsg using indexof and include method

// const oldTeams ="KKR"
// const newTeams ="LSG"

// if (teams.includes(oldTeams)){
//     const kkrIndex =teams.indexOf(oldTeams);
//     teams[kkrIndex] =newTeams;

// }
// console.log(teams);

// concat() function
// const otherTeams = ["LSG", "RR", "MI"];
// const otherTeams2 = ["LSG2", "RR2", "MI2"];
// const otherteams3 = otherTeams.concat(otherTeams2);
// console.log(otherteams3)

// let fact = 1;
// let num = 5;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(fact);

// function factorial(number){
//     let result =1;
//     for(let i =1 ; i<= number; i++){
//         result *=i;
//     }
//     return result;

// }
// console.log(factorial(5));

// write a average of an array 
// let arr = [4,8,3,5]
// let sum =0;
// for (let i =1; i<=arr.length;i++) {
//     sum = sum + arr;
// }
// console.log(sum)

function calAvg(arr) {
    let avg =0;
    for(let num of arr) {
        avg +=num;
    }
    return avg/arr.length;
}
let array =[4,8,3,5];
console.log(calAvg(array))


// Q.2 Give an array [4,10,6,8 and r = 4;
//     find ncr of each element of this array


/*steps : 
1 - write  
*/

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
function nCr(n, r) {
    if (n - r < 0) return -1;

    const nFact = factorial(n);
    const rFact = factorial(r);
    const nrFact = factorial(n - r);

    return nFact / (rFact * nrFact);
}

function nCrOfArray(arr) {
    const r = 4;
    const ans = [];
    for (let number of arr) {
        const ncr = nCr(number, r);
        ans.push(ncr);
    }
    return ans;
}

let arr = [4, 10, 6, 8];
console.log(nCrOfArray(arr));






// let arr = [4, 10, 20, 14];
// let r = 2;
// for (let i = 0; i <= arr.length; i++) {
//     let fact = fact * (i + 1);
//     let nCr = (fact/((arr[i]-r))
// }

// let array =[4,10,6,8];
// let r=4;
// function fact(num){
//     if(num==0 || num==1){

//     return 1; 
// }
// return num*fact(num-1);
// }
// let resultArray=[];
// for(let i =0; i<array.length;i++) {
//     let result=fact(array[i])/(fact(r)*fact(array[i]-r));

// resultArray.push(result);
// }
// console.log(resultArray);


