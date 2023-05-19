// Selectors
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNavOptions = document.querySelectorAll('.main-nav-option');
const secondaryNavOptions = document.querySelectorAll(
  'header .secondary-nav-options',
);

// States
const mediumDevices = window.matchMedia('(min-width: 768px)');

// Handlers
/** Close any active menus header .secondary-nav-options:hover ~ div {
    color: red;
  } */
function closeActiveMenus() {
  const secondaryMenus = document.querySelectorAll(
    'header .secondary-nav-options',
  );
  secondaryMenus.forEach((element) => {
    const { display } = getComputedStyle(element);
    if (display === 'block') {
      element.style.display = 'none';
      element.previousElementSibling.lastElementChild.style.transform = 'rotate(360deg)';
      if (mediumDevices.matches) {
        element.previousElementSibling.firstElementChild.style[
          'border-bottom'
        ] = 'none';
        element.previousElementSibling.firstElementChild.style.color = 'hsl(0, 0%, 100%)';
      } else element.previousElementSibling.firstElementChild.style.color = 'hsl(240, 10%, 16%)';
    }
  });
}

/** Toggles main navigation options */
function toggleMainNavOptions() {
  const headerNavItems = document.querySelector('.header-nav-items');

  if (!('ontouchstart' in window) && mediumDevices.matches) return;
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

  if (!('ontouchstart' in window) && mediumDevices.matches) return;
  if (getComputedStyle(secondaryMenuOptions).display === 'none') {
    icon.style.transform = 'rotate(180deg)';
    if (mediumDevices.matches) {
      mainMenuOption.style['border-bottom'] = '2px solid white';
    } else mainMenuOption.style.color = 'hsl(207, 13%, 34%)';
    closeActiveMenus();
    secondaryMenuOptions.style.display = 'block';
  } else {
    icon.style.transform = 'rotate(360deg)';
    if (!mediumDevices.matches) mainMenuOption.style.color = 'hsl(240, 10%, 16%)';
    else {
      mainMenuOption.style.color = 'hsl(0, 0%, 100%)';
      mainMenuOption.style['border-bottom'] = 'none';
    }
    secondaryMenuOptions.style.display = '';
  }
}

/**
 * Underlines header main nav options when secondary options
 * are hovered and removes it when not hovered
 * @param {object} event - DOM event
 */
function regulateMainNavUnderlined(event) {
  const mainOptionDiv = this.parentElement.firstElementChild;
  const eventType = event.type;
  if (!mediumDevices.matches) return;
  if (eventType === 'mouseover') {
    mainOptionDiv.style.setProperty('--scale', 1);
    mainOptionDiv.lastElementChild.style.transform = 'rotate(180deg)';
  } else {
    mainOptionDiv.style.setProperty('--scale', 0);
    mainOptionDiv.lastElementChild.style.transform = 'rotate(360deg)';
  }
}

// Events
window.addEventListener('DOMContentLoaded', () => {
  hamburgerMenu.addEventListener('click', toggleMainNavOptions);
  mainNavOptions.forEach((element) => element.addEventListener('click', toggleSecondaryNavOptions));
  secondaryNavOptions.forEach((element) => {
    element.addEventListener('mouseover', regulateMainNavUnderlined);
  });
  secondaryNavOptions.forEach((element) => {
    element.addEventListener('mouseout', regulateMainNavUnderlined);
  });
});
