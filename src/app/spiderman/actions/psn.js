"use server";
import {
  exchangeNpssoForCode,
  exchangeCodeForAccessToken,
  getUserTitles,
  getTrophySummary,
  getProfileFromUserName,
  exchangeRefreshTokenForAuthTokens
} from "psn-api";

export async function fetchPsnGameData() {
  const myNpsso = "BsES7IXoqZDYQOvPY7OgCw29Z1pbP9c8AMEvkDjCYAtQVY6vb9kCpahQlEPFtLQC";

  try {
    // Exchange NPSSO for an access code
    const accessCode = await exchangeNpssoForCode(myNpsso);
    console.log("Access Code:", accessCode);

    // Use the access code to get the access token and refresh token
    let authorization = await exchangeCodeForAccessToken(accessCode);
    console.log("Authorization:", authorization);

    // Check if the access token is expired
    const now = new Date();
    const expirationDate = new Date(now.getTime() + authorization.expiresIn * 1000).toISOString();

    const isAccessTokenExpired = new Date(expirationDate).getTime() < now.getTime();

    if (isAccessTokenExpired) {
      console.log("Access token expired, refreshing...");
      // Refresh the token
      const updatedAuthorization = await exchangeRefreshTokenForAuthTokens(authorization.refreshToken);

      // Update the authorization object with the new tokens
      authorization = {
        ...authorization,
        accessToken: updatedAuthorization.accessToken,
        refreshToken: updatedAuthorization.refreshToken,
        expiresIn: updatedAuthorization.expiresIn
      };

      console.log("Updated Authorization:", authorization);
    }

    // Fetch a list of titles associated with the user
    const userProfile = await getProfileFromUserName(authorization, "aherms1391");
    console.log("User Profile:", userProfile);
    return userProfile;

  
    
  } catch (error) {
    console.error("Error fetching PSN game data:", error);
  }
  
}

// Call the function to initiate the process
fetchPsnGameData();
