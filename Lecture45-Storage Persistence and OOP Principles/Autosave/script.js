const memoBox = document.getElementById("memoBox");
const resetBtn = document.getElementById("resetBtn");
const statusText = document.getElementById("status");

const NOTE_KEY = "saved-note";

memoBox.addEventListener("input", () => {
  localStorage.setItem(NOTE_KEY, memoBox.value);
  statusText.textContent = "Saved ✔ (" + new Date().toLocaleTimeString() + ")";
});


window.addEventListener("DOMContentLoaded", () => {
  const savedNote = localStorage.getItem(NOTE_KEY);
  if (savedNote) {
    memoBox.value = savedNote;
    statusText.textContent = "Restored from last session ✨";
  }
});


resetBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear your notes?")) {
    memoBox.value = "";
    localStorage.removeItem(NOTE_KEY);
    statusText.textContent = "Notes cleared ";
  }
});
