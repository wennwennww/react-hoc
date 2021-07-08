import React from "react";
import Hoc from '../hoc/withHighOrderComponent';
const ButtonClickAction = (props) => (
  <button className="button--cancel" onClick={props.increase}>Btn clicks count: {props.counter}</button>
)

export default Hoc(ButtonClickAction);