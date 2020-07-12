//! importing necessary files and/or libraries
import React from 'react';
import { useSelector } from 'react-redux'
import Emoji from '../components/Emoji';
import { retrieveFrom } from '../../../Tools/config'

const EmojiList = () => {

     //todo: using react hook useSelector to retrieve 3 properties from state
     const state = useSelector(state => ({
          emojis: state.emojisRed.emojis,
          emojiSearchResults: state.emojisRed.emojiSearchResults,
          emojisFilteredState: state.emojisRed.emojisFilteredState,
          emojisLoading: state.emojisRed.emojisLoading,
          categoriesLoading: state.emojisRed.loading
     }))
     let { emojis, emojiSearchResults, emojisFilteredState, emojisLoading } = state
     const { innyMinnyMineyMo } = retrieveFrom.customMethods

     const showLoadIndicatorThenRenderEmojis = () => {
          if (emojisLoading) {
               return (
                    <div className="load-wrapper">
                         <div className="loading-indicator animate__animated animate__bounce animate__repeat-3">
                              <div className="load-heading">
                                   Summoning Emojis...
                              </div>
                              <span role="img" aria-label="heart emoji">{ innyMinnyMineyMo(['👿', '🤠', '🤪', '🤡', '🤖', '💩', '👻', '🤩', '🥶']) }</span>
                         </div>
                    </div>
               )
          } else {
               return null
          }
     }
     
     const getEmojis = () => {
          //todo:validating particular properties from state 
          let validateSearchResults = emojiSearchResults !== null && emojiSearchResults !== undefined && emojiSearchResults.length > 0
          let validateFilteredState = emojisFilteredState !== null && emojisFilteredState !== undefined && emojisFilteredState.length > 0

          if (validateSearchResults) {
               emojis = emojiSearchResults ? emojiSearchResults : []
          } else if (validateFilteredState) {
               emojis = emojisFilteredState ? emojisFilteredState : []
          } else {
               return emojis
          }
          return emojis
     }

     //todo: mapping information to each emoji component which is an li
     const allEmojis = []
     getEmojis().forEach(emoji => {
          if (Object.keys(emoji).includes("variants")) {
               emoji.variants.forEach(variant => {
                    allEmojis.push(variant)
               })
          } else {
               allEmojis.push(emoji)
          }
     })
     const renderEmojis = allEmojis.map((emoji, index) => {
          return <Emoji key={index} emoji={emoji} />
     })

     //todo: rendering the result amount and the actual emojis
     return (
          <>
               <div className="directions-and-results">
                    <div className="directions">
                         Click to bookmark <span role="img" aria-label="bookmark emoji">🔖</span><span role="img" aria-label="winking emoji"> emoji 😉</span>
                    </div>
                    <div className="results">
                         {allEmojis === null ? 0 : allEmojis.length} emojis found
                    </div>
               </div>
               { showLoadIndicatorThenRenderEmojis() }
               <ul>
                    { renderEmojis }
               </ul>
          </>
     );
}

export default EmojiList;