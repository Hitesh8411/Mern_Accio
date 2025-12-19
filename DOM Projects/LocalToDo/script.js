let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let tasks;

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
  tasks = [];
}

function showTasks() {
  ul.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    delbtn.dataset.index = index;

    li.append(delbtn);
    ul.append(li);
  });
}

showTasks();

btn.addEventListener("click", () => {
  if (inp.value.trim() === "") return;

  tasks.push(inp.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  inp.value = "";
  showTasks();
});

// EVENT DELEGATION FOR DELETE
ul.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    let index = event.target.dataset.index;

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
  }
});
