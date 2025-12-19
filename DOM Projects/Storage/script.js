let key = "fullname";
let value = "mitanshu";
localStorage.setItem(key, value);

console.log(localStorage.getItem(key));
// localStorage.removeItem(key);
console.log(localStorage.length);


console.log(localStorage.getItem("unknown"));//it will give null 

const countElement = document.getElementById("count");
const button = document.getElementById("increment");

let count = Number(localStorage.getItem("count")) || 0; //type coversion because it retunsr the string
countElement.textContent = count;

button.addEventListener("click",()=>{
 count++;
 countElement.textContent = count;
 localStorage.setItem("count",count);
 console.log(count);
});


// similar concepts for the session storage but it only remove when you change the tab


//storing an Object
const user =  {
    name:"vijay",
    age:21
};

let str = JSON.stringify(user);//convert to string
localStorage.setItem("user",str);

const userStorage = JSON.parse(localStorage.getItem("user"));
console.log(userStorage.name);

////storing an Array
const nums = [1,2,3];
 let arr = JSON.stringify(nums);
 localStorage.setItem("nums",arr)

 const arrStorage = JSON.parse(localStorage.getItem("nums"));
 console.log(arrStorage[0]);