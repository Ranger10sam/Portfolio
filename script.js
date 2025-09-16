// --- CURSOR LIGHT EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
    const light = document.querySelector('.cursor-light');
    
    document.addEventListener('mousemove', (e) => {
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY}px`;
    });
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
