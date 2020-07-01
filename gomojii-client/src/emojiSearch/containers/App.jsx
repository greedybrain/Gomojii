//! importing necessary files and/or libraries
import React, { Component } from 'react';
import EmojiContainer from './EmojiContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { loadEmojis, loadCategories, loadUsersSavedEmojis } from '../../store/middleware/apiEmojiSearch';
import { validateSession } from '../../store/middleware/serverAuth';
import Login from '../../auth/Login';
import Registration from '../../auth/Registration';
import Header from '../../static/components/Header';
import NotFound from '../../static/components/NotFound';

class App extends Component {

  //todo: inside this lifecycle method I'm loading the emojis and categories to work with later on throughout the application
  componentDidMount() {
    //todo: getting the below methods from props
    const { loadUsersEmojis, loadEmojis, loadCategories, validateSession, loggedInStatus } = this.props
    loadEmojis()
    loadCategories()
    validateSession(loggedInStatus)
    setTimeout(() => loadUsersEmojis(), 5000)
  }

  render() {
    const { userData } = this.props
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch >
            <Route
              path='/login'
              render={(props) => {
                return userData.logged_in ? <Redirect to="/emojis" /> : <Login {...props} />
              }} 
            />

            <Route
              path='/signup'
              render={(props) => {
                return userData.logged_in ? <Redirect to="/emojis" /> : <Registration {...props} />
              }}
            />
            
            <Route
                path='/emojis'
                render={(props) => <EmojiContainer {...props} />} 
            />

            <Route path="/not_found" component={NotFound} />

            <Redirect to="/not_found" />

          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.authRed.loggedInStatus,
  userData: state.authRed.userData,
  loading: state.emojisRed.loading
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
