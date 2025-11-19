//add click event listener 
const outer= document.querySelector(".outer-div");
const inner= document.querySelector(".inner-div");
const h1 = document.querySelector("#h1");

outer.addEventListener("click",(event)=>{
    console.log("Outer Div Clicked");
    outer.style.background="lightblue";
    
},true);

inner.addEventListener("click",(event)=>{
    console.log("Inner Div Clicked");
    inner.style.background="lightgreen";
    
},true);    

h1.addEventListener("click",(event)=>{
    console.log("H1 Clicked");
    h1.style.background="red";
    
},true);


// bubling phase : we go from child to parent
// capturing phase : we go from parent to child when we pass true as third argument in addEventListener method
// by default capturing phase is false i.e we go in bubbling phase
// event.target : it gives the actual element on which event is occured
// event.currentTarget : it gives the element on which event listener is attached
// event.stopPropagation() : it stops the further propagation of event in capturing and bubbling phase
