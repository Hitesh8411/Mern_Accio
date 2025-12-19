let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  //   console.log(inp.value);
  let li = document.createElement("li");
  li.innerText = inp.value;
  ul.appendChild(li);

  let delbtn = document.createElement("button");

  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");
  li.append(delbtn);

  inp.value = "";
});

// EVENT DELEGATION
ul.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
