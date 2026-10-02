const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.querySelector(".mobile-menu");


openMenu.addEventListener("click", function () {

    mobileMenu.classList.add("open");

});


closeMenu.addEventListener("click", function () {

    mobileMenu.classList.remove("open");

});


/* Close menu when a link is clicked */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("open");

    });

});


/* ================================
   ACTIVE SIDEBAR LINK
================================ */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".sidebar-nav a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================================
   PAGE LOAD
================================ */

window.addEventListener("load", function () {

    console.log(
        "Prachi Shirsath Portfolio Loaded"
    );

});

