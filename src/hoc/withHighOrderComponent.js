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

    increaseCounter() {
      this.setState(
        prevState => ({
          counter: prevState.counter + 1
        })
      )
    }

    render() {
      return (
        <WrappedComponent {...this.state} increase={() => this.increaseCounter()} />
      )
    }
  }
}

export default Hoc;