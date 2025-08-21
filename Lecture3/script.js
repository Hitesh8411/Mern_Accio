/* given an array find its prefix sum*/
const  arr = [3,5,1,4,5,8]
const pref =[];
pref[0] =arr[0];

for (let i=1; i<arr.length;i++){
    pref[i] =pref[i -1] + arr [i];
}
console.log(pref);
