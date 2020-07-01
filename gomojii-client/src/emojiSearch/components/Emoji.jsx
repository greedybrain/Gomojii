import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useDispatch, useSelector } from 'react-redux';
import { saveEmoji } from '../../store/middleware/apiEmojiSearch';

const Emoji = ({ emoji }) => {
     const copySuccessMsg = () => {
          alert("COPIED!")
     }
     const dispatch = useDispatch()

     const handleSaveEmoji = () => {
          const { slug, character } = emoji
          dispatch(saveEmoji(slug, character))
     }

     return (  
          <CopyToClipboard text={emoji.character}>
               <li onClick={handleSaveEmoji} onDoubleClick={copySuccessMsg} className="emoji animate__animated animate__fadeIn animate__fast" title={emoji.unicodeName || emoji.slug}>
                    {emoji.character}
               </li>
          </CopyToClipboard>
     );
}

export default Emoji;