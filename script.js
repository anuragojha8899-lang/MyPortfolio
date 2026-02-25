document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const themeIcon = themeBtn.querySelector('i');

    themeBtn.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    });

    // Clear Typewriter Effect
    const words = ["Python Projects", "Interactive UI", "AI Solutions"];
    let i = 0, j = 0, isDeleting = false;
    const target = document.querySelector('.typewriter');

    function type() {
        const current = words[i];
        target.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
        if (!isDeleting && j === current.length + 1) { isDeleting = true; setTimeout(type, 1500); }
        else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % words.length; setTimeout(type, 500); }
        else { setTimeout(type, isDeleting ? 40 : 100); }
    }
    type();

    // Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});