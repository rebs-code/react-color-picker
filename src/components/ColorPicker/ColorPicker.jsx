//import useState
import React, { useState } from "react";
//import ColorPicker module
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  //create state for color
  const [color, setColor] = useState("#FFFFFF");

  return (
    <>
      <div className={styles.colorPicker}>hello</div>
    </>
  );
}

export default ColorPicker;
