console.log('made it in here');

async function dribConnect(){

    let user = `charliestableford`;
    let accesstoken = ``;

    // reasons why the postman doesn't work?
    // email the dribbble folks.

    let endpoint = `https://api.dribbble.com/v1/${user}?access_token=OAUTH_TOKEN`;
}

// async function getWord(e) {
//     let inputValue = input.value;

//     let endpoint = `https://api.dictionaryapi.dev/api/v1/entries/en/${inputValue}`;

//     e.preventDefualt();
    
//     try {
//       const response = await fetch(endpoint)
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       const json = await response.json();
//       displayQuote(json.message);
//       console.log(json);
//     } catch {
//       console.log('Call failed');
//     } 
//   }
