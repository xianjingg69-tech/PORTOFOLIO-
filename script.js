// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================= NAVBAR EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15,12,41,0.9)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(15,12,41,0.6)";
        navbar.style.boxShadow = "none";
    }
});

// ================= REVEAL ANIMATION =================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ================= INSTAGRAM & TIKTOK =================
document.querySelectorAll("[data-social]").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        const username = this.dataset.username;
        const platform = this.dataset.social;

        if (platform === "instagram") {

            const appLink = `instagram://user?username=lukman_akh`;
            const webLink = `https://instagram.com/lukman_akh`;

            window.location.href = appLink;

            setTimeout(() => {
                window.location.href = webLink;
            }, 1200);
        }

        if (platform === "tiktok") {

            const appLink = `snssdk1128://user/profile/${username}`;
            const webLink = `https://tiktok.com/@lukman_akh`;

            window.location.href = appLink;

            setTimeout(() => {
                window.location.href = webLink;
            }, 1200);
        }
    });
    // ================= TYPING EFFECT =================
document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.querySelector(".typing-text");

    const text = "Lukman Al Khakim"; // Ganti sesuai nama kamu
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        }
    }

    typeEffect();
    
    });
    // ================= REVEAL FROM BOTTOM =================
document.addEventListener("DOMContentLoaded", function () {

    const revealUpElements = document.querySelectorAll(".reveal-up");

    const revealUpObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });

    revealUpElements.forEach(el => {
        revealUpObserver.observe(el);
        }
    }

});
