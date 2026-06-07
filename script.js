document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('mainNav');
  const menuBtn = document.querySelector('.menu-toggle');
  const loader = document.getElementById('loader');
  const video = document.querySelector('.hero-video');
  const langBtn = document.querySelector('.lang-btn');
  const langMenu = document.getElementById('langMenu');

  // Mobile menu toggle
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
      if (langMenu) langMenu.style.display = 'none';
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (nav && menuBtn && nav.classList.contains('open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove('open');
    }
    if (langMenu && langBtn && !langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.style.display = 'none';
    }
  });

  // Language dropdown toggle
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
      if (nav) nav.classList.remove('open');
    });
  }

  // Hide loader
  if (loader) {
    window.addEventListener('load', function () {
      loader.style.display = 'none';
    });
  }

  // Auto-play video (safe)
  if (video) {
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    tryPlay();

    video.addEventListener('error', function () {});
  }
});
