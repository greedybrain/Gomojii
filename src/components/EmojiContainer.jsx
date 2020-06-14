import React, { Component } from 'react';

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

     render() {
          return (
               <div>
                    EmojiContainer
               </div>
          );
     }
}

export default EmojiContainer;