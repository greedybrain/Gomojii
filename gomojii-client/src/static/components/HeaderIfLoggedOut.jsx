import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const HeaderIfLoggedOut = () => {
     return (
          <header className="header-logged-out">
               <div className="logo-area-header">
                    <Logo />
               </div>
               <ul className="nav-btns">
                    <li className="home-link">
                         <NavLink activeClassName="active" to="/emojis">
                              <span className="home-btn nav-icon" role="img" aria-label="home emojis">🏠</span> Home
                         </NavLink>
                    </li>
                    <li className="login-btn nav-link">
                         <NavLink activeClassName="active" to="/login"><span role="img" aria-label="woman on computer emoji" className="nav-icon">👩‍💻</span> Login</NavLink>
                    </li>
                    <li className="signup-btn nav-link">
                         <NavLink activeClassName="active" to="/signup"><span role="img" aria-label="woman raising hand" className="nav-icon">🙋🏽‍♂️</span> Signup</NavLink>
                    </li>
               </ul>
          </header>
     )
}

export default HeaderIfLoggedOut
