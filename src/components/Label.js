import React from "react";
import Hoc from '../hoc/withHighOrderComponent';
const Label = (props) => (
  <button className="button--accept" onMouseOut={props.increase}>Mouse out count: {props.counter}</button>
)

export default Hoc(Label);