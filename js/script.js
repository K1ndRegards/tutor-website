// Toggle Mobile Menu
window.addEventListener('DOMContentLoaded', function () {
  const mobileNavigation = document.querySelector('.mobile-menu-list');
  const hamburgerMenu = document.querySelector('.mobile-menu-toggle');

  hamburgerMenu.addEventListener('click', function () {
    mobileNavigation.classList.toggle('active');
    // hamburgerMenu.classList.toggle('active');
  });
});

// Change navigation background on scroll
window.addEventListener('scroll', function () {
  const header = this.document.querySelector('.main-header');

  if (window.scrollY > 0) {
    header.classList.add('on-scroll');
  } else {
    header.classList.remove('on-scroll');
  }
});
