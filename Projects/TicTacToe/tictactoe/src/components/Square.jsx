import React from "react";
import Styles from "./Square.module.css";

const Square = (props) => {
  return (
    <div className={`${Styles.squares} ${props.value === "X" ? Styles["x-turn"] : Styles["o-turn"]}`} onClick={props.onClick}>
      <h5>{props.value}</h5>
    </div>
  );
};
export default Square;
