import React, { Component } from 'react'
import Counter from './Counter'

export default class CounterContainer extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }

    this.increment = () => this.setState({
      counter: this.state.counter + 1
    })

    this.decrement = () => this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {
    const {counter} = this.state;
    return (
      <>
        <Counter
          counter={counter}
          increment={this.increment}
          decrement={this.decrement}
        />
      </>
    )
  }
}
