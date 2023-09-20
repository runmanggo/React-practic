import React, { useState } from "react";

// don't change the Component name "App"
export default function App() {
  const [change, setChange] = useState(false);
  function clicked() {
    setChange(!change);
  }
  return (
    <div>
      <p style={{ color: change ? "red" : "white" }}>Style me!</p>
      <button onClick={clicked}>Toggle style</button>
    </div>
  );
}
import React, { useState } from "react";
