const paraOne = document.querySelector('.abstractSix');
const paraTwo = document.querySelector('.abstractThree');
const paraThree = document.querySelector('.abstractFour');

window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset; // Support issues
  paraOne.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
  paraTwo.style.transform = 'translateY(' + (scrolled * .5 * -1) + 'px)';
  paraThree.style.transform = 'translateY(' + (scrolled * .5) + 'px)';
});