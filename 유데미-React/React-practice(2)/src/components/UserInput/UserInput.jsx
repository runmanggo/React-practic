import React, { useState } from "react";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  // const [currentSavings, SetCurrentSaving] = useState("");
  // const [yearlySavings, SetYearlySavings] = useState("");
  // const [expectedInterest, setExpectedInterest] = useState("");
  // const [investmentDuration, SetInvestmentDuration] = useState("");

  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  /**
   * resultTable 에다가 인풋 값들을 나오게 해야하는데, userInput컴포넌트와 형제관계
   * 그래서, app.js에 올려서 ResultTable에다가 내려줘야함
   * app.js에서 userInput(useState)변수로 작성한 계산함수를 props으로 받고
   * 파라미터를 UserInput에 있는 userInput(useState)변수 보내버림
   *
   */
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput); //사용자 입려값을 부모컴포넌트에 전달
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  // 인풋의 작성할때마다 업데이트
  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  //발생하는 input과 값을 입력하는 value 두개 파라미터를 작성해야한다 (현재 함수는 input의 공용함수임)
  // setUserInput((prevInput)=>{  // 이전 상태를 기반으로 새로운 상태를 계산하여 반환 return 안에는 이전거에다가 새로운거 더해서 업데이트})
  //상태관리 관련 로직, 태 업데이트 함수를 사용하면 항상 현재 상태에 대한 최신 참조를 보장 가능하기 때문이다

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            /** changeHandler 함수에서 설정한 파라미터를 받기 위해서 화살표 함수로 작성함,
          함수를 프롭스로 땡겨와서, 해당 input의 ID 값인 current-savings을 가져오고, 이벤트가 실행되면 값을 받게 
          event.target.value로 작성함*/
            value={userInput["current-savings"]}
            /**
             * 양방향 바인딩 : 사용자가 입력하면 바로 컴포넌트에 동기화 되는 작업
             */
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler("duration", event.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
          {/**
           * <form> 안에 위치한 <button type="submit"> 엘리먼트는
           * 사용자가 클릭하거나 엔터 키를 누를 때 자동으로 <form>을 제출합니다.
           * 이렇게 하면 onSubmit 이벤트 핸들러가 호출되며, 이벤트 객체가 전달
           */}
        </button>
      </p>
    </form>
  );
};
export default UserInput;
