"use strict";

const input = document.querySelector("#item-input")
const button = document.querySelector("#add-item-btn")
const ul = document.querySelector("#items")

button.addEventListener("click", () => {
    const value = input.value
    const element = document.createElement("li")
    element.textContent = value

    ul.appendChild(element)
    input.value = "";
})