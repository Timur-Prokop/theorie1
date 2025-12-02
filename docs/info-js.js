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






// animation
const animatedElements = document.querySelectorAll('.fade-in-element');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Сбрасываем анимацию
        }
    });
}, { threshold: 0.4 });

animatedElements.forEach(el => observer.observe(el));


// function anotherPage() {
//       window.location.href = "log-in.html"; 
// }