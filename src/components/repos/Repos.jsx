import React from 'react';
import PropTypes from 'prop-types';
// import { getPRs } from '../../services/gitHubApi';

const Repos = ({ repos }) => (
  <>
    <h2>Repos</h2>
    <ul>
      {
        repos.map(repo => <li key={repo.id}>
          {repo.name}
          <ul>
            {/* {getPRs(gitHubProfile, repo.name)
              .map(pull => <li key={pull.id}>{pull.number}</li>)} */}
          </ul>
        </li>)
      }
    </ul>
  </>
);

Repos.propTypes = {
  // gitHubProfile: PropTypes.string.isRequired,
  repos: PropTypes.array
};

export default Repos;
