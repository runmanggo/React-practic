import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expenseContent = <p>No expense found.</p>; // JSX 코드로 변수 저장 가능

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense.</h2>;
  }
  // 해당 if문의 expenseContent에 값이 저장됨
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
