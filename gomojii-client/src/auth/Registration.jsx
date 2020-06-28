import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserUsername, setUserEmail, setUserPassword } from '../store/manageAuthReducer';
import { createNewUser } from '../store/middleware/serverAuth';
import { Link } from 'react-router-dom';
import Logo from '../static/components/Logo';

class Registration extends Component {

     handleEmailChange = event => {
          //todo: updates email field as one types
          const email = event.target.value
          this.props.setEmail(email)
     }

     handleUsernameChange = event => {
          //todo: updates username field as one types
          const username = event.target.value
          this.props.setUsername(username)
     }

     handlePasswordChange = event => {
          //todo: updates password field as one types
          const password = event.target.value
          this.props.setPassword(password)
     }

     handleSubmit = event => {
          const { email, username, password, setEmail, setUsername, setPassword, signupUser } = this.props
          
          signupUser(email, username, password)

          //todo: resetting form fields
          setEmail('')
          setUsername('')
          setPassword('')

          this.props.history.push('/emoji_search')
          
          event.preventDefault()
     }
     
     render() {
          return ( 
               <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div className="logo-on-form">
                         <Logo />
                    </div>
                    <div className="signup-email signup-field">
                         <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={this.props.email}
                              onChange={this.handleEmailChange}
                              required
                         />
                    </div>
                    <div className="signup-username signup-field" >
                         <input
                              type="username"
                              name="username"
                              placeholder="Username"
                              value={this.props.username}
                              onChange={this.handleUsernameChange}
                              required
                         />
                    </div>
                    <div className="signup-password signup-field" >
                         <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={this.props.password}
                              onChange={this.handlePasswordChange}
                              required
                         />
                    </div>
                    <div className="signup-btn-cont">
                         <button className="signup-btn" type="submit">Signup</button>
                    </div>
                    <p className="already-user">Already a user? <Link to="/login">Login</Link></p>
                    <div className="form-footer">
                         <span role="img" aria-label="copyright emoji">©️</span> 2020 Gomojii | <Link to="/emoji_search">Home</Link> 
                    </div>
               </form>
          );
     }
}

const mapStateToProps = state => ({
     email: state.authRed.email,
     username: state.authRed.username,
     password: state.authRed.password,
})

const mapDispatchToProps = dispatch => ({
     setEmail: email => dispatch(setUserEmail(email)),
     setUsername: username => dispatch(setUserUsername(username)),
     setPassword: password => dispatch(setUserPassword(password)),
     signupUser: (email, username, password) => dispatch(createNewUser(email, username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration);