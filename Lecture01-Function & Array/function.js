// Print Statement Function - JS
function fun() {
    console.log("I am another function")

}
fun();


//Digit Frequency Counter
function CountFreqDigit(n,d){
    let count =0;
    let strN = n.toString();
    let digit =d.toString();

    for (let ch of strN){
        if(ch === digit){
            count++;
        }
    }
    return count;

}
let n= 11;
let d=1;
console.log(CountFreqDigit(n,d));