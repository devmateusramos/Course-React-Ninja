'use strict';
import React, { Component } from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    };
  }

  getGithubApiUrl(username, type) {
    const internalUsername = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUsername}${internalType}`;
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.wich || e.keyCode;
    const ENTER = 13;
    const target = e.target;
    if (keyCode === ENTER) {
      target.disabled = true;
      ajax()
        .get(this.getGithubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
            repos: [],
            starred: [],
          });

          console.log(result);
        })
        .always(() => {
          target.disabled = false;
        });
    }
  }

  getRepos(type) {
    return (e) => {
      const username = this.state.userinfo.login;
      ajax()
        .get(this.getGithubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url,
            })),
          });
        });
    };
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
