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
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('open');
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
