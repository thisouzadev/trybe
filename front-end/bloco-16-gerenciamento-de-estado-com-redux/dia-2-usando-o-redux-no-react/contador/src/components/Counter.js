import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { counter, decrement, increment } = this.props
    return (
      <div>
        <h1>{ counter }</h1>
        <button onClick={ decrement }>-</button>
        <button onClick={ increment }>+</button>
      </div>
    )
  }
}
