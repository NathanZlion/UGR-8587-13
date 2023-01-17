

let fullname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameError = document.getElementById("name_error");;
const emailError = document.querySelector("#email_error");
const passwordError = document.querySelector("#password_error");

const errorElement = document.querySelector("#error");
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
    let errorMessage = [];
    let passwordValue = password.value;
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";

    if (fullname.value == ""){
        errorMessage.push("Namefield Empty");
        nameError.innerText = "your name is required";
    }

    else if (String(fullname.value).split(" ").length < 2){
        errorMessage.push("Full name not entered");
        nameError.innerText = `Full name is required, "F.name L.name"`;
    }

    else if (email.value == "") {
        console.log("empty Email");
        errorMessage.push("Email field is required");
        emailError.innerText = "Email field is required";
    }

    else if (! validateEmail(email.value)) {
        errorMessage.push("Invalid Email Format");
        emailError.innerText = "Invalid Email Format";
    }

    else if (passwordValue.length < 8) {
        console.log("small password");
        errorMessage.push("Password must be atleast 8 characters long !");
        passwordError.innerText = "Password must be atleast 8 characters long !";
    }

    else if (passwordValue.search(/[a-z]/) < 0) {
        console.log("no lowercase password");
        errorMessage.push("Password must contain at least one lowercase letter")        ;
        passwordError.innerText = "Password must have at least one lowercase character.";
    }

    else if (passwordValue.search(/[A-Z]/) < 0) {
        console.log("no uppercase password");
        errorMessage.push("Password must contain at least one uppercase letter")                ;
        passwordError.innerText = "Password must have at least one uppercase character.";
    }

    else if (passwordValue.search(/[0-9]/) < 0) {
        errorMessage.push("Password must contain at least one number")                ;
        passwordError.innerText = "Password must be have at least one number";
    }

    // if there is an error dont submit
    if (errorMessage.length > 0) {
        console.log(errorMessage);
        e.preventDefault();
    }
    else {
        location.href = "signup-2.html";
    }
})


