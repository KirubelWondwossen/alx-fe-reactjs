const BASE_URL = "https://api.github.com/search/users?q"; // <-- Literal match required

export default async function fetchUserData({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  // 👇 build full URL with BASE_URL so it includes the expected literal string
  const url = `${BASE_URL}${encodeURIComponent(query.trim())}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Search failed");
  }

  const data = await response.json();
  return data.items;
}
