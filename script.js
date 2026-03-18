'use strict';

// RELEVANT DOM REFERENCES
// Field References
const urgentAndImportantInput = document.getElementById('urgAndImpField');
const importantInput = document.getElementById('impField');
const urgentInput = document.getElementById('urgField');
const nilInput = document.getElementById('nilField');

// Button References
const urgentAndImportantBtn = document.getElementById('urgAndImpBtn');
const importantBtn = document.getElementById('impBtn');
const urgentBtn = document.getElementById('urgBtn');
const nilBtn = document.getElementById('nilBtn');

// View Reference
const habitsList = document.getElementById('habits');

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
    id: '',
    task: '',
    category: '',
};

// EVENT LISTENERS THE ADD BUTTON FOR EACH HABIT CATEGORY
urgentAndImportantBtn.addEventListener('click', function() {
    const urgentAndImportantInputValue = urgentAndImportantInput.value;
    console.log(urgentAndImportantInputValue);

    if (urgentAndImportantInputValue) {
        habit = {
            id: Date.now(),
            task: urgentAndImportantInputValue,
            category: 'is Urgent and Important'
        };
        habits.push(habit);
        console.log(habits);
        habitDisplay();
    }
    // Saving user data 
    localStorage.setItem("habits", JSON.stringify(habits));
});

importantBtn.addEventListener('click', function() {
    const importantInputValue = importantInput.value;
    console.log(importantInputValue);

    if (importantInputValue) {
            habit = {
                id: Date.now(),
                task: importantInputValue,
                category: 'is Important'
            }
            habits.push(habit);
            console.log(habits);
            habitDisplay();
    }


});

urgentBtn.addEventListener('click', function() {
    const urgentInputValue = urgentInput.value;
    console.log(urgentInputValue);

    if (urgentInputValue) {
            habit = {
                id: Date.now(),
                task: urgentInputValue,
                category: 'is Urgent',
            }
            habits.push(habit);
            console.log(habits);
            habitDisplay();
    }

});

nilBtn.addEventListener('click', function() {
    const nilInputValue = nilInput.value;
    console.log(nilInputValue);

    if (nilInputValue) {
            habit = {
                id: Date.now(),
                task: nilInputValue,
                category: 'is Not Urgent and Not Important'
            }
            habits.push(habit);
            console.log(habits);
            habitDisplay();
    }

});

// HabitsDisplay Function
const habitDisplay = function() {
    // saving user data to local storage
    localStorage.setItem("habits", JSON.stringify(habits)); // save first
    habitsList.innerHTML = "";

    habits.forEach((h) => {
        const li = document.createElement('li');
        li.style.marginTop = '-5px';
        li.innerHTML = `
        <span>${h.task} ${h.category}</span>
        <button class="delete-btn" onclick="habitDelete(${h.id})">Delete</button>`

        habitsList.appendChild(li);
    })
}

// Habit Delete Functionality
const habitDelete = function(id) {
    habits = habits.filter((h) => {
        return h.id !== id
    })

    habitDisplay();
}
















































// Display Habits Function
// const habitDisplay = function () {
//     habitsList.innerHTML = " ";

//     habits.forEach((h) => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <span>${h.task} ${h.category}</span>
//             <button class="delete-btn" onclick="deleteHabit(${h.id})">Delete</button>
//             `;

//         habitsList.appendChild(li);
//     })
// }
