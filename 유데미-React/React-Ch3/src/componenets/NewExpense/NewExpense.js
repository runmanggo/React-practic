import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeExpenseForm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="new-expense">
      {isModalOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeExpenseForm}
        />
      )}
      {!isModalOpen && <button onClick={toggleModal}>Add New Expense</button>}
    </div>
  );
}
export default NewExpense;
