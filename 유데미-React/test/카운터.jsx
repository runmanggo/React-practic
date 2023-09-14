import React, { useState } from "react";

import "./styles.css";

// don't change the Component name "App"
// export default function App() {
//   const [count, setCount] = useState("0");
//   function click() {
//     setCount(Number(count) + 1);
//   }

//   return (
//     <div>
//       <p id="counter">{count}</p>
//       <button onClick={click}>Increment</button>
//     </div>
//   );
// }

//전 값을 기반으로 일부 상태를 업데이트할 때는 상태 업데이트 함수
export default function App() {
  const [count, setCount] = useState("0");
  function click() {
    setCount((preState) => {
      preState + 1;
    });
  }

  return (
    <div>
      <p id="counter">{count}</p>
      <button onClick={click}>Increment</button>
    </div>
  );
}
