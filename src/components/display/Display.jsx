import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, followers, following, html_url, repos }) => (
  <>
    <h1>{name}</h1>
    <p>Followers: {followers} / Following: {following}</p>
    <a href={html_url}>Profile Link</a>

    <h2>Repos</h2>
    <ul>
      {
        repos.map(repo => <li key={repo.id}>{repo.name}</li>)
      }
    </ul>
  </>
);

Display.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired,
  repos: PropTypes.array
};

export default Display;
