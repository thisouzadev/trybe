import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }
  moveCar(car, side){
    this.setState({
      cars:{...this.state,
        [car]: side},
      })
  }
  changeSignal(signalColor){
    this.setState({signal: {...this.state.signal, color: signalColor}})
  }
  render() {
    const {state, moveCar, changeSignal} = this
    const context = {
      ...state,
      moveCar,
      changeSignal,
    }
    const {children} = this.props
    return (
      <Context.Provider value={ context }>
        {children}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;