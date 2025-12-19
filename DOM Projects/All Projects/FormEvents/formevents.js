document.getElementById("submitBtn").addEventListener("click", () => {

    // TEXT / EMAIL / PASSWORD / NUMBER / TEL / DATE / TIME / COLOR
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let time = document.getElementById("time").value;
    let favcolor = document.getElementById("favcolor").value;

    // FILE
    let file = document.getElementById("fileInput").files[0];

    // RADIO – GET SELECTED VALUE
    let gender = document.querySelector("input[name='gender']:checked")?.value;

    // let gender1 = document.querySelector("input[name = 'gender']:checked")?.value;

    // let gender2 = document.querySelector("input[name = 'gender']:checked")?.value;

    // let gender3 = document.querySelector("input[name ='gender']:checked")?.value;

    // CHECKBOX – GET MULTIPLE SELECTED VALUES
    // let hobbies = [];
    // document.querySelectorAll(".hobby:checked").forEach(h => {
    //     hobbies.push(h.value);
    // });


    // let hobbies = [];
    // document.querySelectorAll(".hobby:checked").forEach(h =>{
    //     hobbies.push(h.value);
    // });


    let hobbies = [];
    document.querySelectorAll(".hobby:checked").forEach(h =>{
        hobbies.push(h.value);
    });

    // SELECT DROPDOWN
    let country = document.getElementById("country").value;

    // TEXTAREA
    let address = document.getElementById("address").value;

    // RANGE
    let rating = document.getElementById("rating").value;

    // HIDDEN INPUT
    let userid = document.getElementById("userid").value;

    console.log("Full Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Age:", age);
    console.log("Phone:", phone);
    console.log("DOB:", dob);
    console.log("Time:", time);
    console.log("Favorite Color:", favcolor);
    console.log("File:", file);
    console.log("Gender:", gender);
    console.log("Hobbies:", hobbies);
    console.log("Country:", country);
    console.log("Address:", address);
    console.log("Rating:", rating);
    console.log("Hidden User ID:", userid);
});
