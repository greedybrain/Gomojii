import React from 'react';
import { queryEmojis } from '../../store/emojiSearch';
import { useSelector, useDispatch } from 'react-redux';


const EmojiSearchForm = () => {
     //todo: using the react hooks useSelector and useDispatch to access the store
     const emojis = useSelector(state => state.emojis)
     const dispatch = useDispatch()

     //todo: this fucntion handles the querying through emojis as a user types something in
     const handleEmojiSearch = event => {
          const query = event.target.value
          dispatch(queryEmojis(query, emojis))
     }

     //todo: rendering form
     return (
          <form onSubmit={ (event) => event.preventDefault() } >
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