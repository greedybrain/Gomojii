import React from 'react';
import EmojiSearchForm from '../components/EmojiSearchForm';
import EmojiList from '../components/EmojiList';
import SidebarFilter from '../components/SidebarFilter';
import { useDispatch, useSelector } from 'react-redux';
import { endUsersSession } from '../../store/middleware/serverAuth';
import Logout from '../../auth/Logout';
import { Link } from 'react-router-dom';

const EmojiContainer = (props) => {
     const dispatch = useDispatch()
     const state = useSelector(state => ({
          user: state.authRed.user
     }))
     
     const { user } = state

     const handleLogout = () => {
          dispatch(endUsersSession())
     }

     //todo: this is just the container that holds all other parts of the emojiSearch feature
     return (
          <>
               <ul className="nav-btns">
                    {
                         user.logged_in ?
                              <li className="logout-btn">
                                   <span role="img" aria-label="peace sign emoji">✌</span><Logout handleLogout={handleLogout} />
                              </li>
                              :
                              <>
                                   <li className="login-btn">
                                        <Link to="/login"><span role="img" aria-label="woman on computer emoji">👩‍💻</span> Login</Link>
                                   </li>
                                   <li className="signup-btn">
                                        <Link to="/signup"><span role="img" aria-label="woman raising hand">🙋</span> Signup</Link>
                                   </li>
                              </>

                    }
               </ul>
               <div className="wrapper animate__animated animate__bounceInDown">
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