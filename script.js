
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
    observer.observe(sec);
});
