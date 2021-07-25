import './App.css';
import colors from './data'
import React, { Component } from 'react'


export default class App extends Component {
  constructor({
    super();
    this.state = {

    };
  }

  render() {
    return (
    <div>
      <input type="text"></input>
      {colors.map(({ name, hex }) => (
        <li key={hex}>
          <div style={{ background: hex }} className="color-display" />
          {name}
        </li>
      ))}
    </div>
  )
}
}

export default App;