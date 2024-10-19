import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [name, setName] = useState("John Doe");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <Header />
      <input type='text' onChange={handleInputChange} />
      <h1>Hello World, {name}</h1>
    </>
  );
}

export default App;
