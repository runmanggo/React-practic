import React from "react";
import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [pickDate, setPickDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   setPickDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const pickedDate = (event) => {
    setPickDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   setPickDate: event.target.value,
    // });
  };

  //하나로 공유
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setPickDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  /**
   * 식별자, 값을 인자로 받음 -> 각각의 인풋 요소를 식별해야함
   */

  //onChange={(event) => inputChangeHandler("date", event.target.value)}
  //onChange={(event) => inputChangeHandler("title", event.target.value)
  //onChange={(event) => inputChangeHandler("amount", event.target.value)

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(pickDate),
    };

    props.onSaveExpenseData(expenseData);
    //사용자가 입력한 데이터가 expenseData 객체에 저장되고,
    //이 데이터는 onSaveExpenseData prop을 통해 부모 컴포넌트로 전달

    setEnteredTitle("");
    setEnteredAmount("");
    setPickDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={pickDate}
            onChange={pickedDate}
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
