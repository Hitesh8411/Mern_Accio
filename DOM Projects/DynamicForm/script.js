const forms = document.querySelectorAll(".form-step");
const title = document.getElementById("form-title");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentStep = 0;

forms.forEach((form) => {
  for (let element of form.elements) {
    if (!element.id) continue;
    const saved = sessionStorage.getItem(element.id);
    if (saved !== null) element.value = saved;
  }
});

for (let i = 0; i < forms.length; i++) {
  let firstField = forms[i].elements[0];
  if (!sessionStorage.getItem(firstField.id)) {
    currentStep = i;
    break;
  }
}

function updateStep() {
  forms.forEach((form, index) => {
    form.style.display = index === currentStep ? "block" : "none";
  });

  title.textContent = forms[currentStep].dataset.formName;

  prevBtn.disabled = currentStep === 0;

  nextBtn.textContent = currentStep === forms.length - 1 ? "Submit" : "Next";
}

updateStep();

function saveStepData() {
  const form = forms[currentStep];
  for (let element of form.elements) {
    if (!element.id) continue;
    sessionStorage.setItem(element.id, element.value);
  }
}

function validateStep() {
  const form = forms[currentStep];
  for (let element of form.elements) {
    if (element.value.trim() === "") {
      return false;
    }
  }
  return true;
}

nextBtn.addEventListener("click", () => {
  if (!validateStep()) {
    alert("Please fill all fields.");
    return;
  }

  saveStepData();

  if (currentStep === forms.length - 1) {
    alert("Form submitted successfully!");

    const finalData = {};
    forms.forEach((form) => {
      for (let element of form.elements) {
        if (!element.id) continue;
        finalData[element.id] = sessionStorage.getItem(element.id);
      }
    });

    console.log("Submitted Data:", finalData);
    sessionStorage.clear();
    return;
  }

  currentStep++;
  updateStep();
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
  }
});
