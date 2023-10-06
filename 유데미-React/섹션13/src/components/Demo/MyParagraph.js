import React from "react";

const MyParagraph = (props) => {
  console.log("paragrah running");
  return <p>{props.children ? "This is new!" : ""}</p>;
};

export default MyParagraph;
