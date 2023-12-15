console.clear();

const root = document.getElementById("root");

function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)} 80% 55%)`;
}

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor();
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(circle, square, pentagon);
