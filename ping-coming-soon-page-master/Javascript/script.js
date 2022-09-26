const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");


form.addEventListener("submit", (e) => {
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let messages = []
    if (email.value === "" || email.value == null) {
        messages.push("Whoops! It looks like you forgot to add your email");
        email.style.border = "2px solid hsl(354, 100%, 66%)";
    }

    if (email.value !== validEmail) {
        messages.push("Please provide a valid email address");
        email.style.border = "2px solid hsl(354, 100%, 66%)";
        errorElement.style.marginBottom = "2em";
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});