//creating an element
// if create this i always at last child means always create at last

// h.w append vs apppendchild

const h3element =document.createElement("h3");

    h3element.textContent ="Hi , am a H3 element";
    const div1 = document.querySelector("div");
    div1.appendChild(h3element);


// agar main koi dom element ko vapas append kar raha hu to dom main to dom element vaha se move ho jayega waha pe hai woh

// events in dom

// // 🔹 What are DOM Events?

// An event is an action that happens in the browser — like a user clicking a button, typing in an input, or moving the mouse.
// // In JavaScript, we can listen and respond to these events.


// const para1 =document.querySelector("p");
// para1.addEventListener("click", para1clicked());

// function para1clicked() {
//     console.log("you have clicked a para");
// }

// events in dom

// const h3element = document.createElement("h3");
// h3element.textContent = "Hi, I am a H3 element";
// const div1 = document.querySelector("div");
// div1.appendChild(h3element);

const para1 = document.querySelector("p");
para1.addEventListener("click", (event) => {
  h3element.remove();
  console.log("You have clicked a Para", event.type);
  para1.style.color = "red";
  setTimeout(() => (para1.style.color = "black"), 800);
});

const btn = document.querySelector("button");
btn.addEventListener("mouseover", (event) => {
  console.log("mouse is hover", event.type);
  btn.style.backgroundColor = "orange";
  btn.style.color = "white";
});
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
  btn.style.color = "";
});

const box = document.getElementById("box");
box.addEventListener("mousedown", (event) => {
  console.log("mouse down on box", event.type);
  box.style.backgroundColor = "lightgreen";
});
box.addEventListener("mouseup", (event) => {
  console.log("mouse up on box", event.type);
  box.style.backgroundColor = "lightblue";
});

const upDiv = document.getElementById("up");
const downDiv = document.getElementById("down");

document.addEventListener("keydown", (event) => {
  console.log("down key pressed", event.key);
  downDiv.style.backgroundColor = "tomato";
  downDiv.textContent = `Key Down: ${event.key}`;
});

document.addEventListener("keyup", (event) => {
  console.log("up key released", event.key);
  upDiv.style.backgroundColor = "lightgreen";
  upDiv.textContent = `Key Up: ${event.key}`;
  setTimeout(() => {
    upDiv.style.backgroundColor = "";
    downDiv.style.backgroundColor = "";
    upDiv.textContent = "";
    downDiv.textContent = "down key";
  }, 500);
});
