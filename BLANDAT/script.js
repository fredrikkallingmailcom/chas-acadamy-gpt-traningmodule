const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("add");
const taskList = document.getElementById("tasklist");
let counter = 0;

addButton.addEventListener("click", () => {
    if (taskInput.value.trim() !== "" && counter < 10) {
        counter++;
        const newLi = document.createElement("li");
        const removeButton = document.createElement("button");
        const icon = document.createElement("img");

        newLi.textContent = counter + ". " + taskInput.value;
        newLi.classList.add("task-li");

        removeButton.textContent = "Ta bort"
        removeButton.type = "button";

        icon.src = "image.png";
        icon.classList.add("task-icon");

        removeButton.addEventListener("click", () => {
            newLi.remove();
        });

        newLi.appendChild(removeButton);
        newLi.appendChild(icon);
        taskList.appendChild(newLi);

        taskInput.value = "";
    }
});

const name = document.getElementById("name");
const age = document.getElementById("age");
const city = document.getElementById("city");
const mail = document.getElementById("mail");
const highlightButton = document.getElementById("highlightButton");

highlightButton.addEventListener("click", () => {
    const nextName = name.nextElementSibling;
    const nextAge = age.nextElementSibling;
    const nextCity = city.nextElementSibling;
    const nextMail = mail.nextElementSibling;

    const state = 0;

    if (state === 0) {
        nextName.classList.add("highlight");
    } else if (state === 1) {
        nextAge.classList.add("highlight");
    } else if (state === 2) {
        nextCity.classList.add("highlight");
    } else if (state === 3) {
        nextMail.classList.add("highlight");
    }

    if(state === 3){
       state = 0; 
    }else {
        state++;
    }
});