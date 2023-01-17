
const dropdownButton = document.querySelector(".dropdown-button");
const gridDropdownItemSettings = document.querySelector(".grid__item-settings");
const gridDropdownItemSignout = document.querySelector(".grid__item-signout");
const gridDropdownItemUsername = document.querySelector(".grid__item-username");

// grid__item-username
let dropdown = () => {
    console.log("clicked");
    gridDropdownItemSettings.classList.toggle("display--none");
    gridDropdownItemSignout.classList.toggle("display--none");
    // gridDropdownItemUsername.classList.toggle("display--none");
}

let dropdownRemove = () => {
    if (!("display--none" in gridDropdownItemSettings.classList)) {
        gridDropdownItemSettings.classList.add("display--none");
    }
    if (!("display--none" in gridDropdownItemSignout.classList)) {
        gridDropdownItemSignout.classList.add("display--none");
    }

}
