import React from 'react';
import { queryEmojis } from '../../../Store/Actions/manageEmojisReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const EmojiSearchForm = () => {
     const [query, setQuery] = useState('')

     //todo: using the react hooks useSelector and useDispatch to access the store
     const emojis = useSelector(state => state.emojisRed.emojis)
     const dispatch = useDispatch()

     //todo: this fucntion handles the querying through emojis as a user types something 
     const handleEmojiSearch = event => {
          setQuery(event.target.value)
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