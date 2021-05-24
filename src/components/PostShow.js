import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends React.Component {
  componentDidMount(){
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h3>PostShow</h3>
      </div>
    );
  }
}

function mapStateToProps({ posts }){
  return{
    post: posts
  }
}

export default connect(mapStateToProps,{ fetchPost }(PostShow);
