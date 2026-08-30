// Sticky Navigation

window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});/* ==========================================
   JKWI NAVIGATION
========================================== */

const jkwiNav = document.getElementById("jkwiNav");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function updateNavbar() {
    if (window.scrollY > 40) {
        jkwiNav.classList.add("scrolled");
    } else {
        jkwiNav.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* ==========================================
   MOBILE MENU
========================================== */

if (navToggle && navMenu) {

    navToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });

}


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        navToggle?.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});