import "./App.css";
//import header component
import Header from "./components/Header/Header";
//import color picker component
import ColorPicker from "./components/ColorPicker/ColorPicker";
//import footer component
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <ColorPicker />
      <Footer />
    </div>
  );
}

export default App;
