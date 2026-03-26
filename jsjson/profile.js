document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
});  
  
  
