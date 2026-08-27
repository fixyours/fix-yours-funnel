// FixYours — shared site behaviour (mobile nav, scroll reveal). No heavy libraries.

document.addEventListener('DOMContentLoaded', function () {
  // Scroll reveal — with safety fallbacks so content is never stuck hidden
  var reveals = document.querySelectorAll('.reveal');
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window) || !reveals.length) {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var siblings = Array.prototype.slice.call(
            entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
          );
          var idx = siblings.indexOf(entry.target);
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, Math.max(idx, 0) * 70);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { observer.observe(el); });

    // Safety net: never leave content invisible (e.g. scripted full-page
    // capture tools, or an observer edge case) — force-reveal after 2.5s.
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
        el.classList.add('visible');
      });
    }, 2500);
  }

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  var closeBtn = document.querySelector('.mobile-close');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && menu) {
    closeBtn.addEventListener('click', function () {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
});
