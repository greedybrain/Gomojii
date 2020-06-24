import React from 'react';
import { useSelector } from 'react-redux'
import Emoji from './Emoji';

const EmojiList = () => {
     let emojis = useSelector(state => state.emojis)
     let emojiSearchResults = useSelector(state => state.emojiSearchResults)
     let emojisFilteredState = useSelector(state => state.emojisFilteredState)
     
     const getEmojis = () => {
          let validateSearchResults = emojiSearchResults !== null && emojiSearchResults !== undefined && emojiSearchResults.length > 0
          let validateFilteredState = emojisFilteredState !== null && emojisFilteredState !== undefined && emojisFilteredState.length > 0

          if (validateSearchResults) {
               emojis = emojiSearchResults
          } else if (validateFilteredState) {
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