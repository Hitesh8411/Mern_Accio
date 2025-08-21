// Last occurrence in unsorted array
let arr = [8 ,5 ,1, 4, 5, 3, 2];
function findIndex(key, arr){
    let lastIndex = -1;

    for (let i =0; i< arr.length; i++) {
        if (arr[i]===key) {
            lastIndex = i;
        }
    }
    console.log(lastIndex);
}
findIndex(5, arr); 

