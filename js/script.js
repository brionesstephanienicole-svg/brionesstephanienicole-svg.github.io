(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const roleNode = document.querySelector('#typed-role');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const roles = ['Information Technology Student', 'Web Developer', 'System Developer', 'UI/UX Enthusiast', 'Future Software Engineer'];

  document.querySelector('#year').textContent = new Date().getFullYear();
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  navAnchors.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchors.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  if (roleNode && reduceMotion) {
    roleNode.textContent = roles[0];
  } else if (roleNode) {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;
    const tick = () => {
      const current = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      roleNode.textContent = current.slice(0, charIndex);
      let delay = deleting ? 45 : 78;
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 360;
      } else if (charIndex >= roles[roleIndex].length) {
        deleting = true;
        delay = 1450;
      }
      window.setTimeout(tick, delay);
    };
    window.setTimeout(tick, 1500);
  }

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const recipient = 'stephanienicoleespinosabriones@gmail.com';
    const values = new FormData(form);
    const subject = encodeURIComponent(values.get('subject'));
    const body = encodeURIComponent(`Name: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`);
    status.textContent = 'Your email app should open with a draft. Review and send it there; this site does not transmit messages.';
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
})();
