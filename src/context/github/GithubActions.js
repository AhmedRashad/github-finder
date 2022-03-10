import axios from "axios";
const GITHUB_URL = "https://api.github.com";

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await axios.get(`${GITHUB_URL}/search/users?${params}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    axios.get(`${GITHUB_URL}/users/${login}`),
    axios.get(`${GITHUB_URL}/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
