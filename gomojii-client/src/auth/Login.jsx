import React, { Component } from 'react';
import { getExistingUser } from '../store/middleware/serverAuth';
import { connect } from 'react-redux';
import { setUserEmail, setUserPassword } from '../store/manageAuthReducer';

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
          
          event.preventDefault()
     }
     
     render() {
          return ( 
               <form onSubmit={this.handleSubmit}>
                    <div className="email">
                         <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={this.props.email}
                              onChange={this.handleEmailChange}
                              required
                         />
                    </div>
                    <div className="password">
                         <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={this.props.password}
                              onChange={this.handlePasswordChange}
                              required
                         />
                    </div>
                    <button type="submit">Login</button>
               </form>
          );
     }
}

const mapStateToProps = state => ({
     email: state.authRed.email,
     password: state.authRed.password,
})

const mapDispatchToProps = dispatch => ({
     setEmail: email => dispatch(setUserEmail(email)),
     setPassword: password => dispatch(setUserPassword(password)),
     loginUser: (email, password) => dispatch(getExistingUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);