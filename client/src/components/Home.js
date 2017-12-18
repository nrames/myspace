import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import ProfilePage from './ProfilePage';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Welcome to MySpace</Header>
        <ProfilePage />
      </div>  
    );
  }
}

export default Home;
