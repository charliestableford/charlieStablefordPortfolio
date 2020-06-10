console.log('day one');

const text = document.querySelector("#text");
let firstWord = text.value;
// find the input value
window.onload = function() {
  text.addEventListener("input", function() {
    firstWord = text.value;
    console.log(firstWord);
  });
 return firstWord;
}
    //split input value into a string
    let split = firstWord.split(',');
    console.log(split);

