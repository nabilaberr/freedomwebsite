function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
}

function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('click', function(e) {
  const menu = document.getElementById('langMenu');
  const btn = document.querySelector('.lang-btn');
  if (menu && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const duration = 1800;
    const start = 0;
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

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
});
