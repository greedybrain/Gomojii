import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useDispatch, useSelector } from 'react-redux';
import { saveEmoji } from '../../store/middleware/apiEmojiSearch';

const Emoji = ({ emoji }) => {
     const dispatch = useDispatch()
     const state = useSelector(state => ({
          userData: state.authRed.userData
     }))
     const { emojis } = state.userData.user !== undefined ? state.userData.user.data.attributes : 0
     
     const copySuccessMsg = () => {
          alert("COPIED!")
     }
     
     const handleSaveEmoji = () => {
          const { slug, character } = emoji
          dispatch(saveEmoji(slug, character))
          emojis.length++
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