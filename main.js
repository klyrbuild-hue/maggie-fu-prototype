// Mobile nav
const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open'); links.classList.remove('open'); document.body.style.overflow = '';
  }));
}

// Nav: scrolled state + drop the "on-dark" transparency once past hero
const nav = document.querySelector('nav');
const startsDark = nav && nav.classList.contains('on-dark');
function onScroll() {
  if (!nav) return;
  const past = window.scrollY > 40;
  nav.classList.toggle('scrolled', past);
  if (startsDark) nav.classList.toggle('on-dark', !past);
}
window.addEventListener('scroll', onScroll);
onScroll();

// Active link
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a:not(.btn-book)').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), (i % 4) * 90);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade, .val, .rev').forEach(el => io.observe(el));

// Contact form
const form = document.querySelector('.form-card form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    document.querySelector('.success').style.display = 'block';
  });
}
