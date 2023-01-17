


const submitProfileButton = document.getElementById("submit-profile-change");
const submitPasswordButton = document.getElementById("submit-password-change");
const submitGradingButton = document.getElementById("submit-grading-change");
const successMessage = document.getElementById("success-message");

const oldPassword = document.getElementById("oldPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");


const profileError = document.getElementById("profile-error");
const passwordError = document.getElementById("password-error");
const GradingError = document.getElementById("grading-error");
const fullname = document.getElementById("Name");
const email = document.getElementById("email");

const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

const validateProfileChange = () => {
    profileError.innerText = "";

    if (fullname.value == "") {
        profileError.innerText = "your name is required";
        fullname.focus();
        return false;
    }

    else if (String(fullname.value).split(" ").length < 2) {
        profileError.innerText = `Full name is required, ' F.name L.name'`;
        fullname.focus();
        return false;
    }
    else if (email.value == "") {
        profileError.innerText = `Email is required`;
        email.focus();
        return false;
    }
    else if (!validateEmail(email.value)) {
        profileError.innerText = "Invalid Email Format";
        email.focus();
        return false;
    }
    return true;
}

// profile change
submitProfileButton.addEventListener("click", () => {
    if (validateProfileChange()) {
        success();
    }
});

const validatePasswordChange = (e) => {
    passwordError.innerText = "";

    if (e.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters long !";
        return false;
    }

    else if (String(e).search(/[a-z]/) < 0) {
        passwordError.innerText = "Password must have at least one lowercase character.";
        return false;
    }

    else if (e.search(/[A-Z]/) < 0) {
        passwordError.innerText = "Password must have at least one uppercase character.";
        return false;
    }

    else if (e.search(/[0-9]/) < 0) {
        passwordError.innerText = "Password must be have at least one number";
        return false;
    }
    return true;
}


// password change
submitPasswordButton.addEventListener("click", () => {
    if (!validatePasswordChange(oldPassword.value)) {
        oldPassword.focus();
    } else if (!validatePasswordChange(newPassword.value)) {
        newPassword.focus();
    } else if (!validatePasswordChange(confirmPassword.value)) {
        confirmPassword.focus();
    } else if (confirmPassword.value != newPassword.value){
        passwordError.innerText = "Passwords don't match"
    }else {
        success();
    }
});

// grading system change
submitGradingButton.addEventListener("click", () => {

    

    success();
});

const success = ()=>{
    successMessage.classList.remove("hidden");
    successMessage.style.opacity = "1";
    setTimeout(function () {
        successMessage.style.opacity = "0";
        successMessage.classList.add("hidden");
    }, 2000);
}