import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNewUser } from '../Store/Middleware/serverAuth';
import { Link } from 'react-router-dom';
import Logo from '../Static/components/Logo';
import { useState } from 'react';
import { helper } from '../Tools/helper'

const Registration = (props) => {
     const [formData, setFormData] = useState({email: '', username: '', password: ''})

     const userData = useSelector(state => state.authRed.userData)
     const dispatch = useDispatch()

     const { userIsLoggedIn } = helper

     const handleChange = event => {
          setFormData({
               ...formData,
               [event.target.name]: event.target.value
          })
     }

     const handleSubmit = event => {
          event.preventDefault()
          
          dispatch(createNewUser(formData))
          return userIsLoggedIn(userData) ? props.history.replace('/') : props.history.push('/signup')
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
                         value={formData.email}
                         onChange={handleChange}
                         required
                    />
               </div>
               <div className="signup-username signup-field" >
                    <input
                         type="username"
                         name="username"
                         placeholder="Username"
                         value={formData.username}
                         onChange={handleChange}
                         required
                    />
               </div>
               <div className="signup-password signup-field" >
                    <input
                         type="password"
                         name="password"
                         placeholder="Password"
                         value={formData.password}
                         onChange={handleChange}
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