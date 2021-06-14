import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;

    return (
      <div className="counter">
        <div>{counter}</div>
        <div>
          <button type="button" onClick={increment}>
            INCREMENT BY 1
          </button>
        </div>
        <div>
          <button type="button" onClick={decrement}>
            DECREMENT BY 1
          </button>
        </div>
        <button type="button" onClick={reset}>
          RESET
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  counter: PropTypes.number,
};

Counter.defaultProps = {
  counter: 0,
};

export default Counter;
