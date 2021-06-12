const navToggle = document.querySelector('.nav-toggle');
const containerLinks = document.querySelector('.links-container');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function () {
  const containerHeight = containerLinks.getBoundingClientRect().height;
  const linksHeight = navLinks.getBoundingClientRect().height;
  if (containerHeight === 0) {
    containerLinks.style.height = `${linksHeight}px`;
  } else containerLinks.style.height = 0;
});
// Back top and fixed nav bar

const navBar = document.getElementById('nav');
const backTop = document.querySelector('.btn-top-show');

window.addEventListener('scroll', function () {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight > 600) {
    backTop.classList.add('btn-top-hide');
  } else {
    backTop.classList.remove('btn-top-hide');
  }
});
