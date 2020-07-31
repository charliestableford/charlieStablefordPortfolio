console.log('made it in here');

async function dribConnect(){

    let user = `charliestableford`;
    let accesstoken = ``;


    let endpoint = `https://api.dribbble.com/v1/${user}?access_token=OAUTH_TOKEN`;
}

{
    "access_token": "ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae",
    "token_type": "Bearer",
    "scope": "public",
    "created_at": 1596231192
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
