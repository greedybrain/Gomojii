import React, { Component } from 'react';
import EmojiSearchForm from './EmojiSearchForm';
import EmojiList from './EmojiList';

class EmojiContainer extends Component {
     constructor(props) {
          super(props)

          this.state = {
               emojis: []
          }
     }
     
     static ALL_EMOJIS_ENDPOINT = `https://emoji-api.com/emojis?access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321`

     componentDidMount() {
          // THIS INITIAL FETCH IS TO GET ALL EMOJIS 
          fetch(EmojiContainer.ALL_EMOJIS_ENDPOINT)
               .then(res => res.json())
               .then(emojiData => {
                    this.setState({
                         emojis: emojiData
                    })
               })
     }

     handleEmojiSearch = query => {
          // THIS FETCH WILL ONLY RETRIEVE THE EMOJIS BASED ON A QUERY 
          fetch(`https://emoji-api.com/emojis?search=${query}&access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321`)
               .then(res => res.json())
               .then(searchedData => {
                    this.setState({
                         emojis: searchedData
                    })
               })
     }

     render() {
          const {emojis} = this.state
          return (
               <div>
                    <EmojiSearchForm handleEmojiSearch={this.handleEmojiSearch} />
                    <EmojiList emojis={emojis} />
               </div>
          );
     }
}

export default EmojiContainer;