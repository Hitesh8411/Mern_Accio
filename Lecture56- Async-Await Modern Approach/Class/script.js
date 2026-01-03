async function fetchOneTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) throw new Error("Failed to fetch todo");

    const data = await response.json();
    return {
      data: data,
      error: null,
    };
  } catch (err) {
    console.log(err);
    return {
      error: err,
      data: null,
    };
  }
}

async function convertResponseToJson(response) {
  return await response.json();
}

async function fetchProduct(productId) {
  try {
    if (typeof productId !== "number" || productId < 0)
      throw new Error("invalid product id");

    const todoResponse = await fetchOneTodo();
    if (todoResponse.data) {
      console.log("Todo Response:", todoResponse.data);
    }

    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    if (!response.ok) throw new Error("Failed to fetch product details");

    console.log({ response });

    const data = await convertResponseToJson(response);

    if (!data) {
      throw new Error("unable to parse the data");
    }

    console.log({ data });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  } finally {
    console.log("this block will always execute");
  }
}

console.log("start");
fetchProduct(8);
console.log("end");

function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 1000ms");
    }, 1000);
  });
}

function f2() {
  return fetch(`https://fakestoreapi.com/products/1`);
}

async function f3() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

async function funcCallWithAsyncAwait() {
  try {
    /* include try catch in these functions also */
    let f1Response = await f1();
    let f2Response = await f2();
    let f3Response = await f3();
    console.log({ f1Response, f2Response, f3Response });
  } catch (err) {
    console.log(err);
  }
}

async function funcCallWithPromiseAllSettled() {
  const allResponse = await Promise.allSettled([f1(), f2(), f3()]);
  console.log({ allResponse });
}

funcCallWithAsyncAwait();
funcCallWithPromiseAllSettled();
