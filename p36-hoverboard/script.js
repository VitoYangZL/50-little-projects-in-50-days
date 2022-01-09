const container = document.getElementById("container");
const colors = ["#655379", "#dbde79", "#315bf6", "#f8c0a5", "#5ac0a5"];
const SQUARES = 600;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px %{color} , 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#272727";
  element.style.boxShadow = `0 0 2px #black`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
