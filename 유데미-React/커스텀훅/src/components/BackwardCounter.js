import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "../hooks/user-counter";

const BackwardCounter = () => {
  const counter = useCounter(false); // useCounter의 forwards매개변수로 받음
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
