import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`, // optional, only needed for authenticated requests
    },
  });

  return response.data;
}

export default fetchUserData;
