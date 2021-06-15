const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const nav = document.getElementById('nav');
const red = document.getElementById('red');
const white = document.getElementById('white');

openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

function openNav() {
  nav.style.transform = 'translateX(0)';
  setTimeout(() => {
    red.style.transform = 'translateX(0)';
  }, 200);
  setTimeout(() => {
    white.style.transform = 'translateX(0)';
  }, 400);
}

function closeNav() {
  white.style.transform = '';
  setTimeout(() => {
    red.style.transform = '';
  }, 200);
  setTimeout(() => {
    nav.style.transform = '';
  }, 400);
  
}
