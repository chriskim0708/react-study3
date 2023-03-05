import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState({
    box1: "red",
    box2: "blue",
    box3: "green",
  });
  const boxStyle = {
    width: "200px",
    height: "200px",
  };
  const onChangeColor = () => {
    setColor((state) => {
      return {
        ...state,
        box2: "green",
        box3: "blue",
      };
    });
  };
  return (
    <>
      <div>
        <button onClick={onChangeColor}>change color</button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <div
          style={{
            ...boxStyle,
            backgroundColor: color.box1,
          }}
        ></div>
        <div
          style={{
            ...boxStyle,
            backgroundColor: color.box2,
          }}
        ></div>
        <div
          style={{
            ...boxStyle,
            backgroundColor: color.box3,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
