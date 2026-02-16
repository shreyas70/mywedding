// Initialize Animations
AOS.init({
    once: true,
    offset: 100,
    duration: 800,
    easing: 'ease-out-cubic',
});

// Countdown Timer
const weddingDate = new Date('February 26, 2026 09:00:00').getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Safety check for elements existing in DOM
    const daysEl = document.getElementById('days');
    if (daysEl) {
        daysEl.innerText = days < 10 ? `0${days}` : days;
        document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    }

    if (distance < 0) {
        // Stop the interval if passed
        if (typeof countdown !== 'undefined') clearInterval(countdown);
        const container = document.querySelector('.countdown-container');
        if (container) container.innerHTML = "<h2>It's Time!</h2>";
    }
};

// Update immediately on load
updateTimer();

// Update every second to maintain accuracy (even if we only show minutes)
const countdown = setInterval(updateTimer, 1000);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
