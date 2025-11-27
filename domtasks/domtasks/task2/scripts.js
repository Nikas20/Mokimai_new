"use strict";
const li = document.querySelectorAll("#todo-list li")
const button = document.querySelector("#highlight-btn")

button.addEventListener("click", () => {

    li.forEach(e => {
        e.style.color = "red"
    })
})