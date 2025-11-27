"use strict";
const img = document.querySelector("#preview")
const button = document.querySelector("#change-img-btn")

button.addEventListener("click", () => {

    img.setAttribute("src", "/domtasks/task5/images/img2.jpg")
    img.setAttribute("alt", "Second image")
})
