"use strict";
const div  = document.querySelector("#box")


div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "yellow"
})

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = ""
})