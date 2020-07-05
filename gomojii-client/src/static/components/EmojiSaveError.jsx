import React from 'react'
import { useSelector } from 'react-redux'

const EmojiSaveError = () => {
     const state = useSelector(state => ({
          saveError: state.emojisRed.saveError
     }))

     return (
          <div className="emoji-save-error">
               <h1>{state.saveError}</h1>
          </div>
     )
}

export default EmojiSaveError
