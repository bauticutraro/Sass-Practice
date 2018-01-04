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
