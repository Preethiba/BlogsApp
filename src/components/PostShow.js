import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    const { post } = this.props;
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostShow);
