console.log('day 11');

// goal: connect to scrabble dictionary API and unscrabble the word from an input to output a word that is in the dictionary or not

const input = document.querySelector('.input');
const unscramble = document.querySelector('.unscrambled');
const submit = document.querySelector('.submit');

submit.addEventListener('click', function(e){
    e.preventDefault();

    let inputValue = input.value;
    console.log(inputValue);

});
