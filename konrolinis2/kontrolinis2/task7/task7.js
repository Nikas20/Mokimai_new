const input = document.querySelector("#input");

const select = document.querySelector("#select");

const button = document.querySelector("#button");

const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

button.addEventListener("click", () => {
  const val = input.value;
  const opt = select.value;

  if (opt == 0) {
    // F = (C * 9/5) + 32
    fahrenheit.innerHTML = `${(val * 9) / 5 + 32}° Fahrenheit`;

    celsius.innerHTML = `${val}° Celsius`;
  }
  if (opt == 1) {
    // C = (F - 32) * 5/9
    celsius.innerHTML = `${((val - 32) * 5) / 9}° Celsius`;

    fahrenheit.innerHTML = `${val}° Fahrenheit`;
  }
});
