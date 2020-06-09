console.log("main works");

const hero = document.querySelector('.description');
const text = hero.querySelector('.bold');
// how many pixels at it most should it be stretched
const movement = 20; 

function shadow(e){
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    // get the info about where the cursor is
    // this is only for the hero - think about making it for the body?
    // normalization - if we are hovering over the child make it consitent.
    let x = e.offsetX;
    let y = e.offsetY;

    // this is the thing you are listening on.
    console.log(this);

    if(this !== e.target){
        // if these are not the same them 
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //Math.round to make it shorter and confirm the above equation
    const xMove = Math.round((x / width * movement) - (movement /2));
    const yMove = Math.round((y / height * movement) - (movement /2));

    // sub in the above coordinates
    text.style.textShadow = `${xMove}px ${yMove}px 0 rgba(241, 59, 57, 0.75) `;

    // console.log(xMove, yMove);
    // console.log(x,y);
}

hero.addEventListener('mousemove', shadow);


// //parallax
// const abstractOne = document.querySelector('.abstractOne');
// const abstractTwo = document.querySelector('.abstractTwo');
// const abstractThree = document.querySelector('.abstractThree');
// const abstractFour = document.querySelector('.abstractFour');
// const abstractFive = document.querySelector('.abstractFive');
// const abstractSix = document.querySelector('.abstractSix');

// window.addEventListener('scroll', function(){
//     let value = window.scrollY;
//     console.log(value);

//     // abstractOne.style.top= value * 0.75+ 'px';
//     // abstractTwo.style.top= value * 1.5+ 'px';
//     // abstractThree.style.top= value * 0.15+ 'px';
//     // abstractFour.style.top= value * 0.5+ 'px';
//     // abstractFive.style.top= value * 0.8+ 'px';
//     abstractSix.style.top=value * 1.2 + 'px';
//     abstractSix.style.right=value*0.08 +'px';
// })