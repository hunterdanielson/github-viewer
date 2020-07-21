import React, { Component } from 'react';
import { getAllRepos, getUserInfo } from '../services/gitHubApi';
import UserInput from '../components/userInput/UserInput';
import Display from '../components/display/Display';

export default class MainContainer extends Component {
  state = {
    gitHubProfile: '',
    name: '', 
    followers: '', 
    following: '', 
    html_url: '',
    repos: []
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
      .then(([{ name, followers, following, html_url }, repos]) => this.setState({ name, followers, following, html_url, repos }));
  }

  render() {
    const { gitHubProfile, name, followers, following, html_url, repos } = this.state;
    return (
      <div>
        <UserInput gitHubProfile={gitHubProfile} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Display name={name} followers={followers} following={following} html_url={html_url} repos={repos} />
      </div>
    );
  }
}

