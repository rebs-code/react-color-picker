//import useState
import React, { useState } from "react";
//import ColorPicker module
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  //create state for color
  const [color, setColor] = useState("#FFFFFF");

  //create function to handle color change
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className={styles.colorPickerContainer}>
        <div className="colorDisplay" style={{ backgroundColor: color }}></div>
        <p>
          Selected Color: <strong>{color}</strong>
        </p>
        <label>Select a Color </label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
}

export default ColorPicker;
