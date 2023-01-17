

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const form = document.getElementById("form");

const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let errorMessage = [];

    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    if (fullname.value == "") {
        errorMessage.push("Namefield Empty");
        nameError.innerText = "your name is required";
    }

    else if (String(fullname.value).split(" ").length < 2) {
        errorMessage.push("Full name not entered");
        nameError.innerText = `Full name is required, "F.name L.name"`;
    }

    else if (email.value == "") {
        errorMessage.push("Email field is required");
        emailError.innerText = "Email field is required";
    }

    else if (!validateEmail(email.value)) {
        errorMessage.push("Invalid Email Format");
        emailError.innerText = "Invalid Email Format";
    }

    else if (message.value == "") {
        errorMessage.push("Message is Required");
        messageError.innerText = "Message is required";
    }

    // if there is an error dont submit
    if (errorMessage.length > 0) {
        e.preventDefault();
    }
    else {
        location.href = "index.html"
    }
})


