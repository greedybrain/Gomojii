import React from 'react';

const Emoji = ({ emoji }) => {
     return ( 
          <li className="emoji animate__animated animate__fadeIn animate__fast" title={ emoji.unicodeName }>{ emoji.character }</li>
     );
}

export default Emoji;