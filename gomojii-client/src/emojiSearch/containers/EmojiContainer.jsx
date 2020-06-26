import React from 'react';
import EmojiSearchForm from '../components/EmojiSearchForm';
import EmojiList from '../components/EmojiList';
import SidebarFilter from '../components/SidebarFilter';

const EmojiContainer = () => {

     //todo: this is just the container that holds all other parts of the emojiSearch feature
     return (
          <div className = "wrapper animate__animated animate__bounceInDown">
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
     );
}

export default EmojiContainer