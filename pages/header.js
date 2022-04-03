const burgerIcon = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const headerLogo = document.querySelector('.header__logo');
const buttonClose = document.querySelector('.header__button-close');

burgerIcon.addEventListener('click', () => {
  headerNav.classList.add('header__nav_open');
  headerLogo.classList.add('header__logo_hide');
});

buttonClose.addEventListener('click', () => {
  headerNav.classList.remove('header__nav_open');
  headerLogo.classList.remove('header__logo_hide');
});