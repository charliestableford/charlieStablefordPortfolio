var client_id = '0e3f58d633e541118f6eb2be87b35789'; 
var redirect_uri = 'https://www.charliestableford.com';
var scopes = 'currently-playing';

var user_id='rachael.stableford';
var token = 'Bearer';
var endpoint=`https://api.spotify.com/v1/users/${user_id}/`



async function spotifyConnect(){

    let endpoint = ``;

      const response = await fetch(endpoint)
      const data = await response.json();
    //   console.log(data);
     
    return data;
} 


curl -H "Authorization: Basic MGUzZjU4ZDYzM2U1NDExMThmNmViMmJlODdiMzU3ODk6OWQzMmI5MDE2M2VlNDY5MTgxZjc5MjljOThjOTZmY2U=" -d grant_type=authorization_code -d code=MQCbtKe...44KN -d redirect_uri=https%3A%2F%2Fwww.charliestableford.com https://accounts.spotify.com/api/token

