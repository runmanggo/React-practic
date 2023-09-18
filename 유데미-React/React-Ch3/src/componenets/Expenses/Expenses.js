import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // let filterInfoText = "2020,2021&2022";

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021 & 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2020, 2019 & 2022";
  // } else {
  //   filterInfoText = "2020, 2019 & 2021";
  // }
  // 위 코드가 권장 방식 (파생 값)
  // const [filterInfiText, setFilterInfoText] = useState("2019,2021 & 2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //   if (selectedYear === "2019") {
    //     setFilterInfoText("2020, 2021 & 2022");
    //   } else if (selectedYear === "2020") {
    //     setFilterInfoText("2019, 2021 & 2022");
    //   } else if (selectedYear === "2021") {
    //     setFilterInfoText("2020, 2019 & 2022");
    //   } else {
    //     setFilterInfoText("2020, 2019 & 2021");
    //   }
  };

  const filteredExpensesByYear = props.items.filter((item) => {
    const year = item.date.getFullYear().toString();
    return year === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpensesByYear} />
      <ExpenseList items={filteredExpensesByYear} />
      {/**원래는 expenseContent 넣어졌는데 컴포넌트로 따로 뗌 */}
      {/**해당 변수는 단순 JSX코드 + JSX 요소의 배열을 갖게 됨 (두가지가 랜더링 되는것)*/}

      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      {/**조건식을 사용해서 가독성 좋게 두개의 코드로 나눔 */}
      {/* {filteredExpensesByYear.length === 0 && <p>No expense found.</p>}
      {filteredExpensesByYear.length > 0 &&
        filteredExpensesByYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      {/** 앞코드 ===0은 내용이 없다는 뜻 / 삼항 연산자를 사용해서 조건부 렌더링 할 수 있음 */}
      {/* {filteredExpensesByYear.length === 0 ? (
        <p>No expense found.</p>
      ) : (
        filteredExpensesByYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* <ExpenseItem
        title={props.items[0].title}
        amout={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amout={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amout={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amout={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
