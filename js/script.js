// Show details (fade toggle) for projects and experiences when clicked
// It toggles the <div> inside .project-card or .experience-card

document.querySelectorAll('.project-card, .experience-card').forEach(card => {
    card.addEventListener('click', () => {
        const hiddenDiv = card.querySelector('div[style*="display"]');
        if (hiddenDiv) {
            if (hiddenDiv.style.display === 'block') {
                hiddenDiv.style.opacity = '0';
                setTimeout(() => {
                    hiddenDiv.style.display = 'none';
                }, 300);
            } else {
                hiddenDiv.style.display = 'block';
                setTimeout(() => {
                    hiddenDiv.style.opacity = '1';
                }, 10);
            }
        }
    });
});

// Automatically close the menu on small screens when a link is clicked

document.querySelectorAll('nav.main-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const checkbox = document.getElementById('menu-toggle');
        if (checkbox && checkbox.checked) {
            checkbox.checked = false;
        }
    });
});

// Show alert confirmation message when contact form is submitted

const contactForm = document.querySelector('footer form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! Your message has been sent successfully.');
        e.target.reset();
    });
}

// Change greeting based on current time of day (morning/afternoon/evening)

window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const hour = new Date().getHours();
    if (intro) {
        if (hour < 12) {
            intro.textContent = "Good Morning, I'm";
        } else if (hour < 18) {
            intro.textContent = "Good Afternoon, I'm";
        } else {
            intro.textContent = "Good Evening, I'm";
        }
    }
});

// Enable smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Create a floating chat-style welcome message at bottom right
function showTemporaryBanner(message) {
    const banner = document.createElement('div');
    banner.textContent = message;

    // Basic styles
    banner.style.position = 'fixed';
    banner.style.bottom = '30px';
    banner.style.right = '30px';
    banner.style.maxWidth = '300px';
    banner.style.backgroundColor = '#e11a54';
    banner.style.color = 'white';
    banner.style.padding = '15px 20px';
    banner.style.borderRadius = '18px';
    banner.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    banner.style.fontWeight = '500';
    banner.style.zIndex = '9999';
    banner.style.opacity = '1';
    banner.style.transition = 'opacity 0.5s ease';

    // Optional animation (slide-in)
    banner.style.transform = 'translateY(20px)';
    banner.style.transition += ', transform 0.4s ease';

    document.body.appendChild(banner);

    // Animate in
    requestAnimationFrame(() => {
        banner.style.transform = 'translateY(0)';
    });

    // Hide after 4s
    setTimeout(() => {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(20px)';
        setTimeout(() => {
            banner.remove();
        }, 500);
    }, 4000);
}


// Show welcome banner 2 seconds after page load

setTimeout(() => {
    showTemporaryBanner('Welcome to my portfolio!');
}, 2000);

// Animate infinite horizontal scroll for the "My Works" slider

const sliderTrack = document.querySelector('.slider-track');
const sliderContainer = document.querySelector('.slider-container');

if (sliderTrack && sliderContainer) {
    // Duplicate content to create infinite effect
    sliderTrack.innerHTML += sliderTrack.innerHTML;

    let position = 0;
    const speed = 1; // Scrolling speed

    function animateSlider() {
        position -= speed;
        if (Math.abs(position) >= sliderTrack.scrollWidth / 2) {
            position = 0;
        }
        sliderTrack.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateSlider);
    }

    animateSlider();
}