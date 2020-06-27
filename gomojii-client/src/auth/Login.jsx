import React, { Component } from 'react';
import { getExistingUser } from '../store/middleware/serverAuth';
import { connect } from 'react-redux';
import { setUserEmail, setUserPassword } from '../store/manageAuthReducer';
import { Link } from 'react-router-dom';

class Login extends Component {
     
     handleEmailChange = event => {
          //todo: updates email field as one types
          const email = event.target.value
          this.props.setEmail(email)
     }

     handlePasswordChange = event => {
          //todo: updates password field as one types
          const password = event.target.value
          this.props.setPassword(password)
     }

     handleSubmit = event => {
          const { email, password, setEmail, setPassword, loginUser } = this.props
          loginUser(email, password)
          //todo: resetting form fields
          setEmail('')
          setPassword('')

          this.props.history.replace('/')
          
          event.preventDefault()
     }
     
     render() {
          return ( 
               <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="logo-on-form">
                         <img src="images/gomojii-logo.png" alt="logo"/>
                    </div>
                    <div className="login-email login-field">
                         <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={this.props.email}
                              onChange={this.handleEmailChange}
                              required
                         />
                    </div>
                    <div className="login-password login-field" >
                         <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={this.props.password}
                              onChange={this.handlePasswordChange}
                              required
                         />
                    </div>
                    <div className="login-btn-cont">
                         <button className="login-btn" type="submit">Login</button>
                    </div>
                    <div className="form-footer">
                         <span role="img" aria-label="copyright emoji">©️</span> 2020 Gomojii | <Link to="/">Home</Link> 
                    </div>
               </form>
          );
     }
}

const mapStateToProps = state => ({
     email: state.authRed.email,
     password: state.authRed.password,
     user: state.authRed.user
})

const mapDispatchToProps = dispatch => ({
     setEmail: email => dispatch(setUserEmail(email)),
     setPassword: password => dispatch(setUserPassword(password)),
     loginUser: (email, password) => dispatch(getExistingUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);