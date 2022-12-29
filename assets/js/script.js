const $ = document;
const wrapper = $.querySelector(".wrapper");
const selectBtn = $.querySelector(".select-btn");
const selectBtnText = $.querySelector(".select-btn>span");
const content = $.querySelector(".content");
const searchInput = $.querySelector("input");
const optionList = $.querySelector(".options");

let countries = [
    "Afghanistan",
    "Algeria",
    "Argentina",
    "Australia",
    "Bangladesh",
    "Belgium",
    "Bhutan",
    "Brazil",
    "Canada",
    "China",
    "Denmark",
    "Ethiopia",
    "Finland",
    "France",
    "Germany",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Italy",
    "Japan",
    "Malaysia",
    "Maldives",
    "Mexico",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Russia",
    "Romania",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United States",
    "United Kingdom",
    "Vietnam",
];

function loadCountries() {
    optionList.innerHTML = "";
    countries.forEach((country) => {
        createItem(optionList, country);
    });
}

function updateName(elem) {
    selectBtnText.innerHTML = elem.innerHTML;
    searchInput.value = "";
    wrapper.classList.remove("active");
    loadCountries();
    for (let option of optionList.children) {
        if (option.innerHTML === elem.innerHTML) {
            option.classList.add("selected");
        } else {
            option.classList.remove("selected");
        }
    }
}

function createItem(parent, item) {
    parent.insertAdjacentHTML("beforeend", `<li onclick="updateName(this)">${item}</li>`);
}

searchInput.addEventListener("keyup", () => {
    let inputVlaue = searchInput.value.toLowerCase();
    optionList.innerHTML = "";
    let resultValue = countries.filter((country) => country.toLowerCase().startsWith(inputVlaue));

    !resultValue || resultValue.length !== 0
        ? resultValue.forEach((item) => createItem(optionList, item))
        : (optionList.innerHTML = '<p class="not-found">Oops! Country Not Found</p>');
});

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});

window.addEventListener("load", loadCountries);
