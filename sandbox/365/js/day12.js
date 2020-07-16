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
let problemArr = [];


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
        problemArr.push();
        console.log(problemArr);
    } 
     
    // console.log(pressed);
    // return pressed;
    
}

// if you press enter then prevent default and do the math. 
// loop through what was pressed


window.addEventListener('click', handleClick);

