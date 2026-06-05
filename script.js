function toggleMenu(){
  document.getElementById('mainNav').classList.toggle('show');
}
function toggleLangMenu(){
  document.getElementById('langMenu').classList.toggle('show');
}
window.addEventListener('load',function(){
  const loader=document.getElementById('loader');
  if(loader) setTimeout(()=>loader.classList.add('hide'),500);
});
document.addEventListener('click',function(e){
  const nav=document.getElementById('mainNav');
  const lang=document.getElementById('langMenu');
  const dropdown=document.querySelector('.lang-dropdown');
  const menuBtn=document.querySelector('.menu-toggle');
  if(nav && menuBtn && !nav.contains(e.target) && !menuBtn.contains(e.target)) nav.classList.remove('show');
  if(dropdown && !dropdown.contains(e.target) && lang) lang.classList.remove('show');
});

function animateCounter(el){
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1800;
  const start = performance.now();

  function step(now){
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = new Intl.NumberFormat('en-US').format(value);
    if(progress < 1) requestAnimationFrame(step);
    else el.textContent = new Intl.NumberFormat('en-US').format(target);
  }

  requestAnimationFrame(step);
}

const counterSection = document.querySelector('.stats');
if(counterSection){
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        counters.forEach(animateCounter);
        observer.disconnect();
      }
    });
  }, { threshold: 0.35 });
  observer.observe(counterSection);
}

if (window.navigation && 'navigate' in window.navigation) {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(!a) return;
    const href = a.getAttribute('href');
    if(!href || href.startsWith('http') || href.startsWith('#')) return;
    e.preventDefault();
    window.navigation.navigate(href);
  });
}
