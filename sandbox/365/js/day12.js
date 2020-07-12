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

function displayNum(numOne){
    //disaply the clicked number in the input field
    let pressValue = numOne.value;
    console.log(pressValue);
    console.log('clicked one');
}

numOne.addEventListener('click', displayNum);

