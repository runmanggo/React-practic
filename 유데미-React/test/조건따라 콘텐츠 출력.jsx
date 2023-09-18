import React, { useState } from "react";

// don't change the Component name "App"
export default function App() {
  const [button, setButton] = useState(false);

  const toggleModal = () => {
    setButton(!button);
  };

  return (
    <div>
      {button && (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClose={toggleModal}>Proceed</button>
        </div>
      )}
      <button onClick={toggleModal}>Delete</button>
    </div>
  );
}
