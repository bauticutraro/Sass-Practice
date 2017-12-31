const nav = document.querySelector('#main-nav');
const backdrop = document.querySelector('#modalBackdrop');
let toggleNavClass = () => {
  nav.classList.toggle('show')
  // Add background Color
  backdrop.classList.toggle('modalBackdrop')
};
// Click Handler
Array.from(document.querySelectorAll('.navToggle')).map(el => el.addEventListener('click', toggleNavClass))
