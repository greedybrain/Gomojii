//! importing necessary files and/or libraries
import React, { Component } from 'react';
import EmojiContainer from './EmojiContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { loadEmojis, loadCategories } from '../../store/middleware/apiEmojiSearch';
import { validateSession } from '../../store/middleware/serverAuth';
import Login from '../../auth/Login';
import Registration from '../../auth/Registration';

class App extends Component {

  //todo: inside this lifecycle method I'm loading the emojis and categories to work with later on throughout the application
  componentDidMount() {
    //todo: getting the below methods from props
    const { loadEmojis, loadCategories, validateSession, loggedInStatus } = this.props
    loadEmojis()
    loadCategories()
    validateSession(loggedInStatus)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          
          <Switch >
            
            <Route
              path='/login'
              component={Login} 
            />

            <Route 
              path='/signup'
              component={Registration}
            />

            <Route
              path='/emoji_search'
              render={(props) => <EmojiContainer {...props} />} 
            />

          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.authRed.loggedInStatus,
  user: state.authRed.user
})

//todo: mapping my dispatch to props 
const mapDispatchToProps = dispatch => ({
  loadEmojis: () => dispatch(loadEmojis()),
  loadCategories: () => dispatch(loadCategories()),
  validateSession: status => dispatch(validateSession(status))
})

//todo: using connect() allows me to 'connect' a component to the store
export default connect(mapStateToProps, mapDispatchToProps)(App);
