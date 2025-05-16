//js for updateInfo.html

const updateNameBtn = document.querySelector(".updateNameBtn");
const currentWeightField = document.querySelector(".currentWeightField");
const goalWeightField = document.querySelector(".goalWeightField");
const updateInfoBtn = document.querySelector(".updateInfoBtn");

updateNameBtn.addEventListener("click", updateName);

updateInfoBtn.addEventListener("click", updateInfo);

function updateInfo() {
  let currentWeight = currentWeightField.value;
  let goalWeight = goalWeightField.value;

  if (currentWeightField.value !== "" || currentWeightField.value !== null) {
    localStorage.setItem("currentWeight", currentWeightField.value);
  }
  if (goalWeightField.value !== "" || currentWeightField.value !== null) {
    localStorage.setItem("goalWeight", goalWeightField.value);
  }

  currentWeightField.value = "";
  goalWeightField.value = "";

  location.href = "tracker.html";
}

function updateName() {
  localStorage.removeItem("name");
  location.href = "index.html";
}
