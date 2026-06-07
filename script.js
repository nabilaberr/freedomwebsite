function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
}

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';

  const video = document.querySelector('.hero-video');
  if (video) {
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.play().catch(() => {});
  }
});
