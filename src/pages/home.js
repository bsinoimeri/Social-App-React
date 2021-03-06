import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import Post from "../components/post/Post";
import Profile from '../components/profile/Profile';

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/postActions';

class home extends Component {

  componentDidMount() {
  this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;
    let recentPostsMarkup = !loading ? (
      posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );

    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentPostsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile/>
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(home);