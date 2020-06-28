import React from 'react';
import { getExistingUser } from '../store/middleware/serverAuth';
import { useSelector, useDispatch } from 'react-redux';
import { setUserEmail, setUserPassword } from '../store/manageAuthReducer';
import { Link } from 'react-router-dom';

const Login = (props) => {
     const state = useSelector(state => ({
          email: state.authRed.email,
          password: state.authRed.password
     }))
     const dispatch = useDispatch()
     
     const handleEmailChange = event => {
          //todo: updates email field as one types
          const email = event.target.value
          dispatch(setUserEmail(email))
     }

     const handlePasswordChange = event => {
          //todo: updates password field as one types
          const password = event.target.value
          dispatch(setUserPassword(password))
     }

     const handleSubmit = event => {
          const { email, password } = state
          dispatch(getExistingUser(email, password))

          //todo: resetting form fields
          dispatch(setUserEmail(''))
          dispatch(setUserPassword(''))

          
          props.history.replace('/emoji_search')
          
          event.preventDefault()
     }
     
     return ( 
          <form className="login-form" onSubmit={handleSubmit}>
               <div className="logo-on-form">
                    <img src="images/gomojii-logo-3.png" alt="logo"/>
               </div>
               <div className="login-email login-field">
                    <input
                         type="email"
                         name="email_for_login"
                         placeholder="Email"
                         value={state.email}
                         onChange={handleEmailChange}
                         required
                    />
               </div>
               <div className="login-password login-field" >
                    <input
                         type="password"
                         name="password_for_login"
                         placeholder="Password"
                         value={state.password}
                         onChange={handlePasswordChange}
                         required
                    />
               </div>
               <div className="login-btn-cont">
                    <button className="login-btn" type="submit">Login</button>
               </div>
               <div className="form-footer">
                    <span role="img" aria-label="copyright emoji">©️</span> 2020 Gomojii | <Link to="/emoji_search">Home</Link> 
               </div>
          </form>
     );
}

export default Login;