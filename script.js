/* =========================================
   Freedom Recycling
   Main JavaScript
========================================= */

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.classList.toggle('open');
}

// Toggle language dropdown
function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  if (!menu) return;
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Close language dropdown when clicking outside
window.addEventListener('click', function (e) {
  const menu = document.getElementById('langMenu');
  const btn = document.querySelector('.lang-btn');
  if (menu && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// Hide loader when page is loaded
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

// Animated counters
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    if (!target || isNaN(target)) return;

    const duration = 1800;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      counter.textContent = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

// Optional: smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
