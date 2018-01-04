const nav = document.querySelector('#main-nav');
const backdrop = document.querySelector('#modalBackdrop');

const modalContent = document.querySelector('#modalContent');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const cancel = document.querySelector('#cancel');



// modal community
const community = document.querySelector('#community');
const modalContent2 = document.querySelector('#modalContent2');
const modal2 = document.querySelector('#modal2');
const closeModal = document.querySelector('#closeModal');

let toggleNavClass = () => {
  nav.classList.toggle('show')
  // Add background Color
  backdrop.classList.toggle('modalBackdrop')
};
// Click Handler
Array.from(document.querySelectorAll('.navToggle')).map(el => el.addEventListener('click', toggleNavClass))


// modal 1
community.addEventListener('click', () => {
  modalContent2.classList.add('show2');
  modal2.classList.add('show3');
  nav.classList.remove('show');
  backdrop.classList.remove('modalBackdrop')

});

closeModal.addEventListener('click', () => {
  modal2.classList.add('show4');
  setTimeout(() => {
    modalContent2.classList.remove('show2');
    modal2.classList.remove('show3');
    modal2.classList.remove('show4');
  }, 300);

})


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


community.addEventListener('click', () => {

})
