// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img style={{width:"100px"}} src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;