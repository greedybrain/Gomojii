import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserUsername, setUserEmail, setUserPassword } from '../store/manageAuthReducer';
import { createNewUser } from '../store/middleware/serverAuth';
import { Link } from 'react-router-dom';
import Logo from '../static/components/Logo';

const Registration = ({ history }) => {
     const state = useSelector(state => ({
          email: state.authRed.email,
          username: state.authRed.username,
          password: state.authRed.password
     }))
     const dispatch = useDispatch()

     const handleEmailChange = event => {
          //todo: updates email field as one types
          const {value} = event.target
          dispatch(setUserEmail(value))
     }

     const handleUsernameChange = event => {
          //todo: updates username field as one types
          const {value} = event.target
          dispatch(setUserUsername(value))
     }

     const handlePasswordChange = event => {
          //todo: updates password field as one types
          const {value} = event.target
          dispatch(setUserPassword(value))
     }

     const handleSubmit = event => {
          const { email, username, password } = state
          
          dispatch(createNewUser(email, username, password))

          //todo: resetting form fields
          dispatch(setUserEmail(''))
          dispatch(setUserUsername(''))
          dispatch(setUserPassword(''))

          history.push('/emojis')
          
          event.preventDefault()
     }
     
     return ( 
          <form className="signup-form" onSubmit={handleSubmit}>
               <div className="logo-on-form">
                    <Logo />
               </div>
               <div className="signup-email signup-field">
                    <input
                         type="email"
                         name="email"
                         placeholder="Email"
                         value={state.email}
                         onChange={handleEmailChange}
                         required
                    />
               </div>
               <div className="signup-username signup-field" >
                    <input
                         type="username"
                         name="username"
                         placeholder="Username"
                         value={state.username}
                         onChange={handleUsernameChange}
                         required
                    />
               </div>
               <div className="signup-password signup-field" >
                    <input
                         type="password"
                         name="password"
                         placeholder="Password"
                         value={state.password}
                         onChange={handlePasswordChange}
                         required
                    />
               </div>
               <div className="signup-btn-cont">
                    <button className="signup-btn" type="submit">Signup</button>
               </div>
               <p className="already-user">Already a user? <Link to="/login">Login</Link></p>
               <div className="form-footer">
                    <span role="img" aria-label="copyright emoji">©️</span> 2020 Gomojii | <Link to="/emojis">Home</Link> 
               </div>
          </form>
     );
}

export default Registration;