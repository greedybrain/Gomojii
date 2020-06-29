//! importing necessary files and/or libraries
import React from 'react';
import { useSelector } from 'react-redux'
import Emoji from './Emoji';
import { retrieveFrom } from '../../config'

const EmojiList = () => {

     //todo: using react hook useSelector to retrieve 3 properties from state
     const state = useSelector(state => ({
          emojis: state.emojisRed.emojis,
          emojiSearchResults: state.emojisRed.emojiSearchResults,
          emojisFilteredState: state.emojisRed.emojisFilteredState,
          emojisLoading: state.emojisRed.emojisLoading,
          categoriesLoading: state.emojisRed.loading
     }))
     let { emojis, emojiSearchResults, emojisFilteredState } = state
     const { innyMinnyMineyMo } = retrieveFrom.customMethods

     const randomEmoji = () => {
          const randEmojiSelection = ['👿', '🤠', '🤪', '🤡', '🤖', '💩', '👻', '🤩', '🥶']
          return innyMinnyMineyMo(randEmojiSelection)
     }

     const showLoadIndicator = () => {
          if (state.emojisLoading) {
               return (
                    <div className="load-wrapper">
                         <div className="loading-indicator animate__animated animate__bounce animate__repeat-3">
                              <div className="load-heading">
                                   Summoning Emojis...
                              </div>
                              <span role="img" aria-label="heart emoji">{ randomEmoji() }</span>
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
     const renderEmojis = getEmojis().map((emoji, index) => {
          return (
               <Emoji key={index} emoji={emoji} />
          )
     })

     //todo: rendering the result amount and the actual emojis
     return (
          <>
               <div className="results">
                    {getEmojis() === null ? 0 : getEmojis().length} emojis found
               </div>
               { showLoadIndicator() }
               <ul>
                    { renderEmojis }
               </ul>
          </>
     );
}

export default EmojiList;