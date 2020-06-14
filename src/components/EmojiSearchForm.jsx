import React, { useState } from 'react';

const EmojiSearchForm = ({ handleEmojiSearch }) => {

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