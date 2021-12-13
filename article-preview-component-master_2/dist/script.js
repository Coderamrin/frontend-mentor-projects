const icon = document.querySelector('.fa-share');
const active = document.querySelector('.active');

icon.addEventListener('click', (e) => {
  active.style.display = 'flex';
  e.stopPropagation();
});

icon.addEventListener('click', (e) => {
  active.style.display = 'none';
  e.stopPropagation();
});
