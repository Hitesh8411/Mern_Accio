
const users = [];
const submitbtn = document.querySelector("button");

submitbtn.addEventListener("click", (event) => {
    event.preventDefault();

    const user = {};
    user.name = document.querySelector("input[type=text]").value;
    user.mobile = document.querySelector('input[type="number"]').value;
    user.gender = document.querySelector('input[name="gender"]:checked')?.value;

    user.isTncAgreed =document.querySelector("input[type=checkbox]")?.ariaChecked;

    user.city =document.querySelector("#city")?.value;

    if (!user.name || !user.number || !user.gender || !user.isTncAgreed || !user.city)

    alert ("Please  fill all the deatails");



    users.push(user);
    FormData.reset();
    console.log(users);
});


// how to make submit button  diseasble untill tnc is agreed
// email validation
// mobile validation 91 / no space

// prevent default
