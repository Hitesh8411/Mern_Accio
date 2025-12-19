const form = document.getElementById("profileForm");
const deleteBtn = document.getElementById("deleteProfile");
const savedProfileDiv = document.getElementById("savedProfile");

window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("userProfile"));

  if (saved) {
    document.getElementById("name").value = saved.name;
    document.getElementById("email").value = saved.email;
    document.getElementById("age").value = saved.age;
    document.getElementById("bio").value = saved.bio;

    displayProfile(saved);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const profileData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    age: document.getElementById("age").value,
    bio: document.getElementById("bio").value.trim(),
  };

  localStorage.setItem("userProfile", JSON.stringify(profileData));

  displayProfile(profileData);
  alert("Profile Saved!");
});

function displayProfile(data) {
  savedProfileDiv.style.display = "block";
  savedProfileDiv.innerHTML = `
    <h3>Saved Profile:</h3>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
  `;
}

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("userProfile");
  form.reset();
  savedProfileDiv.style.display = "none";
  alert("Profile Deleted!");
});
