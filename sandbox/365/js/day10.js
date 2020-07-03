console.log('solve');

const twitterButton = document.querySelector('#js-tweet');
const newQuoteButton = document.querySelector('#nextQuote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
  newQuoteButton.disabled = true;
    // e.preventDefault();
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.message);
    TweetBtn(json.message);
  } catch {
    console.log('Call failed');
  } finally {
    newQuoteButton.disabled = false;
  }
}

function displayQuote(quote) {

// quote = document.querySelector('#quote').value;
  let quoteText = document.querySelector('#quote');
  quoteText.innerHTML = quote;
}


function TweetBtn(quote) {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

getQuote();
