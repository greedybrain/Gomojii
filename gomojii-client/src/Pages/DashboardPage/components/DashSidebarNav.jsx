import React from 'react'
import { helper } from '../../../Tools/helper'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from '../../../Static/components/Footer'

const DashSidebarNav = () => {
     const userData = useSelector(state => state.authRed.userData)
     const { currentUser, userIsLoggedIn } = helper

     const renderWelcomeMessage = () => {
          return userIsLoggedIn(userData) ? currentUser(userData).username : null
     }

     return (
          <>
               <h2 className="dash-welcome"><span role="img" aria-label="wave emoji">👋🏽</span> { renderWelcomeMessage() }</h2>
               <ul>
                    <li>
                         <div className="dash-sidenav-icon">
                              <span role="img" aria-label="glance emoji">🧐</span>
                         </div>
                         <div>
                              <NavLink
                                   to="#"
                                   activeClassName="dash-sidebar-item-active">
                                   At A Glance     
                              </NavLink>
                         </div>
                    </li>
                    <li>
                         <div className="dash-sidenav-icon">
                              <span role="img" aria-label="info emoji">ℹ️</span>
                         </div>
                         <div>
                              <NavLink
                                   to="#"
                                   activeClassName="dash-sidebar-item-active">
                                   About     
                              </NavLink>
                         </div>
                    </li>
                    <li>
                         <div className="dash-sidenav-icon">
                              <span role="img" aria-label="email emoji">📩</span>
                         </div>
                         <div>
                              <NavLink
                                   to="#"
                                   activeClassName="dash-sidebar-item-active">
                                   Contact     
                              </NavLink>
                         </div>
                    </li>
                    <li>
                         <div className="dash-sidenav-icon">
                              <span role="img" aria-label="gear emoji">⚙️</span>
                         </div>
                         <div>
                              <NavLink
                                   to="#"
                                   activeClassName="dash-sidebar-item-active">
                                   Settings     
                              </NavLink>
                         </div>
                    </li>
               </ul>
               <div className="dash-sidebar-footer">
                    <Footer />
               </div>
          </>
     )
}

export default DashSidebarNav
