import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useDispatch } from 'react-redux';
import { saveEmoji } from '../../store/middleware/apiEmojiSearch';

const Emoji = ({ emoji }) => {
     const dispatch = useDispatch()
     
     const copySuccessMsg = () => {
          // alert("COPIED!")
     }
     
     const handleSaveEmoji = () => {
          const { slug, character } = emoji
          dispatch(saveEmoji(slug, character))
     }

     return (  
          <CopyToClipboard text={emoji.character}>
               <li
                    onClick={copySuccessMsg}
                    onMouseUp={handleSaveEmoji}
                    className="emoji animate__animated animate__fadeIn animate__fast"
                    title={emoji.unicodeName || emoji.slug}
               >
                    {emoji.character}
               </li>
          </CopyToClipboard>
     );
}

export default Emoji;