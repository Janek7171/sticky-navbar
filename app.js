const navbar = document.querySelector('.navbar');
createMobileViewElements();
createDesktopViewElements();

function createMobileViewElements() {
  const bar1 = document.createElement('div');
  const bar2 = document.createElement('div');
  const bar3 = document.createElement('div');
  [bar1, bar2, bar3].forEach((bar) => {
    bar.classList.add('hamburgerMenu__bar');
  });

  const hamburgerMenu = document.createElement('div');
  hamburgerMenu.append(bar1, bar2, bar3);
  hamburgerMenu.classList.add('hamburgerMenu');

  const hamburgerMenuItems = document.querySelector('.navbar__menu');
  hamburgerMenuItems.classList.add('sideMenuSlide');

  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop', 'hidden');
  document.querySelector('.wrapper').prepend(backdrop);

  hamburgerMenu.addEventListener(
    'click',
    hideSideMenuHandler(hamburgerMenuItems, backdrop)
  );
  backdrop.addEventListener(
    'click',
    hideSideMenuHandler(hamburgerMenuItems, backdrop)
  );
  navbar.append(hamburgerMenu);
}

function hideSideMenuHandler(hamburgerMenuItems, backdrop) {
  return () => {
    hamburgerMenuItems.classList.toggle('sideMenuSlide');
    backdrop.classList.toggle('hidden');
  };
}

function createDesktopViewElements() {
  const navbarWrapper = document.createElement('div');
  navbarWrapper.classList.add('navbar_wrapper');
  navbarWrapper.append(navbar);

  const hero = document.querySelector('.hero');
  hero.after(navbarWrapper);
  const HERO_HEIGHT = hero.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= HERO_HEIGHT && !navbarIsFixed()) {
      navbar.classList.add('navbar_position_fixed');
    } else if (window.scrollY < HERO_HEIGHT && navbarIsFixed()) {
      navbar.classList.remove('navbar_position_fixed');
    }
  });
}

function navbarIsFixed() {
  return navbar.classList.contains('navbar_position_fixed');
}
