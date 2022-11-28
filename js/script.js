console.log("Saluton!");

let button = document.querySelector(".js-button");
let container = document.querySelector(".js-container");
let mainHeader = document.querySelector(".js-mainHeader");
let darkOrBright = document.querySelector(".js-darkOrBright");

button.addEventListener("click", () => {
    container.classList.toggle("container--darkMotive");
    button.classList.toggle("header__button--dark");
    mainHeader.classList.toggle("header__mainHeader--dark");
    darkOrBright.innerText = container.classList.contains("container--darkMotive") ? "jasny" : "ciemny";
});