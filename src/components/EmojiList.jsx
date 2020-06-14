import React from 'react';

const EmojiList = ({ emojis }) => {
     const renderEmojisOrNotFoundMessage =
          // if emojis is truthy
          emojis ? // then ...
               emojis
                    .map((emoji, index) => {
                         return <li key={index}>{emoji.character}</li>
                    })
               : //otherwise
                    <li>No related emojis found</li>

     return ( 
          <ul>
               { renderEmojisOrNotFoundMessage }
          </ul>
     );
}

export default EmojiList;