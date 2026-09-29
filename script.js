/* =========================================
   EMMA BAUSCH — WEBSITE JAVASCRIPT
   ========================================= */


/*
 * Automatically updates the copyright year.
 */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/*
 * Adds a small active-state effect to navigation links
 * as the user scrolls through the page.
 */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

const observerOptions = {
    root: null,
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) {
            return;
        }

        navLinks.forEach((link) => {
            link.classList.remove("active");
        });

        const activeLink = document.querySelector(
            `.nav a[href="#${entry.target.id}"]`
        );

        if (activeLink) {
            activeLink.classList.add("active");
        }

    });

}, observerOptions);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


/*
 * Prevents the navigation from jumping instantly
 * on browsers where smooth scrolling is unavailable.
 */
navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetID = link.getAttribute("href");

        if (!targetID || !targetID.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetID);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
