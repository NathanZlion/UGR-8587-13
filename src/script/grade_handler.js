

const gpa = document.querySelector("#gpa");
const cgpa = document.querySelector("#cgpa");
const year = document.querySelectorAll(".year");
const addGradeButton = document.querySelector(".add-grade_button");
const coureNameError = document.querySelector("#name_error");
const creditError = document.querySelector("#credit_error");
const gradeError = document.querySelector("#grade_error");


const toggleYearSelection = (e) => {
    year.forEach(element => {
        element.classList.remove("selected");
    });
    e.classList.toggle("selected");
}

let tableSize = 0;

addGradeButton.addEventListener("click", () => {
    let courseName = document.querySelector(".newCourseName");
    let creditHours = document.querySelector(".newCreditHours");
    let _grade = document.querySelector(".newGrade");
    let grade = document.querySelector(".newGrade").value;

    let tableNode = document.querySelector("table tbody");
    let valid_input = () => {
        coureNameError.innerText = "";
        creditError.innerText = "";
        gradeError.innerText = "";

        if (courseName.value == "") {
            coureNameError.innerText = "Course name is required.";
            courseName.focus();
            return false;
        }

        if (creditHours.value == "") {
            creditError.innerText = "Credit hours is required.";
            creditHours.focus();
            return false;
        }

        if (creditHours.value < 0) {
            creditError.innerText = "credit hours must be positive."; 
            creditHours.focus();
            return false;
        }

        if (_grade.value == "") {
            gradeError.innerText = "Grade is required";
            _grade.focus();
            return false;
        }

        return true
    }

    if (valid_input()) {
        coureNameError.innerText = "";
        creditError.innerText = "";
        gradeError.innerText = "";

        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td> ${tableSize + 1} </td>
                        <td> ${courseName.value} </td>
                        <td> ${creditHours.value} </td>
                        <td> ${grade} </td>`

        tableNode.appendChild(newRow);

        tableSize++;

        courseName.value = "";
        creditHours.value = "";
        _grade.value = "";
    }
})