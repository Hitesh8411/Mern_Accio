// Select paragraph
let para = document.querySelector("#description");
console.log(para.textContent);
// para.innerHTML = `<b>${para.innerHTML}</b>`;

// Change heading text
let heading = document.querySelector("h1");
heading.textContent = "Mitanshu rocks";

// Change image attributes
let img = document.querySelector("#mainImg");
img.setAttribute("id", "imageid");
img.setAttribute("src", "assets/creation_1.png");

// Select all links inside .box
let info = document.querySelectorAll(".box a");

// FIXED LOOP (use < not <=)
for (let i = 0; i < info.length; i++) {
  info[i].style.color = "purple"; // inline style applied
}

let box = document.querySelector(".box");
box.classList.add("green");
box.classList.toggle("green");
box.classList.remove("green");
console.log(box.classList.contains("green"));
box.classList.add("green");
box.classList.toggle("green");
box.classList.add("green");
console.log(box.classList.contains("green"));

let ul = document.querySelector(".box ul");
let pare = ul.previousElementSibling;
console.log(pare.parentElement.nextElementSibling);

// parentElement
// Children
// childElementCount
// nextElementSibling
// previousElementSibling
