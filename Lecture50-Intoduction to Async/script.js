const buttonEle = document.querySelector("button");
const spanEle = document.querySelector("span");

buttonEle.addEventListener("click", (event) => {
  event.preventDefault();
  spanEle.textContent = "Welcome to the class";
  setTimeout(() => {
    spanEle.remove();
  }, 1000);
});

console.log("hello");
// alert("alerting");//blocking the JS main thread (JS worker)
console.log("world");

const startButton = document.querySelector("button:nth-of-type(2)");
const stopButton = document.querySelector("button:last-of-type");
const h1Ele = document.querySelector("h1");

let count = 0;
let timer = null;

startButton.addEventListener("click", () => {
  timer = setInterval(() => {
    count++;
    h1Ele.textContent = count;
  }, 1000);
});
stopButton.addEventListener("click", () => {
  console.log(timer);
  clearInterval(timer);
});
