import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userResults, setUserResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle basic search by username
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const user = await fetchUserData(username);
      setUserResults([user]); // Wrap in array for consistent rendering
    } catch (err) {
      setError("Looks like we cant find the user");
      setUserResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle advanced search
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const users = await searchUsers(username, location, minRepos);
      if (users.length === 0) setError("No users found with these criteria");
      setUserResults(users);
    } catch (err) {
      setError("Search failed");
      setUserResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h2>

      {/* Basic Search Form */}
      <form onSubmit={handleBasicSearch} className="mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search User
        </button>
      </form>

      {/* Advanced Search Form */}
      <form onSubmit={handleAdvancedSearch} className="mb-6">
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Advanced Search
        </button>
      </form>

      {/* Loading / Error / Results */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {userResults.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="text-center font-bold mt-2">{user.name || user.login}</h3>
            <p className="text-center">{user.location || "Location not available"}</p>
            <p className="text-center">Repos: {user.public_repos || 0}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block text-center mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
