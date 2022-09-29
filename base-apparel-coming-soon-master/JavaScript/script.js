const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const errorMessage = document.getElementById("error-message");


form.addEventListener("submit", (e) => {
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let messages = []
    // if (email.value === "" || email.value == null) {
    //     messages.push("Whoops! It looks like you forgot to add your email");
    //     email.style.border = "2px solid hsl(354, 100%, 66%)";
    // }

    if (email.value !== validEmail) {
        messages.push("Please provide a valid email");
        email.style.border = "2px solid hsl(0, 93%, 68%)";
        errorElement.style.display = "block";
        errorMessage.style.height = "4vh";
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorMessage.innerText = messages.join(", ");
    }
});