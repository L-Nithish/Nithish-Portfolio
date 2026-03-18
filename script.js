// ═══════════════════════════════════════════════
//   NITHISH KUMAR — PORTFOLIO JAVASCRIPT
//   File: script.js
// ═══════════════════════════════════════════════


// ── 1. NAVBAR — Add scrolled class on scroll ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ── 2. FADE-IN — Reveal sections as you scroll ──
const fadeElements = document.querySelectorAll('.fade');

const fadeObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

fadeElements.forEach(function (el) {
  fadeObserver.observe(el);
});


// ── 3. SMOOTH SCROLL — for nav links ──
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


// ── 4. ACTIVE NAV LINK — highlight based on scroll ──
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function () {
  let current = '';

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    link.style.color = '';
    const href = link.getAttribute('href').replace('#', '');
    if (href === current) {
      link.style.color = '#007aff';
    }
  });
});