import React from "react";
import Card from "./Card";

function ConceptItem(props) {
  return (
    <Card className="concept">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Card>
  );
}
export default ConceptItem;
