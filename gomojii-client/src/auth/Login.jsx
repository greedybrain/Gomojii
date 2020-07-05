import React from 'react';
import { getExistingUser } from '../store/middleware/serverAuth';
import { useSelector, useDispatch } from 'react-redux';
import { setUserEmail, setUserPassword } from '../store/manageAuthReducer';
import { Link } from 'react-router-dom';
import Logo from '../static/components/Logo';
import { helper } from '../helper';


const Login = (props) => {
     const state = useSelector(state => ({
          email: state.authRed.email,
          password: state.authRed.password,
          userData: state.authRed.userData
     }))
     const dispatch = useDispatch()
     const { userIsLoggedIn } = helper
     const { email, password, userData } = state

     const resetFields = () => {
          dispatch(setUserEmail(''))
          dispatch(setUserPassword(''))
     }
     
     const handleEmailChange = (event) => {
          //todo: updates email field as one types
          const { value } = event.target
          dispatch(setUserEmail(value))
     }

     const handlePasswordChange = (event) => {
          const { value } = event.target
          dispatch(setUserPassword(value))
     }

     const handleSubmit = event => {
          const { email, password } = state
          dispatch(getExistingUser(email, password))

          if (userIsLoggedIn(userData)) {
               props.history.replace('/emojis')
               resetFields()
          } else {
               props.history.push('/login')
          }
          
          event.preventDefault()
     }
     
     return ( 
          <form  className="login-form" onSubmit={handleSubmit}>
               <div className="logo-on-form">
                    <Logo />
               </div>
               <div className="login-email login-field">
                    <input
                         type="email"
                         name="email_for_login"
                         placeholder="Email"
                         value={email}
                         onChange={handleEmailChange}
                         required
                    />
               </div>
               <div className="login-password login-field" >
                    <input
                         type="password"
                         name="password_for_login"
                         placeholder="Password"
                         value={password}
                         onChange={handlePasswordChange}
                         required
                    />
               </div>
               <div className="login-btn-cont">
                    <button className="login-btn" type="submit">Login</button>
               </div>
               <p className="not-user-yet">Don''t have an account? <Link to="/signup">Signup</Link></p>
               <div className="form-footer">
                    <span role="img" aria-label="copyright emoji">©️</span> 2020 Gomojii | <Link to="/emojis">Home</Link> 
               </div>
          </form>
     );
}

export default Login;