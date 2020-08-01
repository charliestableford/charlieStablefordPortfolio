console.log('made it in here');

async function dribConnect(){
    let accesstoken = `ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae`;

    let endpoint = `https://api.dribbble.com/v2/user/shots?access_token=${accesstoken}`;

    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
    //   displayDrib();
      displayDrib(json.message);
    //   console.log(json.html_url);
      console.log(json);
    } catch {
      console.log('Call failed');
    } 
}

function displayDrib(){
    console.log('in over here now');

    let ul = document.querySelector('#dribbbleShots');
    ul.innerHTML = `I got in there...`;
}



// {
//     "access_token": "ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae",
//     "token_type": "Bearer",
//     "scope": "public",
//     "created_at": 1596231192
// }

