import React from 'react'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
 

  return (
    
        <i>{day} {month} ,{year} </i>
    
  )
}

export default ExpenseDate
