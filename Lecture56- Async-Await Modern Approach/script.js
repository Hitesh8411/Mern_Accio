async function fetchOneTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }

    const data = await response.json();

    return {
      data: data,
      error: null,
    };

  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: err.message,
    };
  }
}



function f1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("F1 resolved");
      }, 2000); 
    });
  } 
    function f2() {
        return fetch(`https://fakestoreapi.com/products/1`);
    }

    function f3() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("F3 resolved");
          }, 1000); 
        });
    }