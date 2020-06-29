import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from '../../auth/Logout';
import Logo from './Logo';

const Header = ({ handleLogout }) => {
     const state = useSelector(state => ({
          user: state.authRed.user 
     }))
     const { user } = state

     return ( 
          <header>
               <div className="logo-area">
                    <Logo />
               </div>
               <ul className="nav-btns">
                    {
                         user.logged_in ?
                              <>
                                   <div className="username">
                                        { user.user.username.slice(0,1).toUpperCase() + user.user.username.slice(1)}
                                   </div>
                                   <li className="logout-btn">
                                        <span role="img" aria-label="peace sign emoji">✌</span><Logout handleLogout={handleLogout} />
                                   </li>
                              </>
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
          </header>
     );
}

export default Header;