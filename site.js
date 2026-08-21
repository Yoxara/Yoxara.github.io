document.getElementById('year').textContent = new Date().getFullYear();

// Subtle nav shadow once scrolled
const navEl = document.querySelector('.nav');
if (navEl) {
  const onNavScroll = () => {
    navEl.style.boxShadow = window.scrollY > 8 ? '0 4px 16px -8px rgba(28,43,61,.16)' : 'none';
  };
  window.addEventListener('scroll', onNavScroll, { passive: true });
  onNavScroll();
}

// Mobile menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
}

// Scroll-reveal (respects prefers-reduced-motion via CSS)
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
