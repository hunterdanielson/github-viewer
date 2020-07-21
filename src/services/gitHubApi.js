export const getUserInfo = gitHubProfile => {
  return fetch(`https://api.github.com/users/${gitHubProfile}`)
    .then(res => res.json())
    .then(data => data);
};

export const getAllRepos = gitHubProfile => {
  return fetch(`https://api.github.com/users/${gitHubProfile}`)
    .then(res => res.json())
    .then(data => console.log(data));
};
