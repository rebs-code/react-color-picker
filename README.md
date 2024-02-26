# React Color Picker

This project is a simple color picker built with React. It features a header, a footer, and a main content area that includes the color picker. The main content area expands to take up all available space between the header and footer.

## Project Structure

- `Header`: This component represents the header of the application.
- `Footer`: This component represents the footer of the application.
- `MainContent`: This component represents the main content area of the application. It includes the color picker.

## Color Picker Features

The ColorPicker component allows users to select a color using a color input field. The selected color is stored in a state variable, color, which updates every time the user selects a new color.

```
 const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
```

The color selection is reflected in real-time on a display area, which changes its background color to match the selected color.

```
<div
    className={styles.colorDisplay}
    style={{ backgroundColor: color }}
    >
    <p style={{ color: textColor }}>
     Selected Color: <strong>{color}</strong>
    </p>
    </div>
```

To ensure the visibility of the text against the selected color, the component calculates a **contrast color** using the getContrastColor function. This function takes the hex value of the selected color, calculates its brightness, and returns either "black" or "white" depending on the brightness of the color. The text color in the display area is then set to this contrast color.

```
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
```

The component also displays the hex value of the selected color, allowing users to easily copy and use the color elsewhere. The color picker is styled using a **CSS module**, ensuring that the styles are scoped to the component and won't interfere with other styles in the application.

## Web Technologies

- React
- JavaScript
- CSS
- HTML

## Setup and Installation

1. Clone the repository:

```
git clone https://github.com/rebs-code/react-color-picker.git
```

2. Navigate into the project directory:

```
cd react-color-picker
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```
