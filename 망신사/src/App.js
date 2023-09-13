import "./App.css";
import { Button } from "react-bootstrap";
import bg from "./image/신발.png";
import { useState } from "react";
import data from "./data";
import BasicExample from "./components/Nav";
import Main from "./components/Main";

function App() {
  const [shoes] = useState(data); // 데이터 뽑을때 변수[인덱스]

  return (
    <div className="App">
      <BasicExample />
      <img className="main-bg" src={bg} />

      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Main shoes={shoes[i]} number={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
