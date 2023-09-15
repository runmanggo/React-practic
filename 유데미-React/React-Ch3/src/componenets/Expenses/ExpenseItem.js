import React from "react"; // 값이 변화되면 다시 호출 되는 컴포넌트 함수에 다시 반영됨
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//stateless 컴포넌트 , presentational컴포넌트 혹은 바보 컴포넌트
//안에 내부 상태가 전혀 없기 때문이다.

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amout}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
