import React, {useState} from 'react'
import './Styles/Expenseform.css'

const Expenseform = (props) => {
    const[enteredname, setEnteredName] = useState('')
    const[enteredamount, setEnteredAmount] = useState('')
    const[entereddate, setEnteredDate] = useState('')

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            name: enteredname,
            amount: +enteredamount,
            date: new Date(entereddate)
        };
        props.onNewExpense(expenseData)
        setEnteredAmount('')
        setEnteredName('')
        setEnteredDate('')


    }

  return (
    <div id="expense-form">
        <h1 id="expense-header">Add Expense</h1>
        <form onSubmit={onSubmitHandler}>
            <div class="form-group">
                <label for="exampleInputexpense">Expense Name</label>
                <input type="text" 
                    class="form-control" 
                    id="exampleInputExpense"
                    value={enteredname}
                    onChange={nameChangeHandler}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputDate">Date</label>
                <input type="date" 
                    class="form-control"
                    onChange={dateChangeHandler}
                    value={entereddate}
                ></input>
            </div>
            <div class="form-group">
                <label for="exampleInputexpense">Expense Amount</label>
                <div class="input-group mb-3">   
                <div class="input-group-prepend">
                    <span class="input-group-text">Kshs</span>
                </div>
                <input type="number" 
                    class="form-control" 
                    aria-label="Amount (to the nearest dollar)" 
                    onChange={amountChangeHandler}
                    value={enteredamount}
                />
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
                </div>
            </div>
            <button id="form-button" type="submit" class="btn btn-primary">Add expense</button>
        </form>
    </div>
  )
}

export default Expenseform