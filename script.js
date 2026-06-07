document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('mainNav');
  const menuBtn = document.querySelector('.menu-toggle');
  const loader = document.getElementById('loader');
  const video = document.querySelector('.hero-video');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (!nav || !menuBtn) return;
    if (nav.classList.contains('open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  if (loader) {
    window.addEventListener('load', function () {
      loader.style.display = 'none';
    });
  }

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

    video.addEventListener('ended', function () {
      this.currentTime = 0;
      tryPlay();
    });
  }
});
