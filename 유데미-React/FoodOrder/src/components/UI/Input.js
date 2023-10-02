import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
      {/* {...props.input}가  input 태그가 필요로 하는 모든 속성들(id, type, value 등)을 한 번에 전달할 수 있게 됩니다 */}
    </div>
  );
};
export default Input;
