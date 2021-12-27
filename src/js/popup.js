const priceButton = document.querySelector('.header__price');
const popup = document.querySelector('.popup');
const shadow = document.querySelector('.shadow');

priceButton.addEventListener('click', () => {
  document.body.classList.add('not-sroll');
  popup.classList.add('visible');
  shadow.classList.add('visible');
});

shadow.addEventListener('click', () => {
  document.body.classList.remove('not-sroll');
  popup.classList.remove('visible');
  shadow.classList.remove('visible');
});