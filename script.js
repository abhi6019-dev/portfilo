// Initialize Icons
lucide.createIcons();

// Smooth reveal for bento items
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.bento-item').forEach(item => {
    observer.observe(item);
});

// Subtle Mouse tracking for the glow
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
});
