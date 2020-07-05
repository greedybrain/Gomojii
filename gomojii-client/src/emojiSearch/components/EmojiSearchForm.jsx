import React from 'react';
import { queryEmojis } from '../../store/manageEmojisReducer';
import { useSelector, useDispatch } from 'react-redux';


const EmojiSearchForm = () => {
     //todo: using the react hooks useSelector and useDispatch to access the store
     const emojis = useSelector(state => state.emojisRed.emojis)
     const dispatch = useDispatch()

     //todo: this fucntion handles the querying through emojis as a user types something 
     const handleEmojiSearch = event => {
          const query = event.target.value
          setTimeout(() => dispatch(queryEmojis(query, emojis)), 1000)
          
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