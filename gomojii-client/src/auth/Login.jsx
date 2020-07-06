import React from 'react';
import { getExistingUser } from '../store/middleware/serverAuth';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../static/components/Logo';
import { helper } from '../helper';
import { useState } from 'react';


const Login = (props) => {
     const [formData, setFormData] = useState({email: '', password: ''})

     const state = useSelector(state => ({
          userData: state.authRed.userData
     }))
     const dispatch = useDispatch()
     const { userData } = state
     const { userIsLoggedIn } = helper
     
     const handleChange = event => {
          setFormData({
               ...formData,
               [event.target.name]: event.target.value
          })
     }

     const handleSubmit = event => {
          event.preventDefault()

          dispatch(getExistingUser(formData))
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
