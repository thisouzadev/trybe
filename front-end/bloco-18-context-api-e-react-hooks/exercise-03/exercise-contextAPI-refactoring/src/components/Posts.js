import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context/Provider'

const Posts = ({ posts }) => (
  <Consumer>
    {
      ({ posts }) => (
        <ul>
          {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      )
    }
  </Consumer>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Posts;