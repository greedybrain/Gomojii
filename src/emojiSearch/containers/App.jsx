import React, { Component } from 'react';
import EmojiContainer from './EmojiContainer';
import { connect } from 'react-redux';
import { loadEmojis, loadCategories } from '../../store/middleware/apiEmojiSearch';

class App extends Component {

  componentDidMount() {
    const { loadEmojis, loadCategories } = this.props
    loadEmojis()
    loadCategories()
  }

  render() {
    const { emojis, emojisCategories, emojiSearchResults } = this.props
    return (
      <div className="App">
        <EmojiContainer
          emojis={emojis}
          emojisCategories={emojisCategories} 
          emojiSearchResults={emojiSearchResults}  
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    emojis: state.emojis,
    emojisCategories: state.emojisCategories,
    emojiSearchResults: state.emojiSearchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadEmojis: () => dispatch(loadEmojis()),
    loadCategories: () => dispatch(loadCategories()),
    // queryEmojis: (query, emojis) => dispatch(queryEmojis(query, emojis))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
