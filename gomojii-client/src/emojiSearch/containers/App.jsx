//! importing necessary files and/or libraries
import React, { Component } from 'react';
import EmojiContainer from './EmojiContainer';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import { loadEmojis, loadCategories, loadUsersSavedEmojis } from '../../store/middleware/apiEmojiSearch';
import { validateSession } from '../../store/middleware/serverAuth';
import Login from '../../auth/Login';
import Registration from '../../auth/Registration';
import NotFound from '../../static/components/NotFound';
import { helper } from '../../helper';
import HeaderIfLoggedIn from '../../static/components/HeaderIfLoggedIn';
import HeaderIfLoggedOut from '../../static/components/HeaderIfLoggedOut';
import Dashboard from '../../user/Dashboard';

class App extends Component {

  //todo: inside this lifecycle method I'm loading the emojis and categories to work with later on throughout the application
  componentDidMount() {
    //todo: getting the below methods from props
    const {
      loadEmojis,
      loadCategories,
      validateSession,
      loggedInStatus,
      loadUsersEmojis
    } = this.props

    loadEmojis()
    loadCategories()
    validateSession(loggedInStatus)
    setTimeout(() => loadUsersEmojis(), 1000)
  }

  renderCorrectHeader = () => {
    const { userData } = this.props
    const { userIsLoggedIn } = helper
    return userIsLoggedIn(userData) ? <HeaderIfLoggedIn /> : <HeaderIfLoggedOut/>
  }

  render() {
    const { userData } = this.props
    const { userIsLoggedIn } = helper
    return (
      <div className="App">
        { this.renderCorrectHeader() }
        <Switch>
          <Route
            path='/login'
            render={props => {
              return userIsLoggedIn(userData) ? <Redirect to="/emojis" /> : <Login {...props} />
            }} 
          />

          <Route
            path='/signup'
            render={props => {
              return userIsLoggedIn(userData) ? <Redirect to="/emojis" /> : <Registration {...props} /> 
            }}
          />
        
          <Route 
            path="/dashboard"
            render={props => <Dashboard {...props} />}
          />
          
          <Route
              path='/emojis'
              render={props => <EmojiContainer {...props} />} 
          />
        
          <Route path="/not_found" component={NotFound} />

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
  loadUsersEmojis: () => dispatch(loadUsersSavedEmojis())
})

//todo: using connect() allows me to 'connect' a component to the store
export default connect(mapStateToProps, mapDispatchToProps)(App);
