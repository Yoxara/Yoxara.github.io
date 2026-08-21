const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
const nav = document.querySelector('.nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const updateNav = () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
};
const closeMenu = () => {
  if (!burger || !navLinks) return;
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open navigation menu');
};
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('in'));
}
