// ===== DOM ELEMENTS =====
const usernameEl = document.getElementById("username");
const avatarEl = document.getElementById("user-avatar");

const textarea = document.getElementById("post-text");
const charCount = document.getElementById("char-count");

const imageInput = document.getElementById("post-image");
const imagePreview = document.getElementById("image-preview");

const postBtn = document.getElementById("post-btn");

// ===== USER SETUP =====
let currentUser = localStorage.getItem("username");

if (!currentUser) {
  currentUser = prompt("Enter your username:");
  localStorage.setItem("username", currentUser);
}

usernameEl.innerText = currentUser;
avatarEl.innerText = currentUser.charAt(0).toUpperCase();

// ===== CHARACTER COUNTER =====
textarea.addEventListener("input", () => {
  charCount.innerText = `${textarea.value.length} / 280`;

  // Save draft
  localStorage.setItem("draft", textarea.value);
});

// Load draft on refresh
textarea.value = localStorage.getItem("draft") || "";
charCount.innerText = `${textarea.value.length} / 280`;

// ===== IMAGE PREVIEW =====
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    imagePreview.src = reader.result;
    imagePreview.style.display = "block";
  };
  reader.readAsDataURL(file);
});

// ===== BASIC VALIDATION =====
postBtn.addEventListener("click", () => {
  if (textarea.value.trim() === "") {
    alert("Post cannot be empty!");
    return;
  }

  alert("img added");
});
