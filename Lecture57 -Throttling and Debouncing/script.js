// resize, scroll,
// events such as scroll , resize that trigger comtinously when  a user rezies the window or scrolls the page.
// Scroll and resize are continuous events that fire repeatedly during user interaction, so throttling or debouncing is used to improve performance.

// Continuous triggering causes repeated execution of handlers, leading to performance and responsiveness issues if not optimized.

// Throttling vs Debouncing
// Throttling → run every fixed interval
// Debouncing → run only after user stops

// Throttling limits the execution of a function to once per specified time interval, even if the event occurs multiple times.
// we are limiting the no of function calls not event trigger. ( throttling)


// 📌 What is Debouncing?

// Debouncing ensures that a function runs only after a certain time has passed since the last event.

// // 👉 If the event keeps happening, the function keeps waiting.

// window.addEventListener("scroll",() => {
//     console.log("scrolled")
// });

// throttle im[plement using global variable]

// function handleScroll() {
//     console.log("Scrolling throttled");
// }
// let isAllowed = true;

// function throttle(delay) {
//     if (!isAllowed)
//         return;
//     handleScroll();
//     isAllowed = false ;
//     setTimeout(() =>     {
//         isAllowed = true;
//     },delay);
// }

// window.addEventListener("scroll",() => {
//     throttle(1000);
// });

/*
throttling implemented using closures
 */

// function throttled(fn,delay) {
//     let isAllowed = true;
//     return function () {
//     if (!isAllowed)
//         return;
//     fn();
//     isAllowed = false;
//     setTimeout (() => {
//         isAllowed =true;
//     },delay);
//     };
// }

// // Original scroll handler
// function handleScroll() {
//     console.log("Scroll event handled");
// }

// const  throttleScroll = throttled(handleScroll,1000);
// window.addEventListener("scroll",throttleScroll);

// // Throttling implemented using closures
// function throttled(fn, delay) {

//     // Flag stored in closure to control execution
//     let isAllowed = true;

//     // Return the throttled version of the function
//     return function () {

//         // If function is not allowed, exit immediately
//         if (!isAllowed) return;

//         // Call the original function
//         fn();

//         // Block further calls
//         isAllowed = false;

//         // Re-allow execution after the delay
//         setTimeout(() => {
//             isAllowed = true;
//         }, delay);
//     };
// }

// // Original scroll handler
// function handleScroll() {
//     console.log("Scroll event handled");
// }

// // Create throttled scroll handler (runs once every 1000ms)
// const throttleScroll = throttled(handleScroll, 1000);

// // Attach throttled function to scroll event
// window.addEventListener("scroll", throttleScroll);

// Autosave after evry 2s

// what is debouncing ?
// Debouncing ensures that a function is only executed after a specified period of inactivity,
// preventing it from being called multiple times in quick succession.

// 📌 What is Debouncing?

// Debouncing ensures that a function runs only after a certain time has passed since the last event.

// // 👉 If the event keeps happening, the function keeps waiting.

// simple definition → it makes sure that a function is only called once after a certain amount of time has passed since it was last called.
// Debouncing delays function execution until the triggering event stops for a specified time.

/*Timeline of Debouncing with delay =3s
below is the timeline when user has triggred the event
( t =0 ) ->  ( t=2) -> ( t= 4) -> ( t=8) -> stops trgiggering at all

at ( t=7) and ( t=11) -- the function will be called
*/

function debounce(fn, delay) {
  let timerId = null;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timerId);
    }, delay);
  };
}

function saveInput() {
  console.log("Something typed");
}

const debouncedSaveInput = debounce(saveInput, 3000);

const input = document.querySelector("input");
input.addEventListener("input", () => {
  debouncedSaveInput();
});

/* Use interacted at ( t= 0)
-> fn has entered the macrotask queue (MTQ) and will be executed at t=3
user interacted at ( t=2)
-> clearTimeout will remove this function from macrotask queue , as this fn() is not executed yet and fn() will again enter MTQ and will be executed at t =5
user intracted at ( t =4)
 - > clearTimeout will remove this function from macrotask queue
 and fun () will again
 */

 //autosave project