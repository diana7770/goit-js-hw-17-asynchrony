const input = document.getElementById("time");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const remodel = input.value * 1000;
  const showText = setTimeout(remodelText, remodel);
});

function remodelText() {
  if (input.value === "") {
    return;
  } else {
    alert(`Ви ввели ${input.value} секунди)`);
  }
}
