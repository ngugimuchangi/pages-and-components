document.addEventListener('DOMContentLoaded', () => {
// ELEMENTS
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.main-nav');
  const columns = document.querySelectorAll('.col');
  const media = window.matchMedia('(min-width: 960px)');

  // FUNCTIONS
  /**
   * Toggle hamburger menu
   */
  function toggleMenu() {
    hamburgerMenu.classList.toggle('opened');
    menu.classList.toggle('visible');
    menu.classList.toggle('slide-out', !menu.classList.contains('visible'));
    if (hamburgerMenu.attributes['aria-expanded'].value === 'true') {
      hamburgerMenu.attributes['aria-expanded'].value = 'false';
      hamburgerMenu.attributes['aria-label'].value = 'Open the menu';
    } else {
      hamburgerMenu.attributes['aria-expanded'].value = 'true';
      hamburgerMenu.attributes['aria-label'].value = 'Close the menu';
    }
  }

  /**
   * Observe sections animate when it enters viewport
   * @param {object} entries
   */
  function animateOnScroll(entries) {
    entries.forEach((entry) => {
      if (!media.matches) this.unobserve(entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.toggle('slide', media.matches);
      }
    });
  }

  // OBSERVERS
  const columnObserver = new IntersectionObserver(animateOnScroll);
  columns.forEach((col) => columnObserver.observe(col));

  // EVENTS
  hamburgerMenu.addEventListener('click', toggleMenu);
  window.addEventListener('resize', () => {
    if (media.matches) menu.classList.remove('slide-out');
  });
});
