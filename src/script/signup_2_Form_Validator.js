

const univesityName = document.getElementById("universityName");
const studyLevel = document.getElementById("studyLevel");
const numberOfYears = document.getElementById("numberOfYears");
const universityError = document.getElementById("university_error");
const studyLevelError = document.getElementById("studylevel_error");
const yearError = document.getElementById("year_error");

const errorElement = document.querySelector("#error");
const form = document.getElementById("form");


form.addEventListener('submit', (e) => {
    let errorMessage = [];
    studyLevelError.innerText = "";
    universityError.innerText = "";
    yearError.innerText = "";


    if (univesityName.value == "") {
        errorMessage.push("University Name can not be Empty.");
        universityError.innerText = "University Name can not be Empty.";
    }
    else if (studyLevel.value == "") {
        errorMessage.push("Please select Study level.");
        studyLevelError.innerText = "Study level is Required";
    }
    else if (parseInt(numberOfYears.value) < 1) {
        errorMessage.push("Years of Study can not be lessthan zero.")
        yearError.innerText = "Years of Study can not be lessthan zero.";
        numberOfYears.value = 5;
    }
    else if (parseInt(numberOfYears.value )> 15) {
        errorMessage.push("Years of Study can not exceed limit of 15 Years")
        yearError.innerText = "Years of Study can not exceed limit of 15 Years  .";
        numberOfYears.value = 5;
    }

    // if there is an error dont submit
    if (errorMessage.length > 0) {
        e.preventDefault();
        errorElement.innerText = errorMessage.join(`
        `);
        errorElement.classList.remove("display--none");
    } else {
        location.href = "signup-2.html";
    }
})


