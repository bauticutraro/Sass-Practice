const nav = document.querySelector('#main-nav');
const backdrop = document.querySelector('#modalBackdrop');

const modalContent = document.querySelector('#modalContent');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const cancel = document.querySelector('#cancel');
// features
const abilities = document.querySelector('#abilities');
const course = document.querySelector('#course');
const contributions = document.querySelector('#contributions');
const abilitiesContent = document.querySelector('#abilities-content');
const courseContent = document.querySelector('#course-content');
const contributionsContent = document.querySelector('#contributions-content');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');


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

// modal 2
// community.addEventListener('click', () => {
//   modalCommunity.classList.add('show2');
//   communityContent.classList.add('show3');
//   nav.classList.remove('show');
//   backdrop.classList.remove('modalBackdrop')
//
// });
//
// closeModal.addEventListener('click', () => {
//   modalCommunity.classList.add('show2');
//   communityContent.classList.add('show3');
//   nav.classList.remove('show');
//   backdrop.classList.remove('modalBackdrop')
//
// });


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

// features
abilities.addEventListener('click', () => {
  course.classList.remove('active');
  contributions.classList.remove('active');
  abilities.classList.add('active');

  courseContent.classList.remove('active');
  contributionsContent.classList.remove('active');
  abilitiesContent.classList.add('active');

  line2.classList.remove('line-active');
  line3.classList.remove('line-active');
  line1.classList.add('line-active');

});

course.addEventListener('click', () => {
  contributions.classList.remove('active');
  abilities.classList.remove('active');
  course.classList.add('active');

  contributionsContent.classList.remove('active');
  abilitiesContent.classList.remove('active');
  courseContent.classList.add('active');

  line1.classList.remove('line-active');
  line3.classList.remove('line-active');
  line2.classList.add('line-active');

});

contributions.addEventListener('click', () => {
  course.classList.remove('active');
  abilities.classList.remove('active');
  contributions.classList.add('active');

  courseContent.classList.remove('active');
  abilitiesContent.classList.remove('active');
  contributionsContent.classList.add('active');

  line2.classList.remove('line-active');
  line1.classList.remove('line-active');
  line3.classList.add('line-active');

});
