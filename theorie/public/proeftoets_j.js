function startTest() {
      window.location.href = 'test.html'; 
    }

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    // Открытие меню
    menuBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'flex';
    });

    // Закрытие меню
    closeBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    });

    // Закрытие при клике на ссылку
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
});