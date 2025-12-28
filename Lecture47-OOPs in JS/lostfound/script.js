const form = document.querySelector('.first-page');
let listSection = document.createElement('div');
listSection.id = 'item-listSection';
document.body.appendChild(listSection);

window.addEventListener("DOMContentLoaded", loadItems);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const status = document.querySelector('input[name="status"]:checked').value;
    const nameInput = document.querySelector("#item-name");
    const descInput = document.querySelector("#item-description");
    const dateInput = document.querySelector("#date");
    const locationInput = document.querySelector("#location");
    const contact = document.querySelector("#contact");
    const photoUrl = document.querySelector("#photo-url");


    if (!status || !nameInput.value.trim()) {
        alert("Please select Lost/Found and enter the Item name");
        return;
    }

    const item = {
        status: status,
        name: nameInput.value,
        desc: descInput.value,
        date: dateInput.value,
        location: locationInput.value,
        contact: contact.value,
        photoUrl: photoUrl.value

    };

    if (item.status === "Found") {
        return removeMatchedItem(item.name);
    }
    addItem(item);
    form.reset();
});

function addItem(item) {
    let items = JSON.parse(localStorage.getItem("lostItems")) || [];
    items.push(item);
    localStorage.setItem("lostItems", JSON.stringify(items));

    const card = document.createElement("div");
    card.className = "item-card";
    card.dataset.name = item.name;

    card.innerHTML = `
        <h3>Name: ${item.name}</h3>
        <p>Description: ${item.desc}</p>
        <p>Status : <strong>${item.status}</strong></p>
        <p>Date: ${item.date}</p>
        <p>Location: ${item.location}</p>
        <p>Contact: ${item.contact}</p>
        ${item.photoUrl ? `<img src="${item.photoUrl}" alt="">` : ""}
    `;

    listSection.appendChild(card);

}

function loadItems() {
    const items = getAllItems();
    items.forEach(addItem);
}

function getAllItems() {
    return JSON.parse(localStorage.getItem("lostItems")) || [];
}

function removeMatchedItem(name) {
    const items = getAllItems();
    const index = items.findIndex(i => i.name.toLowerCase() === name.toLowerCase());

    if (index === -1) {
        alert("No matching lost item found!");
        return;
    }

    items.splice(index, 1);
    localStorage.setItem("lostItems", JSON.stringify(items));

    const cards = document.querySelectorAll(".item-card");
    cards.forEach(card => {
        if (card.dataset.name.toLowerCase() === name.toLowerCase()) {
            card.remove();
        }
    });

    alert("Item matched and removed!");
}
