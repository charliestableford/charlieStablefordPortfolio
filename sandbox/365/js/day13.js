console.log('made it in here');

async function dribConnect(){
    let accesstoken = `ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae`;

    let endpoint = `https://api.dribbble.com/v2/user/shots?access_token=${accesstoken}`;

      const response = await fetch(endpoint)
      const data = await response.json();
    //   console.log(data);
     
    return data;
} 

function displayDrib(data){
    const shots = dribConnect();
    console.log(shots);

    console.log(data);
    let ul = document.querySelector('#dribbbleShots');
    // ul.innerHTML =
    // `<li class="shot" target="_blank" href="${data.html_url}">
    //     <div class="title">${data.title}</div>
    //     <img src="${data.images.hidpi}"/>
    // </li>`;
}



// {
//     "access_token": "ff934f4e1e26cbaeab48625792ac315bfba6e2678d7b2b2947c097b95bd2b7ae",
//     "token_type": "Bearer",
//     "scope": "public",
//     "created_at": 1596231192
// }

