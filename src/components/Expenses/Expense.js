import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expense.css";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const addDataHandler = (data) => {
    setFilteredYear(data);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onListenData={addDataHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList filtered={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expense;
