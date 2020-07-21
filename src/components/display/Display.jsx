import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, followers, following, html_url }) => (
  <>
    <h1>{name}</h1>
    <p>Followers: {followers} / Following: {following}</p>
    <a href={html_url}>Link</a>
  </>
);

Display.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired
};

export default Display;
