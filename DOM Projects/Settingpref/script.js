const theme = document.getElementById("theme");
const fontsize = document.getElementById("fontsize");
const language = document.getElementById("language");
const notifications = document.getElementById("notifications");

let savedSettings;

if (localStorage.getItem("settings")) {
  savedSettings = JSON.parse(localStorage.getItem("settings"));
} else {
  savedSettings = {
    theme: "light",
    fontsize: "medium",
    language: "english",
    notifications: false,
  };
}

theme.value = savedSettings.theme;
fontsize.value = savedSettings.fontsize;
language.value = savedSettings.language;
notifications.checked = savedSettings.notifications;

document.body.className = savedSettings.theme;

if (savedSettings.fontsize === "small") {
  document.body.style.fontSize = "12px";
} else if (savedSettings.fontsize === "medium") {
  document.body.style.fontSize = "16px";
} else {
  document.body.style.fontSize = "20px";
}

function saveSettings() {
  const settings = {
    theme: theme.value,
    fontsize: fontsize.value,
    language: language.value,
    notifications: notifications.checked,
  };
  localStorage.setItem("settings", JSON.stringify(settings));
  location.reload();
}

theme.addEventListener("change", saveSettings);
fontsize.addEventListener("change", saveSettings);
language.addEventListener("change", saveSettings);
notifications.addEventListener("change", saveSettings);
