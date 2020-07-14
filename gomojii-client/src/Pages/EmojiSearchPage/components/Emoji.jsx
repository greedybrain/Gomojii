import React, { useState } from 'react';
import { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useDispatch } from 'react-redux';
import { saveEmoji } from '../../../Store/Middleware/apiEmojiSearch';

const Emoji = ({ emoji }) => {
     const dispatch = useDispatch()
     const currEmoji = useRef(null)

     const showCopyOrSaveModal = event => {
          let x = event.nativeEvent.offsetX
          let y = event.nativeEvent.offsetY
          
          currEmoji.current.firstElementChild.style.display = 'grid'
          currEmoji.current.style.zIndex = "1000"
          // if (x <= 300) {
          //      currEmoji.current.firstElementChild.style.position = 'absolute'
          //      currEmoji.current.firstElementChild.style.zIndex = '6'
          //      currEmoji.current.firstElementChild.style.right = '0'
          //      currEmoji.current.firstElementChild.style.left = '20px'
          //      currEmoji.current.firstElementChild.style.borderTopLeftRadius = '20px'
          //      currEmoji.current.firstElementChild.style.borderTopRightRadius = '20px'
          //      currEmoji.current.firstElementChild.style.borderBottomRightRadius = '20px'
          //      currEmoji.current.firstElementChild.style.borderBottomLeftRadius = '0'
          // }

          console.log(`X - ${event.nativeEvent.offsetX}`)
          console.log(`Y - ${event.nativeEvent.offsetY}`)
          console.log("=============================")
     }

     const hideCopyOrSaveModal = () => {
          currEmoji.current.firstElementChild.style.display = "none";
     }

     const copySuccess = () => {
          alert('Copied!')
     }

     return ( 
          <li
               onMouseEnter={showCopyOrSaveModal}
               onMouseLeave={hideCopyOrSaveModal}
               ref={currEmoji}
               className="emoji animate__animated animate__fadeIn animate__fast"
               title={emoji.unicodeName || emoji.slug}
          >
               {emoji.character}
               <div
                    className="emoji-overlay"
               >  
                    <div className='modal-heading'>{emoji.unicodeName || emoji.slug}</div>
                    <div className="modal-body">
                         <div className="emoji-char">
                              <span role='img' aria-label={emoji.unicodeName || emoji.slug}>{emoji.character}</span>
                         </div>
                         <div className="save-copy-btns">
                              <div className="save">
                                   <button onClick={() => dispatch(saveEmoji(emoji.slug, emoji.character))}><span role="img" aria-label="floppy disk emoji">💾</span> Save</button>
                              </div>
                              <div className="copy">
                                   <CopyToClipboard text={emoji.character}>
                                        <button onClick={copySuccess}><span role="img" aria-label="clipboard emoji">📋</span> Copy</button>
                                   </CopyToClipboard>
                              </div>
                         </div>
                    </div>
               </div>
          </li>
     );
}

export default Emoji;