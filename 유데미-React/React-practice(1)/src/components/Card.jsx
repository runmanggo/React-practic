import "./Card.css";

function Card(props) {
  const classes = "concept " + props.className;
  return <li className={classes}>{props.children}</li>;
}
export default Card;
