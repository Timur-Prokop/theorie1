// Названия дней недели
const days = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
      
function updateTime() {
    const now = new Date();
    
    // Обновляем значения
    document.getElementById('day').textContent = days[now.getDay()];
    document.getElementById('hours').textContent = String(now.getHours()).padStart(2, '0');
    document.getElementById('minutes').textContent = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('seconds').textContent = String(now.getSeconds()).padStart(2, '0');
}

// Обновляем время сразу и затем каждую секунду
updateTime();
setInterval(updateTime, 1000);


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



// отправка фитбека
const sendBtn = document.getElementById("sendBtn");
    const input = document.getElementById("feedbackInput");
    const notification = document.getElementById("notification");

    const STORAGE_KEY = "lastMessageTime";

    sendBtn.addEventListener("click", () => {
      const lastSent = localStorage.getItem(STORAGE_KEY);
      const now = new Date().getTime();

      if (lastSent && now - lastSent <60 * 60 * 1000) {
        const remainingHours = Math.ceil((60 * 60 * 1000 - (now - lastSent)) / (60 * 60 * 1000));
        notification.textContent = `Bericht is al verzonden. Opnieuw verzenden is mogelijk over ${remainingHours} uur.`;
        notification.style.color = "#ff6666";
        return;
      }

      if (input.value.trim() === "") {
        notification.textContent = "Jij hebt niks geschreven.";
        notification.style.color = "#ffff66";
        return;
      }

      // Сохраняем время отправки
      localStorage.setItem(STORAGE_KEY, now.toString());
      notification.textContent = "Bericht is verzonden, bedankt voor jouw feedback!";
      notification.style.color = "#66ff66";

      // Очистить поле
      input.value = "";
    });


// server-test
async function getMessage() {
      const res = await fetch('/api/hello');
      const data = await res.json();
      alert(data.message);
    }


function anotherPage() {
      window.location.href = "log-in.html"; 
}

function infoPage() {
      window.location.href = "info.html"; 
}