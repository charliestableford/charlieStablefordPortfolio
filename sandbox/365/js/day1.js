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
        // set innerHTML to p.
        answer.innerHTML = "palindrome";
        console.log('palindrome');
    } else {
        answer.innerHTML = "not a palindrome";
        console.log('not a palindrome');
    }
} 
text.addEventListener("change", palindrome);
text.addEventListener("input", palindrome);
