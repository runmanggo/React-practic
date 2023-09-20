import React, { useDeferredValue, useState } from "react";

// don't change the Component name "App"
export default function App() {
  const [chage, setChange] = useState(false);

  function clicked() {
    setChange(!chage);
  }
  return (
    <div>
      <p className={chage ? "active" : ""}>Style me!</p>
      <button onClick={clicked}>Toggle style</button>
    </div>
  );
}
