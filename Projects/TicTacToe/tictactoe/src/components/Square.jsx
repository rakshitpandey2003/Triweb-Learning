import React from "react";
import Styles from "./Square.module.css";

const Square = (props) => {
  return (
    <div className={Styles.squares} onClick={props.onClick}>
      <h5>{props.value}</h5>
    </div>
  );
};
export default Square;
