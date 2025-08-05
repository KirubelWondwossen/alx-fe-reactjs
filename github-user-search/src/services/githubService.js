const BASE_URL = "https://api.github.com/search/users";

export default async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`);

  if (!response.ok) {
    throw new Error("Search failed");
  }

  const data = await response.json();
  return data.items; // List of users
}
