let calories = JSON.parse(localStorage.getItem("calories")) || 0;
var foodArray = JSON.parse(localStorage.getItem("food")) || [];

let storedDate = localStorage.getItem("date");
let currentDate = new Date().toDateString();

if (!storedDate) {
  localStorage.setItem("date", currentDate);
  storedDate = currentDate;
}

const introPara = document.querySelector(".introPara");
const finalFood = document.querySelector(".finalFood");
const finalCalories = document.querySelector(".finalCalories");
const whatIAte = document.querySelector(".whatIAte");
const caloriesConsumed = document.querySelector(".caloriesConsumed");
const emptyStomach = document.querySelector(".emptyStomach");
const motivation = document.querySelector(".motivation");

const foodField = document.querySelector(".foodField");
const calorieField = document.querySelector(".calorieField");
const addBtn = document.querySelector(".addBtn");
const whatIAteBtn = document.querySelector(".whatIAteBtn");
const resetBtn = document.querySelector(".resetBtn");
const updateInfoBtn = document.querySelector(".updateInfoBtn");

introPara.textContent = `Hey ${localStorage.getItem("name")}, what you ate?`;

if (localStorage.getItem("currentWeight") === null || localStorage.getItem("currentWeight") === "" || localStorage.getItem("goalWeight") === null || localStorage.getItem("goalWeight") == "") {
  motivation.textContent = "";
} else {
  motivation.textContent = `Remember, you are doing it to go from ${localStorage.getItem("currentWeight")} kgs to ${localStorage.getItem("goalWeight")} kgs. You got this! `;
}

const btn = document.getElementById("#button");

addBtn.addEventListener("click", add);

whatIAteBtn.addEventListener("click", ate);

resetBtn.addEventListener("click", reset);

updateInfoBtn.addEventListener("click", updateInfoHref);

if (storedDate !== currentDate) {
  newDay();
}

function add() {
  if (storedDate !== currentDate) {
    newDay();
  }

  if (foodField.value === null || foodField.value === "" || calorieField.value === null || calorieField.value === "") {
    emptyStomach.textContent = "Eating air does not count.";
    emptyStomach.style.backgroundColor = "white";
    emptyStomach.style.color = "black";

    finalFood.textContent = " ";
    whatIAte.textContent = " ";
    caloriesConsumed.textContent = " ";

    return;
  }

  calories = calories + Number(calorieField.value);
  localStorage.setItem("calories", JSON.stringify(calories));

  foodArray.push(`${foodField.value}`);
  localStorage.setItem("food", JSON.stringify(foodArray));
  console.log(JSON.parse(localStorage.getItem("food")));

  foodField.value = "";
  calorieField.value = "";

  finalFood.textContent = foodArray.join(",");
  finalFood.style.backgroundColor = "green";
  finalFood.style.color = "white"
  finalCalories.textContent = `You ate ${calories} calories.`;
  finalCalories.style.backgroundColor = "green";
  finalCalories.style.color = "white";

  whatIAte.textContent = " ";
  caloriesConsumed.textContent = " ";

  emptyStomach.textContent = " ";

}

function ate() {
  whatIAte.textContent = JSON.parse(localStorage.getItem("food"));
  whatIAte.style.backgroundColor = "pink";
  whatIAte.style.color = "violet";

  caloriesConsumed.textContent = JSON.parse(localStorage.getItem("calories"));
  caloriesConsumed.style.backgroundColor = "pink";
  caloriesConsumed.style.color = "white";

  finalFood.textContent = " ";
  finalCalories.textContent = " ";
  emptyStomach.textContent = " ";
}

function reset() {
  localStorage.removeItem("food");
  localStorage.removeItem("calories");

  foodArray = [];
  calories = 0;

  finalFood.textContent = " ";
  finalCalories.textContent = " ";

  whatIAte.textContent = " ";
  caloriesConsumed.textContent = " ";

  emptyStomach.textContent = "You should eat something";
  emptyStomach.style.backgroundColor = "white";
  emptyStomach.style.color = "black";
}

function newDay() {
  localStorage.removeItem("food");
  localStorage.removeItem("calories");

  foodArray = [];
  calories = 0;

  emptyStomach.textContent = "It's a new day";

  localStorage.setItem("date", currentDate);
}

function updateInfoHref() {
  location.href = "updateInfo.html";
}