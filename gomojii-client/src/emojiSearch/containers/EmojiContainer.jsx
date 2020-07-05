import React from 'react';
import EmojiSearchForm from '../components/EmojiSearchForm';
import EmojiList from '../components/EmojiList';
import SidebarFilter from '../components/SidebarFilter';
import EmojiSaveError from '../../static/components/EmojiSaveError';
import EmojiSaveSuccess from '../../static/components/EmojiSaveSuccess';

const EmojiContainer = () => {

     //todo: this is just the container that holds all other parts of the emojiSearch feature
     return (
          <>
               <EmojiSaveSuccess />
               <EmojiSaveError /> 
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