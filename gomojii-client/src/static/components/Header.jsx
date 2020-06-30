import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from '../../auth/Logout';
import Logo from './Logo';

const Header = () => {
     const state = useSelector(state => ({
          user: state.authRed.user 
     }))
     const { user } = state

     return ( 
          <header>
               <div className="logo-area-header">
                    <Logo />
               </div>
               <ul className="nav-btns">
                    {
                         user.logged_in ?
                              <>
                                   <li className="username nav-link">
                                        <i className="fas fa-user user-icon"></i>
                                        { user.user.username.slice(0,1).toUpperCase() + user.user.username.slice(1)}
                                   </li>
                                   <li className="logout-btn nav-link">
                                        <span role="img" aria-label="peace sign emoji">✌</span><Logout />
                                   </li>
                              </>
                              :
                              <>
                                   <li className="login-btn nav-link">
                                        <Link to="/login"><span role="img" aria-label="woman on computer emoji">👩‍💻</span> Login</Link>
                                   </li>
                                   <li className="signup-btn nav-link">
                                        <Link to="/signup"><span role="img" aria-label="woman raising hand">🙋🏽‍♂️</span> Signup</Link>
                                   </li>
                              </>

                    }
               </ul>
          </header>
     );
}

export default Header;