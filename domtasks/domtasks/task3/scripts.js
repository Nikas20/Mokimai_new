"use strict";
const div  = document.querySelector("#page")
const button = document.querySelector("#toggle-theme-btn")

button.addEventListener("click", () => {

    div.classList.toggle("dark")
})