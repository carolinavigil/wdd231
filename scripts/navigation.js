const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#primary-nav');


menuButton.addEventListener('click', () => {
const open = nav.getAttribute('data-state') === 'open';
nav.setAttribute('data-state', open ? 'closed' : 'open');
menuButton.setAttribute('aria-expanded', !open);
});