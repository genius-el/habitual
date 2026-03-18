"use strict";

// RELEVANT DOM REFERENCES
// Field References
const urgentAndImportantInput = document.getElementById("urgAndImpField");
const importantInput = document.getElementById("impField");
const urgentInput = document.getElementById("urgField");
const nilInput = document.getElementById("nilField");

// Button References
const urgentAndImportantBtn = document.getElementById("urgAndImpBtn");
const importantBtn = document.getElementById("impBtn");
const urgentBtn = document.getElementById("urgBtn");
const nilBtn = document.getElementById("nilBtn");

const clearAllBtn = document.getElementById("clearAllBtn");

// View Reference
const habitsList = document.getElementById("habits");

// Other Variables
// let habits = [];
// Replacing the let habits = [] to allow for user data storage
// Using Local Storage to read user data if it already exists

let habits;
const storedHabits = localStorage.getItem("habits");

if (storedHabits !== null) {
  habits = JSON.parse(storedHabits);
} else {
  habits = [];
}

let habit = {
  id: "",
  task: "",
  category: "",
};

// EVENT LISTENERS THE ADD BUTTON FOR EACH HABIT CATEGORY
urgentAndImportantBtn.addEventListener("click", function () {
  const urgentAndImportantInputValue = urgentAndImportantInput.value;
  console.log(urgentAndImportantInputValue);

  if (urgentAndImportantInputValue) {
    habit = {
      id: Date.now(),
      task: urgentAndImportantInputValue,
      category: "is Urgent and Important",
    };
    pushHabit();
  }
});

importantBtn.addEventListener("click", function () {
  const importantInputValue = importantInput.value;
  console.log(importantInputValue);

  if (importantInputValue) {
    habit = {
      id: Date.now(),
      task: importantInputValue,
      category: "is Important",
    };
    pushHabit();
  }
});

urgentBtn.addEventListener("click", function () {
  const urgentInputValue = urgentInput.value;
  console.log(urgentInputValue);

  if (urgentInputValue) {
    habit = {
      id: Date.now(),
      task: urgentInputValue,
      category: "is Urgent",
    };
    pushHabit();
  }
});

nilBtn.addEventListener("click", function () {
  const nilInputValue = nilInput.value;
  console.log(nilInputValue);

  if (nilInputValue) {
    habit = {
      id: Date.now(),
      task: nilInputValue,
      category: "is Not Urgent and Not Important",
    };
    pushHabit();
  }
});

// HabitsDisplay Function
const habitDisplay = function () {
  // saving user data to local storage
  localStorage.setItem("habits", JSON.stringify(habits)); // save first
  habitsList.innerHTML = "";

  habits.forEach((h) => {
    const li = document.createElement("li");
    li.style.marginTop = "-5px";
    li.innerHTML = `
        <span>${h.task} ${h.category}</span>
        <button class="delete-btn" onclick="habitDelete(${h.id})">Delete</button>`;

    habitsList.appendChild(li);
  });
};

// Habit Delete Functionality
const habitDelete = function (id) {
  habits = habits.filter((h) => {
    return h.id !== id;
  });

  habitDisplay();
};

// Push Habit to Array functionality
const pushHabit = function () {
  if (habits.length < 8) {
    habits.push(habit);
    habitDisplay();
  } else {
    alert("You have reached the maximum of 8 habits");
  }
};


// The Clear All Functionality
clearAllBtn.addEventListener("click", function () {
    habits = [];
    localStorage.removeItem("habits");
    habitDisplay();
});