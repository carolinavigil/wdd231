// nav.js - accessible nav toggle
const btn = document.getElementById('nav-toggle');
const nav = document.getElementById('primary-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded;
  });
}
