import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setData(null);

    try {
      const result = await fetchUserData(username.trim());
      setData(result);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {data && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={data.avatar_url}
            alt="Avatar"
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <p>Name: {data.name || "No name provided"}</p>
          <p>Username: {data.login}</p> {/* ✅ Required: `login` */}
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
