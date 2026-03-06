function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');

  if (!menuBtn || !mobileMenu || !closeBtn) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  });
}




