console.log("main works");

const hero = document.querySelector('.description');
const text = hero.querySelector('.bold');
const movement = 20; 

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * movement) - (movement / 2));
  const yWalk = Math.round((y / height * movement) - (movement / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(42,42,42,.2)
 
  `;

}

hero.addEventListener('mousemove', shadow);