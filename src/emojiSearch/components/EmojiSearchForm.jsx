import React from 'react';
import { queryEmojis } from '../../store/emojiSearch';
import { useSelector, useDispatch } from 'react-redux';


const EmojiSearchForm = () => {
     const emojis = useSelector(state => state.emojis)
     const dispatch = useDispatch()

     const handleEmojiSearch = event => {
          const query = event.target.value
          dispatch(queryEmojis(query, emojis))
     }

     const handleSubmit = event => {
          event.preventDefault()
     }

     return (
          <form onSubmit={ handleSubmit } >
               <div className="search-cont">
                    <input
                         onChange={ handleEmojiSearch }
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