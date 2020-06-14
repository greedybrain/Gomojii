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
          <div>
               <form onSubmit={handleOnSubmit}>
                    <input onChange={handleOnChange} type="search" />
                    <button type="submit">Search</button>
               </form>
          </div>
     );
}

export default EmojiSearchForm;