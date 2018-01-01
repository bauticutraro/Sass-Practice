const nav = document.querySelector('#main-nav');
const backdrop = document.querySelector('#modalBackdrop');
const modalContent = document.querySelector('#modalContent');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const cancel = document.querySelector('#cancel');

let toggleNavClass = () => {
  nav.classList.toggle('show')
  // Add background Color
  backdrop.classList.toggle('modalBackdrop')
};
// Click Handler
Array.from(document.querySelectorAll('.navToggle')).map(el => el.addEventListener('click', toggleNavClass))


close.addEventListener('click', () => {
  modalContent.classList.add('show2');
  modal.classList.add('show3');
  nav.classList.remove('show');
  backdrop.classList.remove('modalBackdrop')

});

cancel.addEventListener('click', () => {
  modal.classList.add('show4');
  setTimeout(() => {
    modalContent.classList.remove('show2');
    modal.classList.remove('show3');
    modal.classList.remove('show4');
  }, 300);

})
