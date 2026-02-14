// Hide loader on load
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000);
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Basic reveal animations logic
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        let scrollVal = window.scrollY;
        heroBg.style.transform = `scale(1.1) translateY(${scrollVal * 0.3}px)`;
    }
});

// Menu Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        menuItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 400);
            }
        });
    });
});

// Cart Logic
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');
document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
        btn.textContent = 'Added! ✓';
        btn.style.background = '#22c55e';
        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.style.background = 'var(--orange)';
        }, 2000);
    });
});
