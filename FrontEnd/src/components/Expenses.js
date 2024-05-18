import React, { useState } from "react";

import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear,SetfilterYear] = useState('2022')

  const OnSelectedYearHandler=(SeletedYear)=>{
      SetfilterYear(SeletedYear)
    }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectyear={filterYear}
          onSelectedYear={OnSelectedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
