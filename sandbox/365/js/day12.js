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

let input = document.querySelector('.input');


function displayNum(e){
    //display the clicked number in the input field
    let pressed = e.target.value;
    
    // console.log(input);
    if (pressed) {
        console.log(`you pressed ${pressed}`);
        // console.log(input);
        input.value = `${pressed}`;
    }

    
}

window.addEventListener('click', displayNum);

