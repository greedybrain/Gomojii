import React from 'react'
import { useSelector } from 'react-redux'

const EmojiSaveSuccess = () => {
     const state = useSelector(state => ({
          saveSuccess: state.emojisRed.saveSuccess
     }))

     return (
          <div className="emoji-save-success">
               <h1>{state.saveSuccess}</h1>
          </div>
     )
}

export default EmojiSaveSuccess
