import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PostFeed from './PostFeed';
import PostForm from './PostForm';

class ProfilePage extends Component {
render() {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Header as='h3' textAlign='center'>Profile</Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h3' textAlign='center'>Friends</Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h3' textAlign='center'>Posts</Header>
          <PostForm />          
          <PostFeed />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  }
}

export default ProfilePage;
