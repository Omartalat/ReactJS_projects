import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("rgb(0, 0, 0)");

  function handleChangeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <>
      <div className="square" style={{ backgroundColor: color }}>
        <h1>The Color</h1>
        <p>{color}</p>
      </div>
      <button onClick={handleChangeColor}>Change the Color</button>
    </>
  );
}
