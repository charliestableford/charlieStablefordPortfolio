console.log('made it in here');

async function dribConnect(){

    let user = `charliestableford`;
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
    //   console.log(json);
    } catch {
      console.log('Call failed');
    } 
}

function displayDrib(){
    console.log('in over here now');

    let ul = document.querySelector('#dribbbleShots');
    ul.innerHTML = `<li class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '">
    <div class="title">' + val.title + '</div>
    <img src="'+ val.images.hidpi +'"/></li>`;
}



// {
//     "access_token": "ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae",
//     "token_type": "Bearer",
//     "scope": "public",
//     "created_at": 1596231192
// }

