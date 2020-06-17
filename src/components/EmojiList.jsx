import React from 'react';

const EmojiList = ({ emojis, emojisFiltered, emojiSearchResults }) => {
     // took me forever to come up with this technique
     const accordingEmojis = () => {
          if (emojiSearchResults.length > 0) {
               emojis = emojiSearchResults
          } else if (emojisFiltered.length > 0) {
               emojis = emojisFiltered
          }
          return emojis
     }

     const currEmojis = accordingEmojis()

     const renderEmojisOrNotFoundMessage =
          // if emojis is truthy
          currEmojis ? // then ...
               currEmojis
                    .map((emoji, index) => {
                         return (
                              <li className="emoji animate__animated animate__fadeIn animate__fast" key={index} title={emoji.unicodeName}>{emoji.character}</li>
                         )
                    })
               : //otherwise
               <li className="not-found-msg">
                    <div className="message">
                         No related emojis found
                    </div>
                    <div className="emoji-msg">
                         <h1>
                              <span role="img" aria-label="wonder emoji">🤔</span>
                         </h1>
                    </div>
               </li>

     return ( 
          <ul>
               <li className="results">
                    Results: {currEmojis.length}
               </li>
               { renderEmojisOrNotFoundMessage }
          </ul>
     );
}

export default EmojiList;