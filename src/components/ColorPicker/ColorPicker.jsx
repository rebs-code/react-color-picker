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

  //create a text color variable
  const textColor = getContrastColor(color);

  //create function to get contrast color
  function getContrastColor(hexcolor) {
    var r = parseInt(hexcolor.substr(1, 2), 16);
    var g = parseInt(hexcolor.substr(3, 2), 16);
    var b = parseInt(hexcolor.substr(5, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }

  return (
    <>
      <div className={styles.colorPickerContainer}>
        <div className={styles.colorPickerCard}>
          <div
            className={styles.colorDisplay}
            style={{ backgroundColor: color }}
          >
            <p style={{ color: textColor }}>
              Selected Color: <strong>{color}</strong>
            </p>
          </div>
          <label>Select a Color</label>
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
