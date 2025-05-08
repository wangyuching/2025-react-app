import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import MySlider from "./component/MySlider";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" title="Vite">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" title="React">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>20250508</h1>
      <h2>我的第一個元件 : Slider</h2>
      <div>
        <p>R : <MySlider /></p>
        <p>G : <MySlider /></p>
        <p>B : <MySlider /></p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
