const errorOne = document.getElementById("error1");
const errorTwo = document.getElementById("error2");
const errorThree = document.getElementById("error3");
const errorFour = document.getElementById("error4");
const form = document.getElementById("form");
const email = document.getElementById("email");
const firstName = document.getElementById("Firstname");
const lastName = document.getElementById("Lastname");
const password = document.getElementById("password");
const btn = document.getElementById("submit");


form.addEventListener("submit", (e) => {
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let messages = []
    if (email.value === "" || email.value == null) {
        messages.push("Looks like this is not an email");
        email.style.border = "2px solid hsl(354, 100%, 66%)";
        errorThree.style.height = "3vh";
    }

    if (email.value !== validEmail) {
        messages.push("Looks like this is not an email");
        email.style.border = "2px solid hsl(354, 100%, 66%)";
        errorThree.style.marginBottom = "2em";
    }

    if (firstName.value === "" || firstName.value == null) {
        messages.push("First Name cannot be empty");
        errorOne.style.height = "3vh";
    }

    if (lastName.value === "" || lastName.value == null) {
        messages.push("Last Name cannot be empty");
        errorTwo.style.height = "3vh";
    }

    if (password.value === "" || password.value == null) {
        messages.push("Password cannot be empty");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});


