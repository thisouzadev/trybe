import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context/Provider';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = () => (
  <Consumer>
  {({ selectedSubreddit, availableSubreddits, selectSubreddit }) => (
    <span>
      <h1>{`Selected: ${selectedSubreddit}`}</h1>
      <select
        onChange={(e) => selectSubreddit(e.target.value)}
        value={selectedSubreddit}
      >
        {renderOptions(availableSubreddits)}
      </select>
    </span>
  )}
  </Consumer>
);

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  value: PropTypes.string.isRequired,
};

export default Selector;