import React from 'react'
import { useSelector } from 'react-redux'
import { helper } from '../../Tools/helper'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import Logout from '../../Auth/Logout'

const HeaderIfLoggedIn = () => {
     const state = useSelector(state => ({
          userData: state.authRed.userData,
          currentUsersSavedEmojis: state.emojisRed.currentUsersSavedEmojis
     }))
     const { currentUser } = helper
     const { userData, currentUsersSavedEmojis } = state

     return (
          <header className="header-logged-in">
               <div className="logo-area-header">
                    <Logo />
               </div>
               <ul className="nav-btns">
                    <li className="home-link">
                         <NavLink activeClassName="active" to="/emojis">
                              <span className="home-btn nav-icon" role="img" aria-label="home emojis">🏠</span> Home
                         </NavLink>
                    </li>
                    <li className="dashboard">
                         <NavLink activeClassName="active" to="/">
                              <span className="controller-btn nav-icon" role="img" aria-label="controller emoji">🎮</span> Dashboard
                         </NavLink>
                    </li>
                    <li className="favmojis nav-link">
                         <Link to="#">
                              <div
                                   className="loading-indicator-in-header">
                                   <span className="heart-moji" role="img" aria-label="heart emoji">❤️</span>
                                   <span className="save-count">{ currentUsersSavedEmojis.length }</span>
                              </div>
                         </Link>
                    </li>
                    <li className="username nav-link">
                         <i className="fas fa-user user-icon"></i>
                         { currentUser(userData).username }
                    </li>
                    <li className="logout-btn nav-link">
                         <span role="img" aria-label="peace sign emoji">✌</span><Logout />
                    </li>
               </ul>
          </header>
     )
}

export default HeaderIfLoggedIn
