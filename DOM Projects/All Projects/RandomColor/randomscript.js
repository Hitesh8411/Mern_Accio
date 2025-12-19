let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let div = document.querySelector(".style"); //.div
  let color = randomColor();
  h3.innerText = color;
  div.style.backgroundColor = color;
});

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
