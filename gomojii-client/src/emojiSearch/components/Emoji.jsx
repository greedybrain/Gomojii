import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const btnStyles

const Emoji = ({ emoji }) => {
     return (  
          <li className="emoji animate__animated animate__fadeIn animate__fast" title={emoji.unicodeName}>
               {emoji.character}
               <CopyToClipboard text={emoji.character}>
                    <button style={{}}>Copy</button>
               </CopyToClipboard>
          </li>
     );
}

export default Emoji;