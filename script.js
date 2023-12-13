const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 140)

})

const btnMenu = document.querySelector("#menu-icon")
const headerNav = document.querySelector(".header-navList")

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("bx-x")
    headerNav.classList.toggle("open")

})

window.addEventListener("click", (event) => {
    if (!headerNav.contains(event.target) && event.target !== btnMenu) {
        headerNav.classList.remove("open")
    }

})

