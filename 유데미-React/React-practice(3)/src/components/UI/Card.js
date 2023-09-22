import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

//card 컴포넌트에 addUser css도 가져와야하니깐 두가지 다 작성하는 것

export default Card;
