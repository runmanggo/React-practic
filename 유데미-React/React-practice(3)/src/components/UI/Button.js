import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

//type 외부로부터 값을 받도록 설정
/**
 * 컴포넌트를 사용하는 위치에서 부터 값을 받는것
 * 내장된 button 컴포넌트의 type속성에서 파당되는 값은 동적인 값
 * type 값은 props.type으로 접근할 수 있게 설정
 * 값이 지정되지 않을경우에 || 사용하여 대안으로 button으로 사용하겠금 만들음
 */
export default Button;
