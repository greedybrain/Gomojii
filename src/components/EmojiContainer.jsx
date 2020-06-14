import React, { Component } from 'react';
import EmojiSearchForm from './EmojiSearchForm';

class EmojiContainer extends Component {
     constructor(props) {
          super(props)

          this.state = {
               emojis: []
          }
     }
     
     static ACCESS_KEY = "d03843fe82d5fde7ef6ac67d80fa41b12aae4321"
     static ALL_EMOJIS_ENDPOINT = `https://emoji-api.com/emojis?access_key=${this.ACCESS_KEY}`

     componentDidMount() {
          fetch(EmojiContainer.ALL_EMOJIS_ENDPOINT)
               .then(res => res.json())
               .then(emojiData => {
                    this.setState({
                         emojis: emojiData
                    })
               })
     }

     handleEmojiSearch = query => {
          fetch(`https://emoji-api.com/emojis?search=${query}&access_key=${EmojiContainer.ACCESS_KEY}`)
               .then(res => res.json())
     }

     render() {
          return (
               <div>
                    <EmojiSearchForm handleEmojiSearch={this.handleEmojiSearch} />
               </div>
          );
     }
}

export default EmojiContainer;