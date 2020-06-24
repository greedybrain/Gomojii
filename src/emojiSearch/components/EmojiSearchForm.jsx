import React from 'react';
import { queryEmojis } from '../../store/emojiSearch';
import { useSelector, useDispatch } from 'react-redux';


const EmojiSearchForm = () => {
     const emojis = useSelector(state => state.emojis)
     const dispatch = useDispatch()

     const handleEmojiSearch = query => {
          dispatch(queryEmojis(query, emojis))
     }

     const handleOnChange = event => {
          handleEmojiSearch(event.target.value)
     }

     const handleSubmit = event => {
          event.preventDefault()
          event.target.reset()
     }

     return (
          <form onSubmit={ handleSubmit } >
               <div className="search-cont">
                    <input
                         onChange={ handleOnChange }
                         type="search"
                         placeholder="✍  Describe emoji in a few words" 
                         
                    />
                    <button type="submit">
                         <span role="img" aria-label="magnifying glass emoji">🔍</span>
                    </button>
               </div>
          </form>
     );
}

export default EmojiSearchForm;