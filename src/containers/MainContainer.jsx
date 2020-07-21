import React, { Component } from 'react';
import { getAllRepos, getUserInfo } from '../services/gitHubApi';
import UserInput from '../components/userInput/UserInput';

export default class MainContainer extends Component {
  state = {
    gitHubProfile: '',
    info: '',
    repos: ''
  };

  handleChange = ({ target }) => {
    this.setState({ gitHubProfile: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { gitHubProfile } = this.state;
    Promise.all([
      getUserInfo(gitHubProfile),
      getAllRepos(gitHubProfile)
    ])
      .then(([info, repos]) => this.setState({ info, repos }));
  }

  render() {
    const { gitHubProfile, info, repos } = this.state;
    return (
      <div>
        <UserInput gitHubProfile={gitHubProfile} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        
      </div>
    );
  }
}

