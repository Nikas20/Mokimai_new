const buttons = document.querySelectorAll(".color-btn");
// const button2 = document.querySelector()
// const button3 = document.querySelector()
const div = document.querySelector("#color-box");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    div.style.backgroundColor = button.dataset.color;
  });
});
