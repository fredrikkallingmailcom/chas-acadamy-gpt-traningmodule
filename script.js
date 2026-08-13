const heading = document.getElementById("heading");
const firstDescription = document.querySelector(".description");
const buttons = document.querySelectorAll(".btn");
const firstButton = document.querySelector(".btn");

const button = document.querySelectorAll(".themeButton");
const cardOne = document.querySelector(".cardOne");
const cardTwo = document.querySelector(".cardTwo");

button[0].addEventListener("click", () => {
    cardOne.classList.toggle("dark");
    cardTwo.classList.toggle("red");
});

button[1].addEventListener("click", () =>{
     cardOne.classList.toggle("dark");
    cardTwo.classList.toggle("red");   
});


const productLink