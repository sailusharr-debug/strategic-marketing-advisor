/* ===========================================
   Sai Lu Sharr Website
=========================================== */

// Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Header shadow on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Fade-in animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".experience-card, .client-box, .service-card, .case-card, .library-card, .insight-card, .contact-card"

).forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});

console.log("Sai Lu Sharr Website Loaded");

