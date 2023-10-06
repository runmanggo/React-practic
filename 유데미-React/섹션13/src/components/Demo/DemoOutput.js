import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("demo running!");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};
export default React.memo(DemoOutput);

//React.memo 가 하는 일  props.show === props.previous.show(실제로 이렇게 사용하지 않음)
//"현재값 === 전의 값"확인해서 true 면 작동을 함
/**
 * 원시값들은 현재값과 전의 값을 비교할때 실제로는 다른값이지만 동일한 값이라고 나옴
 * 배열, 객체 얘들은 다름 현재값과 이전값이 다름 (원시값과 참조값)
 */
