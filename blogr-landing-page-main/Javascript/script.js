const dropdowns = document.querySelectorAll(".dropdown");
const containIcons = document.querySelector(".hamburger-close-container");
const menu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const closee = document.querySelector(".close");



dropdowns.forEach(dropdown => {
    const arrow = dropdown.querySelector(".dropdown-arrow");
    const toggle = dropdown.querySelector(".toggle");
    const subnav = dropdown.querySelector(".sub-list");


    toggle.addEventListener("click", () => {
        arrow.classList.toggle("rotate");
        subnav.classList.toggle("open");
    })
});

containIcons.addEventListener("click", () => {
    menu.classList.toggle("open");
    hamburger.classList.toggle("close");
    closee.classList.toggle("open");
});

