const parent =document.querySelector(".parent");
const child =document.querySelector(".child");

// parent.addEventListener("click",(event) => {
//     //event.stopPropagation();
//     console.log("Parent is clicked");
// }, 
// {capture :true});


// child.addEventListener("click",(event) => {
//     //event.stopPropagation();
//     event.stopImmediatePropagation();
//     console.log("child is clicked");
// }, 
// {capture :true});



// child.addEventListener("click",(event) => {
//     //event.stopPropagation();
//     console.log("child is clicked twice");
// }, 
// {capture :true});

parent.addEventListener("click",(event) => {
    //event.stopPropagation();
    console.log("Target",event.target); 
    console.log("currentTarget", event.currentTarget);
    console.log("parent is Clicked");
}, 
{capture :true});


// code is remain



//  

function greetMe(greeting) {
    console.log(greeting + " " + this.name);
}

const person = {
    name :"Hitesh"
}

greetMe.call(person, "Hello");
//greetMe.call(newThis, arg1, arg2, ...)

greetMe.apply(person,["hey"]);

const greetPerson=greetMe.bind(person,"Bye");
greetPerson();

greetMe("Hi");