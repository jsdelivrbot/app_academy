import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id); //pulls id from url, passes it to fetchPost which makes backend request which returns data
  }

  render() {
    return <div>Show post { this.props.params.id }</div>;
  }
}

export default connect(null, { fetchPost })(PostsShow);
