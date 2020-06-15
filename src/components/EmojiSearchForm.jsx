import React, { useState } from 'react';

const EmojiSearchForm = ({ handleEmojiSearch }) => {
     // Using 'useState' hook to mimic a classes state like behavior 
     // I create my state var, then my setMethod that will be updating it
     const [query, setQuery] = useState('')

     const handleOnChange = event => {
          setQuery(event.target.value)
     }

     const handleOnSubmit = event => {
          event.preventDefault()
          
          handleEmojiSearch(query)
          setQuery('')

          event.target.reset()
     }

     return (
          <form onSubmit={handleOnSubmit}>
               <div className="search-cont">
                    <input onChange={handleOnChange} type="search" placeholder="Describe emoji in a few words" />
                    <button type="submit">🔍</button>
               </div>
          </form>
     );
}

export default EmojiSearchForm;