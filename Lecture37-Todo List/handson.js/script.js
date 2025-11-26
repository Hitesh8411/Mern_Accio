// const addBtn = document.querySelector(".add-btn");

// const todoItemsSection = document.querySelector("#todo-items");

// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const todoElement = document.querySelector("#todo");
//   const todoItem = document.createElement("div");
//   todoItem.className = "todo-item";
//   todoItem.innerHTML = `<p>
//             ${todoElement.value}
//         </p>
//         <div class="todo-buttons">          
//             <button id = "edit-btn">Edit</button>
//             <button id = "delete-btn">Delete</button>
//         </div>`;
//   todoItemsSection.appendChild(todoItem);
//   const deleteBtn = todoItem.querySelector("#delete-btn");
//   deleteBtn.onclick = () => todoItem.remove();
//   const editBtn = todoItem.querySelector("#edit-btn");
//   editBtn.addEventListener("click", () => {
//     const pElement = todoItem.querySelector("p");
//     if (editBtn.textContent == "Save") {
//       editBtn.textContent = "Edit";
//       pElement.style.display = "block";
//       pElement.style.color = "red";
//       const newInputElement = todoItem.querySelector("input");

//       // if user is saving an empty todo, we'll retrieve the original todo
//       if (newInputElement.value) {
//         pElement.textContent = newInputElement.value;
//         let str = "(edited)";
//         pElement.textContent += str;
//       }
//       newInputElement.remove();
//     } else {
//       const todoButtons = todoItem.querySelector(".todo-buttons");
//       editBtn.textContent = "Save";
//       pElement.style.display = "none";
//       const newInputElement = document.createElement("input");
//       newInputElement.value = pElement.textContent.trim();
//       todoItem.insertBefore(newInputElement, todoButtons);
//     }
//   });
//   todoElement.value = "";
// });


addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const todoElement = document.querySelector("#todo");
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `<p> 
        ${todoElement.value}
        </p>
        <div class="todo-buttons">
            <button>Edit</button>
            <button>Delete</button>


        </div>`;
    todoItemsSection.appendChild(todoItem);


});
