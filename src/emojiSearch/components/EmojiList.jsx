import React from 'react';
import Emoji from './Emoji';

const EmojiList = ({ emojis, emojisFilteredState, emojiSearchResults }) => {
     
     const getEmojis = () => {
          if (emojiSearchResults !== null && emojiSearchResults.length > 0) {
               emojis = emojiSearchResults
          } else if (emojisFilteredState !== null && emojisFilteredState.length > 0) {
               emojis = emojisFilteredState
          } else {
               return emojis
          }
          return emojis
     }

     const currEmojis = getEmojis().length > 0 ? getEmojis() : []
     const renderEmojis = currEmojis.map((emoji, index) => {
          return (
               <Emoji key={index} emoji={emoji} />
          )
     })
     return (
          <>
               <div className="results">
                    Results: {currEmojis === null ? 0 : currEmojis.length}
               </div>
               <ul>
                    { renderEmojis }
               </ul>
          </>
     );
}

export default EmojiList;