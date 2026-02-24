/* =========================
   PORTFOLIO SCRIPT FINAL
   ========================= */

// ================= SOCIAL MEDIA CONFIG =================

// GANTI USERNAME DI SINI
const instagramUsername = "username_kamu";
const tiktokUsername = "username_kamu";

// Ambil semua tombol IG & TikTok
const instagramLinks = [
    document.getElementById("instagramHero"),
    document.getElementById("instagramLink"),
    document.getElementById("instagramFooter")
];

const tiktokLinks = [
    document.getElementById("tiktokHero"),
    document.getElementById("tiktokLink"),
    document.getElementById("tiktokFooter")
];

// ================= FUNCTION OPEN APP =================

function openInstagram(e) {
    e.preventDefault();

    const appLink = `instagram://user?username=${instagramUsername}`;
    const webLink = `https://instagram.com/${instagramUsername}`;

    window.location.href = appLink;

    setTimeout(() => {
        window.location.href = webLink;
    }, 1200);
}

function openTikTok(e) {
    e.preventDefault();

    const appLink = `snssdk1128://user/profile/${tiktokUsername}`;
    const webLink = `https://tiktok.com/@${tiktokUsername}`;

    window.location.href = appLink;

    setTimeout(() => {
        window.location.href = webLink;
    }, 1200);
}

// ================= CONNECT ALL BUTTONS =================

instagramLinks.forEach(link => {
    if (link) {
        link.addEventListener("click", openInstagram);
    }
});

tiktokLinks.forEach(link => {
    if (link) {
        link.addEventListener("click", openTikTok);
    }
});

// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 31, 68, 0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(10, 31, 68, 0.85)";
        navbar.style.boxShadow = "none";
    }
});

// ================= SMOOTH SCROLL ENHANCEMENT =================

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

// ================= SIMPLE SCROLL ANIMATION =================

const revealElements = document.querySelectorAll("section");

function revealOnScroll() {
    revealElements.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

// Set initial state
revealElements.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
