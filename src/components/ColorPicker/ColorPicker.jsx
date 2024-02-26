//import useState
import React, { useState } from "react";
//import ColorPicker module
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  //create state for color
  const [color, setColor] = useState("#FFFFFF");

  return (
    <>
      <div className={styles.colorPickerContainer}>
        <div className="colorDisplay" style={{ backgroundColor: color }}></div>
        <p>
          Selected Color: <strong>{color}</strong>
        </p>
        <label>Select a color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </>
  );
}

export default ColorPicker;
