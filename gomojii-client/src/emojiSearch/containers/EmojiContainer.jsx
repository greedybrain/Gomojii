import React from 'react';
import EmojiSearchForm from '../components/EmojiSearchForm';
import EmojiList from '../components/EmojiList';
import SidebarFilter from '../components/SidebarFilter';
import { useDispatch } from 'react-redux';
import { endUsersSession } from '../../store/middleware/serverAuth';
import Navbar from '../../static/components/Navbar';

const EmojiContainer = ({ showSpinner }) => {
     const dispatch = useDispatch()

     const handleLogout = () => {
          dispatch(endUsersSession())
     }

     //todo: this is just the container that holds all other parts of the emojiSearch feature
     return (
          <>
               <Navbar handleLogout={handleLogout} />
               {/* animate__animated animate__bounceInDown */}
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