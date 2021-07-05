// https://zh-hant.reactjs.org/docs/higher-order-components.html
import React from 'react';

const Hoc = (WrappedComponent) => {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      }
    }

    // This is the enhancement - adding increase method to ANY WrappedComponent
    // that will be passed to the Hoc function
    increaseCounter() {
      this.setState(
        prevState => ({
          counter: prevState.counter + 1
        })
      )
    }

    render() {
      return (
        // Better to bind method here than in constructor as bind creates a new function, thus consumes memory.
        <WrappedComponent {...this.state} increase={() => this.increaseCounter()} />
      )
    }
  }
}

export default Hoc;