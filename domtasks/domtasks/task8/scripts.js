"use strict";
const textarea  = document.querySelector("#message")
const span = document.querySelector("#char-count")

textarea.addEventListener("input", () => {
    span.textContent = textarea.value.length
})