import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef(); // 항상 객체이고 current 프롭을 가지고 있음
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ""; // DoM 을 조작하기 위해서 ref를 사용하는것은 드뭄
    ageInputRef.current.value = ""; //하지만 인풋양식 리셋하기 위해서 사용해도 됨
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  /**
   * 제어되지 않은 컴포넌트 : 안에서 반영되는 값은 리액트로 인해 제어 되지 않음
   * form 은 브라우저의해 내부 state를 갖는 경향이 있음 > 사용자 입력을 받아 저장하고 반영함
   *
   */

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onClick={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      {/**에러가 참일경우 해당 컴포넌트 실행 */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
