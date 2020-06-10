console.log('day one');

const text = document.querySelector("#searchInput");
const answer = document.querySelector(".answer");
// let firstWord = text.value;
// find the input value
 function palindrome() {
  let firstWord = text.value;
  console.log(firstWord);
     //split input value into a string, reverse and then join back
    let split = firstWord.split('').reverse().join('');
    console.log(split);

    if(firstWord===split){
        console.log('palindrome');
    } else {
        console.log('not a palindrome');
    }
    // set innerHTML to p.
    html = answer.innerHTML;

} 
searchInput.addEventListener("change", palindrome);
text.addEventListener("input", palindrome);
