const textarea = document.getElementById("notes");
const clearButton = document.getElementById("clear");

const STORAGE_KEY = "my-notes";

textarea.addEventListener("input", () => {
  let currtext = textarea.value;
  console.log(currtext);
  localStorage.setItem(STORAGE_KEY, currtext);
});

const savenotes = localStorage.getItem(STORAGE_KEY);

if (savenotes !== null) {
  textarea.textContent = savenotes;
}

clearButton.addEventListener("click", () => {
  textarea.value = "";
  localStorage.removeItem(STORAGE_KEY);
});
