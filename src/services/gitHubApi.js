export const getUserInfo = gitHubProfile => {
  return fetch(`https://api.github.com/users/${gitHubProfile}`)
    .then(res => res.json());
};

export const getAllRepos = gitHubProfile => {
  return fetch(`https://api.github.com/users/${gitHubProfile}/repos`)
    .then(res => res.json());
};

export const getPRs = (gitHubProfile, repoName) => {
  return fetch(`https://api.github.com/repos/${gitHubProfile}/${repoName}/pulls`)
    .then(res => res.json());
};
