import './NewExpense.css'
import React, { useState} from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{
  //data is come from child to parent 
  const [isVisible,setIsVisible] = useState(false)
  const saveExpenseDataHandler = (EnteredExpenseData)=>{

      const expenseData = {
        ...EnteredExpenseData,
        id:Math.random().toString()
      }
      props.onAddExpense(expenseData)//give data to app.js file this line of code
      setIsVisible(false)
  }
  const VisibleFormHandler = () =>{
    setIsVisible(true)
  }
  const NotVisibleFormHandler = () => {
    setIsVisible(false);
  };
    return (
      <div className="new-expense">
        {!isVisible && <button onClick={VisibleFormHandler}>Add New Expense</button>}
        {isVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={NotVisibleFormHandler} />}
      </div>
    );
}
export default NewExpense