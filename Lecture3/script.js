/* given an array find its prefix sum 
prefix sum = sum of all elemts from index =0  to incex = i
*/
const  arr = [3,5,1,4,5,8]
const pref =[];
pref[0] = arr[0];

for (let i=1; i<arr.length;i++){
    pref[i] = pref[i -1] + arr [i];
}
console.log(pref);
