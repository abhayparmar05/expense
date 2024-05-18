import React ,{ useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
  //using state Multiple Approch
  const [enteredTitle,setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //using single Approch 
  // const [userInput,SetUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // }) 

  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value) //Multiple Approch
    // SetUserInput((prevState)=>{
    //   return{...prevState,enteredTitle:event.target.value} //single Approch
    // })
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) =>{
    
    event.preventDefault();    
    
    const expenseData = {
      title : enteredTitle,
      amount : +enteredAmount,
      date : new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData) //its is used to pass data into NewExpense.js file

    //below concept is call two way buinding step - 1: add argument in all input call value  step -2 : inltialization to null 
    // this concept is used for null input box  value 
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
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
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min={0.01}
              step="0.01"
              onChange={AmountChangeHandler}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2025-12-31"
              onChange={DateChangeHandler}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}> Cancel</button>
          <button type="submit"> Add Expense</button>
        </div>
      </form>
    );
}
export default ExpenseForm