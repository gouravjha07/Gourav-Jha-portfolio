document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navbar Menu Toggle
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        // Icon change hamburger to cross
        const icon = menuBtn.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close mobile menu when clicking any nav link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.querySelector("i").className = "fa-solid fa-bars";
        });
    });

    // 2. Sticky Header Effects on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "12px 0";
            header.style.background = "rgba(10, 5, 20, 0.95)";
        } else {
            header.style.padding = "20px 0";
            header.style.background = "rgba(15, 12, 27, 0.8)";
        }
    });

    // 3. Skills Progress Animation Trigger using IntersectionObserver
    const progressSection = document.querySelector(".progress-area");
    const progressBars = document.querySelectorAll(".progress-bar");

    // Setting skill widths dynamic maps mapped from UI targets
    const skillTargets = {
        html: "95%",
        css: "90%",
        js: "80%"
    };

    const showProgress = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    // Extract custom class name to assign width targets
                    if (bar.classList.contains("html")) bar.style.width = skillTargets.html;
                    if (bar.classList.contains("css")) bar.style.width = skillTargets.css;
                    if (bar.classList.contains("js")) bar.style.width = skillTargets.js;
                });
                observer.unobserve(entry.target); // Trigger once
            }
        });
    };

    const progressObserver = new IntersectionObserver(showProgress, {
        threshold: 0.3
    });
 
    if (progressSection) {
        progressObserver.observe(progressSection);
    }
});