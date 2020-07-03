console.log('day 11');

// goal: connect to scrabble dictionary API and unscrabble the word from an input to output a word that is in the dictionary or not

const input = document.querySelector('.input');
const unscramble = document.querySelector('.unscrambled');
const submit = document.querySelector('.submit');


async function getWord(e) {
    let inputValue = input.value;

    let endpoint = `https://api.dictionaryapi.dev/api/v1/entries/en/${inputValue}`;

    e.preventDefualt();
    
    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      displayQuote(json.message);
      console.log(json);
    } catch {
      console.log('Call failed');
    } 
  }


function displayQuote(quote) {

    // quote = document.querySelector('#quote').value;
      let quoteText = document.querySelector('#quote');
      quoteText.innerHTML = quote;
    }

submit.addEventListener('click', getWord());
  

