const tablinks = document.querySelectorAll(".menu__tab");
const tabcontent = document.querySelectorAll(".menu__items");
let target;
let data = {
    "pizza": "pizza-items",
    "pasta": "pasta-items",
    "bebida": "bebida-items",
    "postre": "postre-items"
}

tablinks.forEach((tablink, i) => {
    tablink.addEventListener("click", () => {
        target = tablink
        tablinks.forEach((tab, j) => {
            console.log(tabcontent[j]);
            tabcontent[j].classList.remove("menu__items-active");
            tab.classList.remove("menu__tab-active");
        });;
        document.getElementById(data[target.id]).classList.add("menu__items-active");
        target.classList.add("menu__tab-active");
    });
});
