import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      <ExpenseItem
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
      />
    </Card>
  );
}

export default Expenses;
