import React, {useState} from 'react'


const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const loginValues = {
            email: enteredEmail,
            password: enteredPassword
        }
        props.onLogin(loginValues);

        
      };

  
    return (
    <div>
        <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login