const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger.addEventListener('click', (e) => {
  console.log(e.target);

  navLinks.classList.toggle('show');
});
