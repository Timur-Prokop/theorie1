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
  
  
  
  
  
fetch('/profile')
        .then(res => {
            if (res.status === 401) {
              window.location.href = '/log-in.html';
            }
            return res.json();
        })
        .then(user => {

            fetch('/profile')
                .then(res => res.json())
                .then(user => {
                    document.getElementById('user-name').textContent = user.name;
                    document.getElementById('user-email').textContent = user.email;
                    console.log('User from server:', user);
                    document.getElementById('user-admin').textContent = user.isAdmin ? 'true' : 'false';
                    document.getElementById('user-paid').textContent = user.isPaid ? 'true' : 'false';

                    // Пример условного отображения контента
                    if (user.isPaid) {
                    // показываем дополнительную информацию
                    document.getElementById('premium-content').style.display = 'block';
                    } else {
                    document.getElementById('premium-content').style.display = 'none';
                    }
                });

        });

        function logout() {
        fetch('/logout')
            .then(() => window.location.href = '/');
        }







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

        
