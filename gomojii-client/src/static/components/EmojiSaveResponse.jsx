import React from 'react'
import { useSelector } from 'react-redux'

const EmojiSaveResponse = () => {
     const state = useSelector(state => ({
          responseMessage: state.emojisRed.responseMessage
     }))

     return (
          <div className="emoji-save-response">
               <h1>{state.responseMessage}</h1>
          </div>
     )
}

export default EmojiSaveResponse
