import React from 'react';
import { getExistingUser } from '../Store/Middleware/serverAuth';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Static/components/Logo';
import { helper } from '../Tools/helper'
import { useState } from 'react';

const Login = (props) => {
     //todo: setting up initial state via useState hooks
     const [formData, setFormData] = useState({email: '', password: ''})

     //todo: getting userData property from store
     const state = useSelector(state => ({
          userData: state.authRed.userData
     }))
     const dispatch = useDispatch()
     const { userData } = state
     const { userIsLoggedIn } = helper
     
     //todo: handling input change / controlled form/component
     const handleChange = event => {
          setFormData({
               ...formData,
               [event.target.name]: event.target.value
          })
     }

     const handleSubmit = event => {
          event.preventDefault()

          //todo: borrowing getExisitingUser function/action from store
          dispatch(getExistingUser(formData))
          setFormData({
               email: '',
               password: ''
          })
          return userIsLoggedIn(userData) ? props.history.replace('/') : props.history.push('/login')
     }
     
     return ( 
          <form className="login-form" onSubmit={handleSubmit}>
               <div className="logo-on-form">
                    <Logo />
               </div>
               <div className="login-email login-field">
                    <input
                         type="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         placeholder="Email"
                         required
                    />
               </div>
               <div className="login-password login-field" >
                    <input
                         type="password"
                         name="password"
                         value={formData.password}
                         onChange={handleChange}
                         placeholder="Password"
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
