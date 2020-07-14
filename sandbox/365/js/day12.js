console.log('in here');

const numOne = document.querySelector('.one');
const numTwo = document.querySelector('.two');
const numThree = document.querySelector('.three');
const numFour = document.querySelector('.four');
const numFive = document.querySelector('.five');
const numSix = document.querySelector('.six');
const numSeven = document.querySelector('.seven');
const numEight = document.querySelector('.eight');
const numNine = document.querySelector('.nine');
const numZero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');



let input = document.querySelector('.input');


function handleClick(e){
    // const clicked = e.currentTarget.value;
    // console.log(clicked);
    //display the clicked number in the input field
    let pressed = e.target.value;
    // console.log(pressed.minus);
    
    // console.log(input);
    if (pressed) {
        // console.log(`you pressed ${pressed}`);
        // console.log(input);
        input.value = `${pressed}`;   
          
    } 
    if (e.target.matches(minus)) {
        console.log('minus');
      }
     
    // console.log(pressed);
    // return pressed;
    
}

window.addEventListener('click', handleClick);

