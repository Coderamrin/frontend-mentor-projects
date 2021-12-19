const cards = document.querySelectorAll('.card');
const imgs = document.querySelectorAll('.author-img');
const authorImages = document.querySelectorAll('.author-img');
const toggler = [...document.querySelector('.toggler').children];

toggler.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const index = e.target.classList.contains('next-card') ? 1 : -1;
    const activeQuote = document.querySelector('.card.active');
    const activeAuthor = document.querySelector('.author-img.active');

    let newIndex = [...cards].indexOf(activeQuote) + index;

    if (newIndex < 0) {
      newIndex = cards.length - 1;
    }
    if (newIndex >= cards.length) {
      newIndex = 0;
    }

    cards[newIndex].classList.add('active');
    imgs[newIndex].classList.add('active');
    activeQuote.classList.remove('active');
    activeAuthor.classList.remove('active');
  });
});
