import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInput.css';

const UserInput = ({ gitHubProfile, onChange, onSubmit }) => (
  <form className={styles.ShortForm} onSubmit={onSubmit}>
    <input type="text" value={gitHubProfile} onChange={onChange} />
    <button>Submit</button>
  </form>
);

UserInput.propTypes = {
  gitHubProfile: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UserInput;
