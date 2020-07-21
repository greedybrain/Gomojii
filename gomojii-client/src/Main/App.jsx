//! importing necessary files and/or libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import { loadEmojis, loadCategories } from '../Store/Middleware/apiEmojiSearch';
import { validateSession } from '../Store/Middleware/auth';
import Login from '../Auth/Login'
import Registration from '../Auth/Registration'
import NotFound from '../Pages/NotFound'
import { helper } from '../Tools/helper'
import HeaderIfLoggedIn from '../Static/components/HeaderIfLoggedIn';
import HeaderIfLoggedOut from '../Static/components/HeaderIfLoggedOut';
import Dashboard from '../Pages/DashboardPage/containers/Dashboard';
import EmojiContainer from '../Pages/EmojiSearchPage/containers/EmojiContainer'

class App extends Component {
  //todo: inside this lifecycle method I'm loading the emojis and categories to work with later on throughout the application
  componentDidMount() {
    //todo: getting the below methods from props
    const {
      loadEmojis,
      loadCategories,
      loggedInStatus,
      validateSession
    } = this.props

    validateSession(loggedInStatus)
    loadEmojis()
    loadCategories()
  }
  
  render() {
    const { userData } = this.props
    const { userIsLoggedIn } = helper
    return (
      <div className="App">
        { userIsLoggedIn(userData) ? <HeaderIfLoggedIn /> : <HeaderIfLoggedOut/> }
        <Switch>
          <Route
            path='/login'
            render={props => {
              return userIsLoggedIn(userData) ? <Redirect to="/" /> : <Login {...props} />
            }} 
          />
          <Route
            path='/signup'
            render={props => {
              return userIsLoggedIn(userData) ? <Redirect to="/" /> : <Registration {...props} /> 
            }}
          />
          <Route 
              path='/emojis'
              render={props => <EmojiContainer {...props} />} 
          />
          <Route
            path="/not_found"
            component={NotFound} 
          />
          <Route
            exact
            path="/"
            render={props => {
              return userIsLoggedIn(userData) ? <Dashboard {...props} /> : <Redirect to="/login" />
            }}
          />
          <Redirect to="/not_found" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.authRed.loggedInStatus,
  userData: state.authRed.userData,
  loading: state.emojisRed.loading,
})

//todo: mapping my dispatch to props 
const mapDispatchToProps = dispatch => ({
  loadEmojis: () => dispatch(loadEmojis()),
  loadCategories: () => dispatch(loadCategories()),
  validateSession: status => dispatch(validateSession(status)),
})

//todo: using connect() allows me to 'connect' a component to the store
export default connect(mapStateToProps, mapDispatchToProps)(App);
