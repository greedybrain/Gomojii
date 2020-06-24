//! importing necessary files and/or libraries
import React, { Component } from 'react';
import EmojiContainer from './EmojiContainer';
import { connect } from 'react-redux';
import { loadEmojis, loadCategories } from '../../store/middleware/apiEmojiSearch';

class App extends Component {

  //todo: inside this lifecycle method I'm loading the emojis and categories to work with later on throughout the application
  componentDidMount() {
    //todo: getting the below methods from props
    const { loadEmojis, loadCategories } = this.props
    loadEmojis()
    loadCategories()
  }

  render() {
    return (
      <div className="App">
        <EmojiContainer />
      </div>
    );
  }
}

//todo: mapping my dispatch to props 
const mapDispatchToProps = dispatch => ({
    loadEmojis: () => dispatch(loadEmojis()),
    loadCategories: () => dispatch(loadCategories())
})

//todo: using connect() allows me to 'connect' a component to the store
export default connect(null, mapDispatchToProps)(App);
