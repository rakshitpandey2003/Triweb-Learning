import React from "react";
import Square from "./Square";
import Styles from './Board.module.css';

const Board = () => {
  return (
    <div className={Styles.board}>
      <div className={Styles.row}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={Styles.row}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={Styles.row}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;