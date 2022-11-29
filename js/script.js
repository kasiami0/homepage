{
    const welcome = () => {
        console.log("Saluton!");
    };

    const button = document.querySelector(".js-button");

    const onChangeMotiveClick = () => {
        const container = document.querySelector(".js-container");
        const mainHeader = document.querySelector(".js-mainHeader");
        const darkOrBright = document.querySelector(".js-darkOrBright");

        container.classList.toggle("container--darkMotive");
        button.classList.toggle("header__button--dark");
        mainHeader.classList.toggle("header__mainHeader--dark");
        darkOrBright.innerText = container.classList.contains("container--darkMotive") ? "jasny" : "ciemny";
    };

    const init = () => {
        button.addEventListener("click", onChangeMotiveClick);
        welcome();
    };
    
    init();
}
