import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Header,
  Card,
  Divider,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  state = { title: '' }

  posts = () => {
    const { posts } = this.props;
    let visible = posts;
    return visible.map( post =>
      <Card key={post.id}>
        <Card.Content>
          <Card.Header>
            {post.title}
          </Card.Header>
          <Card.Description>
            {post.body}
          </Card.Description>
          <Card.Content extra>
            <Link to={`/posts/${post.id}`}>
              View Post
            </Link>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }

const mapStateToProps = (state) => {
  const { posts } = state;
  return { posts }
  }
}

export default connect(mapStateToProps)(Posts);