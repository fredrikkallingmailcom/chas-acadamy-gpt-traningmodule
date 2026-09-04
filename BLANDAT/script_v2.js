
const loader = document.getElementById("loader");

const taskList = document.getElementById("tasklistLi");

const userInfo = document.querySelector(".userInfo");

userInfo.textContent 
const paragraphs = userInfo.querySelectorAll("p");

let currentParagraph = paragraphs[0];

for (let i = 0; i < paragraphs.length; i++) {
    const li = document.createElement("li");
    const removeButton = document.createElement("button");

    li.textContent = currentParagraph.textContent;
    li.classList.add("task-li");

    removeButton.textContent = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);

    currentParagraph = currentParagraph.nextElementSibling;
}

const nameElement = document.getElementById("name");
const mailElement = document.getElementById("mail");
const highlightButton = document.getElementById("highlightButton");

let current = nameElement;

current.classList.add("highlight");

highlightButton.addEventListener("click", () => {
    current.classList.remove("highlight");

    if (current === mailElement) {
        current = nameElement;
    } else {
        current = current.nextElementSibling;
    }

    current.classList.add("highlight");
});

// ---------------------
// TODO LIST
// ---------------------

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("add");
const highlightButton = document.getElementById("highlightButton");

highlightButton.addEventListener("click", () => {

});

const taskListToDo = document.getElementById("tasklist");

let counter = 0;

addButton.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    if (counter >= 10) {
        return;
    }

    const newLi = document.createElement("li");
    const removeButton = document.createElement("button");

    newLi.textContent = text;
    newLi.classList.add("task-li");

    removeButton.textContent = "Ta bort";
    removeButton.type = "button";

    removeButton.addEventListener("click", () => {
        newLi.remove();
        counter--;
    });

    newLi.appendChild(removeButton);

    taskListToDo.appendChild(newLi);

    counter++;

    taskInput.value = "";
});
