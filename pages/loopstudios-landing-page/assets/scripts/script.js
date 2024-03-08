const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.header__nav');
let resizeTimer;

// Toggles mobile menu
navToggle.addEventListener('click', () => {
  const menuOpened = navToggle.getAttribute('aria-expanded') === 'true';
  if (menuOpened) {
    navToggle.setAttribute('aria-expanded', 'false');
  } else {
    navToggle.setAttribute('aria-expanded', 'true');
  }
});

// Stops animation on resize
window.addEventListener('resize', () => {
  mainNav.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    mainNav.classList.remove('resize-animation-stopper');
    clearTimeout(resizeTimer);
  }, 400);
});
