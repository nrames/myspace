import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PostForm extends Component {
  state = { post: { body: '' } };

  componentDidMount() {
    const match = this.props.match;

    if(match)
      axios.get(`/api/posts/${match.params.id}`)
        .then( res => {
          this.setState({ post: res.data });
        })
        .catch( err => {
          console.log(err);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let baseUrl = '/api/posts';
    const { id, body } = this.state.post;
    baseUrl = id ? `${baseUrl}/${id}` : baseUrl;
    const params = { post: { body } }

    if(id)
      axios.put(baseUrl, params)
        .then(res => {
          this.props.history.push(`/posts/${id}`);
        })
        .catch( err => {
          console.log(err);
      });
    else
      axios.post(baseUrl, params)
        .then(res => {
          this.setState({ post: { title: '' } });
          this.props.addPost(res.data);
        })
        .catch( err => {
          console.log(err);
      })
  }

  handleChange = (e) => {
    const { id, value } = e.target;

    this.setState({ post: {...this.state.post, [id]: value } })
  }

  cancelButton = () => {
    const { id } = this.state.post;

    if(id)
      return(<Button as={Link} to={`/post/${id}`}>Cancel</Button>)
  }

  render() {
    const { body } = this.state.post;

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input placeholder='Enter message here' value={body} id='body' onChange={this.handleChange} />
        
        { this.cancelButton() }
        <Button primary type='submit'>Post</Button>
      </Form>
    );
  }
}

export default PostForm;