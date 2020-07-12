import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useDispatch } from 'react-redux';
import { saveEmoji } from '../../../Store/Middleware/apiEmojiSearch';

const Emoji = ({ emoji }) => {
     const dispatch = useDispatch()

     return (  
          <CopyToClipboard text={emoji.character}>
               <li
                    onClick={() => dispatch(saveEmoji(emoji.slug, emoji.character))}
                    className="emoji animate__animated animate__fadeIn animate__fast"
                    title={emoji.unicodeName || emoji.slug}
               >
                    {emoji.character}
               </li>
          </CopyToClipboard>
     );
}

export default Emoji;