import React from 'react';

const EmojiList = ({ emojis }) => {
     const renderEmojisOrNotFoundMessage =
          // if emojis is truthy
          emojis ? // then ...
               emojis
                    .map((emoji, index) => {
                         return <li key={index} title={emoji.unicodeName}>{emoji.character}</li>
                    })
               : //otherwise
                    <li class="not-found-msg">No related emojis found</li>

     return ( 
          <ul>
               { renderEmojisOrNotFoundMessage }
          </ul>
     );
}

export default EmojiList;