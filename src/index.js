import "./styles.css"

const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector(".menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open")
    menu.classList.toggle("collapsed")
})
