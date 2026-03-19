// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check local storage or system preference
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
  root.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
} else {
  root.setAttribute('data-theme', 'light');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
