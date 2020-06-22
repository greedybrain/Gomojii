import React, { Component } from 'react';

class EmojiList extends Component {
     
     getEmojis() {
          let { emojis, emojisFilteredState, emojiSearchResults } = this.props
          if (emojiSearchResults !== null && emojiSearchResults.length > 0) {
               emojis = emojiSearchResults
          } else if (emojisFilteredState !== null && emojisFilteredState.length > 0) {
               emojis = emojisFilteredState
          } else {
               return emojis
          }
          return emojis
     }

     render() {
          const currEmojis = this.getEmojis().length > 0 ? this.getEmojis() : []
          const renderEmojis =
               // if emojis is truthy
               currEmojis ? // then ...
                    currEmojis
                         .map((emoji, index) => {
                              return (
                                   <li className="emoji animate__animated animate__fadeIn animate__fast" key={ index } title={ emoji.unicodeName }>{ emoji.character }</li>
                              )
                         })
                    : //otherwise
                    null
                    // <li className="not-found-msg">
                    //      <div className="message">
                    //           No related emojis found
                    //      </div>
                    //      <div className="emoji-msg">
                    //           <h1>
                    //                <span role="img" aria-label="wonder emoji">🤔</span>
                    //           </h1>
                    //      </div>
                    // </li>
          return ( 
               <ul>
                    <li className="results">
                         Results: { currEmojis !== null ? currEmojis.length : 0 }
                    </li>
                    { renderEmojis }
               </ul>
          );
     }
}

export default EmojiList;