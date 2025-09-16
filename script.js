// --- CURSOR LIGHT EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
    const light = document.querySelector('.cursor-light');
    
    // Only run the effect on devices that are not touch-based
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice()) {
        document.addEventListener('mousemove', (e) => {
            light.style.left = `${e.clientX}px`;
            light.style.top = `${e.clientY}px`;
        });
    } else {
        // Hide the cursor light on touch devices
        light.style.display = 'none';
    }
});

// --- SCROLL REVEAL ANIMATIONS ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1600,
            delay: 200,
            reset: false // Animations repeat only once
        });

        // Hero Section
        sr.reveal('.hero-title', { origin: 'top', delay: 400 });
        sr.reveal('.hero-subtitle', { delay: 500 });
        sr.reveal('.hero-links', { delay: 600 });
        sr.reveal('.hero-scroll-down', { origin: 'top', delay: 800 });

        // Other Sections
        sr.reveal('.section-title', { delay: 200 });
        sr.reveal('.experience-item', { interval: 200 });
        sr.reveal('.bento-card', { interval: 100 });
        sr.reveal('.contact-text', {});
        sr.reveal('.btn-large', { delay: 400 });

    } else {
        console.log('ScrollReveal is not loaded');
    }
});


// --- HAMBURGER MENU ---
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            navMenu.classList.remove('is-active');
        });
    });
});
