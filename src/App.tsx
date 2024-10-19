import "./App.css";
import HappyBear from "./components/bears/HappyBear";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <Header />
      <input type='color' onChange={handleInputChange} />
      <div className='bear'>
        <HappyBear color={color} />
      </div>
    </>
  );
}

export default App;
