import React from 'react';
import EmojiSearchForm from '../components/EmojiSearchForm';
import EmojiList from '../containers/EmojiList'
import SidebarFilter from '../containers/SidebarFilter'
import EmojiSaveResponse from '../../../Static/components/EmojiSaveResponse'

const EmojiContainer = () => {

     //todo: this is just the container that holds all other parts of the emojiSearch feature
     return (
          <>
               <EmojiSaveResponse />
               <div className="wrapper">
                    <div className="sidebar-nav">
                         <SidebarFilter />
                    </div>
                    <div className="form-and-list-cont">
                         <div className="form">
                              <EmojiSearchForm />
                         </div>
                         <div className="emoji-list">
                              <EmojiList />
                         </div>
                    </div>
               </div>
          </>
     );
}

export default EmojiContainer