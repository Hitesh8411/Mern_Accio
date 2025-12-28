const imgEle = document.querySelector("img");
const ulEle = document.querySelector("ul");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((response) => {
    console.log(response);
    if (response.status === "error") {
      throw new Error(response.message);
    }
    imgEle.src = response.message;
  })
  .catch((error) => {
    console.error(error);
  });

const dummyPostData = {
  title: "This is a POST post",
  userId: 7,
};
fetch("https://dummyjson.com/posts/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(dummyPostData),
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

function fetchProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log({ response });
      if (!response.title) {
        throw new Error(response.message);
      }
      const liChildEle = document.createElement("li");
      liChildEle.textContent = response.title;
      ulEle.appendChild(liChildEle);
    })
    .catch((error) => console.error(error));
}
fetchProduct(1);
fetchProduct(2);
fetchProduct(3);

const productsContainerDiv = document.querySelector(".products");

function displayProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log({ response });
      if (!response.title) {
        throw new Error(response.message);
      }
      const productDivEle = document.createElement("div");
      productDivEle.classList.add("product");
      productDivEle.innerHTML = `<h2>${response.title}</h2>
        <h3>${response.brand}</h3>
        <p>${response.description}</p>
        <span>${response.price}</span>
        <img src=${response.images[0]} alt="loading the image" />`;
      productsContainerDiv.appendChild(productDivEle);
    })
    .catch((error) => console.error(error));
}
displayProduct(1);
displayProduct(2);
displayProduct(3);
displayProduct(4);