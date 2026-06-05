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