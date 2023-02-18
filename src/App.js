import React, {useState, useEffect} from 'react';
import './App.css';
import Expenseform from './Components/Expenseform';
import Header from './Components/Header';
import ExpenseList from './Components/ExpenseList';
import Login from './Components/Login';
import Logout from './Components/Logout';

const initial_expense = [
  {
    id:1,
    name:"Barber",
    amount: 500.00,
    date:new Date(2022,3,2)
  },
  {
    id:2,
    name:"School",
    amount:70000.00,
    date:new Date(2022,5,7)
  },
  {
    id:3,
    name:"Electricity",
    amount:4000.00,
    date:new Date(2022,7,8)
  },

];

function App() {
  const[expenses,setExpenses]=useState(initial_expense);
  const[isLoggedIn,setIsLoggedIn]=useState(false);

  const expenseHandler = (newExpenseItem) => {
    setExpenses((prevExpenses) => {
      return [newExpenseItem, ...prevExpenses];
    })
  }

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

    if(storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
    console.log(true)
   
  },[])

  const loginHandler = (email,password) => {
    //ideally this is where you pass a function that checks 
    //authentication & authorization via backend
    localStorage.setItem('isLoggedIn' , '1');
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <Header />
      <main>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Logout onLogout={logoutHandler} />}
      </main>
      <Expenseform  onNewExpense={expenseHandler}/>
      <ExpenseList data={expenses}/>
    </div>
  );
}

export default App;
