import React from 'react'
import ExpenseDate from './ExpenseDate'


const ExpenseList = (props) => {
    //console.log(props.data);
    const listExpense = props.data.map((expenseitem) =>(
        <div className="list-group-item" key={expenseitem.id}>
            <h5>Expense Item: <span><i>{expenseitem.name}</i></span></h5>
            <h6>Amount: <span><i>{expenseitem.amount}</i></span></h6>
            <h6>Date: <span><ExpenseDate date={expenseitem.date} /></span></h6>
        </div>
    ))

  return (
    <div>
        <div class="card">
            <div class="card-header">
                Expense Items
            </div>
            <ul class="list-group list-group-flush">
              <li>{listExpense}</li>
            </ul>
        </div>
    </div>
    
  )
}

export default ExpenseList;  