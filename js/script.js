// إظهار التفاصيل مع تأثير تدريجي للمشاريع والتجارب
document.querySelectorAll('.project-card, .experience-card').forEach(card => {
    card.addEventListener('click', () => {
        const p = card.querySelector('p');
        if (p) {
            if (p.style.display === 'block') {
                p.style.opacity = '0';
                setTimeout(() => {
                    p.style.display = 'none';
                }, 300);
            } else {
                p.style.display = 'block';
                setTimeout(() => {
                    p.style.opacity = '1';
                }, 10);
            }
        }
    });
});

// تحكم كامل بالقائمة في الشاشات الصغيرة
document.querySelectorAll('nav.main-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const checkbox = document.getElementById('menu-toggle');
        if (checkbox && checkbox.checked) {
            checkbox.checked = false;
        }
    });
});

// إظهار رسائل تنبيه مخصصة عند إرسال نموذج التواصل
document.querySelector('footer form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    e.target.reset();
});

// تغيير محتوى الصفحة بناءً على الوقت (صباح الخير، مساء الخير)
window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const hour = new Date().getHours();
    if (hour < 12) {
        intro.textContent = "Good Morning, I'm";
    } else if (hour < 18) {
        intro.textContent = "Good Afternoon, I'm";
    } else {
        intro.textContent = "Good Evening, I'm";
    }
});

// أزرار تمرير سلس (Smooth Scroll) لجميع الروابط التي تبدأ بـ #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// إظهار شريط تنبيه مؤقت في أعلى الصفحة
function showTemporaryBanner(message) {
    const banner = document.createElement('div');
    banner.textContent = message;
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#e11a54';
    banner.style.color = 'white';
    banner.style.padding = '10px';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '9999';
    banner.style.fontWeight = 'bold';
    document.body.appendChild(banner);

    setTimeout(() => {
        banner.style.opacity = '0';
        setTimeout(() => {
            banner.remove();
        }, 500);
    }, 3000);
}

// مثال: إظهار شريط التنبيه بعد ثانيتين من تحميل الصفحة
setTimeout(() => {
    showTemporaryBanner('Welcome to my portfolio!');
}, 2000);
const sliderTrack = document.querySelector('.slider-track');
const sliderContainer = document.querySelector('.slider-container');

// استنساخ الصور لخلق تأثير لا نهائي
sliderTrack.innerHTML += sliderTrack.innerHTML;

let position = 0;
const speed = 1; // سرعة الحركة - يمكنك تعديلها

function animateSlider() {
    position -= speed;
    if (Math.abs(position) >= sliderTrack.scrollWidth / 2) {
        position = 0;
    }
    sliderTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateSlider);
}

animateSlider();
