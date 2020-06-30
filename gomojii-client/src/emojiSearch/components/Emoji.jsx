import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Emoji = ({ emoji }) => {
     const copySuccessMsg = () => {
          alert("COPIED!")
     }
     return (  
          <CopyToClipboard text={emoji.character}>
               <li onDoubleClick={copySuccessMsg} className="emoji animate__animated animate__fadeIn animate__fast" title={emoji.unicodeName || emoji.slug}>
                    {emoji.character}
               </li>
          </CopyToClipboard>
     );
}

export default Emoji;