"use strict";
const p = document.querySelector("#secret-text")
const button = document.querySelector("#toggle-text-btn")

button.addEventListener("click", () => {

    if (p.style.display != "none") {
        p.style.display = "none"
        button.innerHTML = "Show"
    } else {
        p.style.display = ""
        button.innerHTML = "Hide"
    }
})