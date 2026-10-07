// ================================
// TYPING EFFECT
// ================================

const roles = [
    "AI/ML Developer",
    "Python Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

const typingText = document.querySelector(".hero h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        charIndex++;
        typingText.innerHTML =
            currentRole.substring(0, charIndex) +
            ' <span>|</span>';
    } else {
        charIndex--;
        typingText.innerHTML =
            currentRole.substring(0, charIndex) +
            ' <span>|</span>';
    }

    let speed = deleting ? 50 : 90;

    if (!deleting && charIndex === currentRole.length) {
        speed = 1300;
        deleting = true;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .certificate-card, .stat-box"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background =
            "rgba(3, 8, 18, 0.95)";
    } else {
        navbar.style.background =
            "rgba(5, 11, 24, 0.78)";
    }

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#55e6ff";
        }

    });

});


// ================================
// PROJECT CARD HOVER
// ================================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.transform =
            `perspective(800px)
             rotateX(${-(y - rect.height / 2) / 30}deg)
             rotateY(${(x - rect.width / 2) / 30}deg)
             translateY(-7px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});