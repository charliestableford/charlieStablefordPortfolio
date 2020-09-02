const client_id = '0e3f58d633e541118f6eb2be87b35789'; 
const redirect_uri = 'https://www.charliestableford.com';

const user_id='rachael.stableford';
const token = 'Bearer';
const endpoint=`https://api.spotify.com/v1/users/${user_id}/currently-playing`



async function spotifyConnect(){

      const response = await fetch(endpoint)
      const data = await response.json();
    //   console.log(data);
     
    return data;
} 

// https://accounts.spotify.com/en/authorize?client_id=0e3f58d633e541118f6eb2be87b35789&response_type=code&redirect_uri=https:%2F%2Fwww.charliestableford.com&scope=user-read-currently-playing user-read-private user-read-email user-read-playback-state playlist-read-private

// var code = `AQB_8skYYq6G32zN1TfGgMIAfK5hJ1Km8OcgrGGSWU1ojdYpnh7ZZkAe-iiOdIJmQp79CetQ-5tQx9pOdiF87XcAT-UpMRNIHV1CWi_ux7ULE76NHyFraZTBh899BVzzQUr3Yuou8UoVTMBDHGURWrddf5_WCU06Cm0_ohG37v9ubltG08tbeKacYvNr6gxf-T_prW2X-X-8NU3dXktSqjefXUiLfNIT3qS_5y0Id0wT16OL2773vL_Ix9XEPfEGlM96uZgg_LnS1EWv2bGZl8i_g6VhKNhixgYiSIL5D89dXVz0dqvozcZ2pm_fA1mdTCl22CR4Ug`;

// curl -H "Authorization: Basic MGUzZjU4ZDYzM2U1NDExMThmNmViMmJlODdiMzU3ODk6OWQzMmI5MDE2M2VlNDY5MTgxZjc5MjljOThjOTZmY2U=" -d grant_type=authorization_code -d code=AQB_8skYYq6G32zN1TfGgMIAfK5hJ1Km8OcgrGGSWU1ojdYpnh7ZZkAe-iiOdIJmQp79CetQ-5tQx9pOdiF87XcAT-UpMRNIHV1CWi_ux7ULE76NHyFraZTBh899BVzzQUr3Yuou8UoVTMBDHGURWrddf5_WCU06Cm0_ohG37v9ubltG08tbeKacYvNr6gxf-T_prW2X-X-8NU3dXktSqjefXUiLfNIT3qS_5y0Id0wT16OL2773vL_Ix9XEPfEGlM96uZgg_LnS1EWv2bGZl8i_g6VhKNhixgYiSIL5D89dXVz0dqvozcZ2pm_fA1mdTCl22CR4Ug -d redirect_uri=https%3A%2F%2Fwww.charliestableford.com https://accounts.spotify.com/api/token

{
  "access_token": "BQDvPHA-p7V4Ueb6sDCqwC6ewDiNuyMn5rj6Dsu5TYqXayXAs0Z743lLJbBuigMnGwKuWgpMS6LOydgIC9nzVtFBn7TvYM9kECvCclmaD2SeMXf5FIW2rBbqSfqvBuNYuzFYkB_PEdR2B_8IQdPzrVLgColCohemCtq_7cFwAllnUh2hge21n_Hh-e6p",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQCr5bbhGVONjXMFM8t7hZbtJrH82x0tOre-Cm33NcP4eGHlOiE-vsV6ah3neMFrjDQEp9t0gO1D8N-VPBL7orQAbfHhGNfi5PbMhGh_plITDY9z5hdHy69In2qQK6aEn-Y",
  "scope": "playlist-read-private user-read-playback-state user-read-currently-playing user-read-email user-read-private"
}


// curl -H "Authorization: Bearer BQDvPHA-p7V4Ueb6sDCqwC6ewDiNuyMn5rj6Dsu5TYqXayXAs0Z743lLJbBuigMnGwKuWgpMS6LOydgIC9nzVtFBn7TvYM9kECvCclmaD2SeMXf5FIW2rBbqSfqvBuNYuzFYkB_PEdR2B_8IQdPzrVLgColCohemCtq_7cFwAllnUh2hge21n_Hh-e6p" https://api.spotify.com/v1/me
// steps for this: 

