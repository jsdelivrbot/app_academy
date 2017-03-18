import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id); //pulls id from url, passes it to fetchPost which makes backend request which returns data
  }

  render() {
    const { post } = this.props;
    //===const post = this.props.post;

    if(!post){
      return <div>Loading...</div>;
    }
    return (
      <div>Show post { this.props.params.id }
        <h3>{ post.title }</h3>
        <h6>Categories:{ post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{ post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
