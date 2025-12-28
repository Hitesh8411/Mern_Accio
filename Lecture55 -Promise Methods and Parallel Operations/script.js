/* 
- Promise.all([p1, p2, p3])
- Promise.race([p1, p2, p3])
- Promise.any([p1, p2, p3])
- Promise.allSettled([p1, p2, p3])
*/

/* 
https://fakestoreapi.com/products/1 
https://dummyjson.com/products/1
*/

function p1() {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => {
        console.log("fakestore API", response);
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}
function p2() {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products/1")
      .then((response) => {
        if (!response.ok) reject("Failed to call the API");
        console.log("dummyjson API", response);
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

// Promise.all([p1(), p2()])
//   .then((response) => console.log("Promise.all()", response))
//   .catch((error) => console.log("Promise.all()", error));

function p3() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

const p4 = Promise.reject("Dummy reject");
const p5 = Promise.reject("Dummy reject");
const p6 = Promise.reject("Dummy reject");
const p7 = Promise.reject("Dummy reject");
const p8 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Resolved after 5sec delay");
  }, 5000)
);

// Promise.race([p1(), p2(), p3(), p4])
//   .then((response) => {
//     console.log("Promise.race()", response);
//   })
//   .catch((err) => console.log("Promise.race()", err));

// Promise.any([p1(), p2(), p3(), p4])
//   .then((response) => {
//     console.log("Promise.any()", response);
//   })
//   .catch((error) => console.log("Promise.any()", error));

Promise.any([p4, p5, p6, p7])
  .then((response) => {
    console.log("Promise.any()", response);
  })
  .catch((error) => console.log("Promise.any()", error.errors)); //Promise.any() AggregateError: All promises were rejected

const fulflilled = [];
const rejected = [];

Promise.allSettled([p1(), p2(), p3(), p4, p5, p6, p7, p8])
  .then((results) => {
    console.log("Promise.allSettled()", results);

    results.forEach((result) => {
      if (result.status === "fulfilled") fulflilled.push(result.value);
      else rejected.push(result.reason);
    });
  })
  .finally(() => {
    console.log({ fulflilled });
    console.log({ rejected });
  });

function fetchFromAsiaServer() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved after 2sec");
    }, 2000)
  );
}
function fetchFromEUServer() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved after 3sec");
    }, 3000)
  );
}
function fetchFromUSServer() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved after 1sec");
    }, 1000)
  );
}

function fetchFromFastestServer() {
  return Promise.any([
    fetchFromAsiaServer(),
    fetchFromEUServer(),
    fetchFromUSServer(),
  ]);
}

fetchFromFastestServer()
  .then((response) => console.log("Promise.any()", response))
  .catch((error) => console.log("Promise.any()", error.errors));

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(`the api is taking longer than ${ms}ms`);
    }, ms);
  });
}

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_delay=2000");
}

function fetchPostsWithTimeout(ms) {
  return Promise.race([fetchPosts(), timeout(ms)]);
}

fetchPostsWithTimeout(150)
  .then((response) => {
    console.log("fetchPostsWithTimeout()", response);
  })
  .catch((error) => console.log("fetchPostsWithTimeout()", error));