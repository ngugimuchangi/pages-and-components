// selectors
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNavOptions = document.querySelectorAll('.main-nav-option');

// states
const mediaQuery = window.matchMedia('(min-width: 768px)');

// handlers
/** Close any active menus */
function closeActiveMenus() {
  const secondaryMenus = document.querySelectorAll(
    'header .secondary-nav-options'
  );
  secondaryMenus.forEach((element) => {
    const display = getComputedStyle(element).display;
    if (display === 'block') {
      element.style.display = 'none';
      element.previousElementSibling.lastElementChild.style.transform =
        'rotate(360deg)';
      if (mediaQuery.matches) {
        element.previousElementSibling.firstElementChild.style[
          'border-bottom'
        ] = 'none';
        element.previousElementSibling.firstElementChild.style.color =
          'hsl(0, 0%, 100%)';
      } else
        element.previousElementSibling.firstElementChild.style.color =
          'hsl(240, 10%, 16%)';
    }
  });
}

/** Toggles main navigation options */
function toggleMainNavOptions() {
  const headerNavItems = document.querySelector('.header-nav-items');

  this.classList.toggle('hamburger-menu-close');
  if (!headerNavItems.style.display) headerNavItems.style.display = 'flex';
  else {
    headerNavItems.style.display = '';
    closeActiveMenus();
  }
}

/** Toggles secondary navigation options */
function toggleSecondaryNavOptions() {
  const mainMenuOption = this.firstElementChild;
  const icon = this.lastElementChild;
  const secondaryMenuOptions = this.nextElementSibling;

  if (getComputedStyle(secondaryMenuOptions).display === 'none') {
    icon.style.transform = 'rotate(180deg)';
    if (mediaQuery.matches) {
      mainMenuOption.style['border-bottom'] = '2px solid white';
    } else mainMenuOption.style.color = 'hsl(207, 13%, 34%)';
    closeActiveMenus();
    secondaryMenuOptions.style.display = 'block';
  } else {
    icon.style.transform = 'rotate(360deg)';
    if (!mediaQuery.matches) mainMenuOption.style.color = 'hsl(240, 10%, 16%)';
    else {
      mainMenuOption.style.color = 'hsl(0, 0%, 100%)';
      mainMenuOption.style['border-bottom'] = 'none';
    }
    secondaryMenuOptions.style.display = '';
  }
}
// events
window.addEventListener('DOMContentLoaded', () => {
  hamburgerMenu.addEventListener('click', toggleMainNavOptions);
  mainNavOptions.forEach((element) =>
    element.addEventListener('click', toggleSecondaryNavOptions)
  );
});
