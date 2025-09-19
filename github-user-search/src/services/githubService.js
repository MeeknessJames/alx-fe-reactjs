import axios from "axios";

// Advanced search using GitHub Search API
export const searchUsers = async (username, location, minRepos) => {
  try {
    // Construct the search query
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data.items; // returns an array of users
  } catch (error) {
    throw new Error("Search failed");
  }
};
