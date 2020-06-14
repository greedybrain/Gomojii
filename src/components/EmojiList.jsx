import React from 'react';

const EmojiList = ({ emojis }) => {
     const renderErrorOrEmojis = emojis ? emojis.map((emoji, index) => {
          return <li key={index}>{emoji.character}</li>
     }) : <li>No related emojis found</li>

     return ( 
          <ul>
               { renderErrorOrEmojis }
          </ul>
     );
}

export default EmojiList;