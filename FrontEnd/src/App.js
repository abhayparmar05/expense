import React, { useState } from "react";
import Expenses from "./components/Expenses";
import "./components/Expenses.css";

import NewExpense from './components/NewExpense/NewExpense'
  const Dummy_Expenses = [
    {
      id: "e1",
      title:"Book",
      amount: 300,
      date: new Date(2022, 1, 1),
    },
    {
      id: "e2",
      title: "Pen",
      amount: 205,
      date: new Date(2022, 10, 18),
    },
    {
      id: "e3",
      title: "T-Shirt",
      amount: 250.9,
      date: new Date(2021, 11, 11),
    },
    {
      id: "e4",
      title: "Laptop",
      amount: 750,
      date: new Date(2020, 10, 11),
    },
    {
      id: "e5",
      title: "Bag",
      amount: 20,
      date: new Date(2024, 10, 11),
    }
  ];
function App() {
    const[expenses,setExpenses] = useState(Dummy_Expenses)
  //react code stept 1: import react from 'react'
  
  //step 2
  //           // createElement(tag_name,tag_attribute in object ,child component list )
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Using React code method"),
  //   React.createElement(Expenses, { expense: expense })
  // );

  //jsx code
  //usd for retrive data from NewExpense using props
  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{ return[expense,...prevExpenses]})
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
