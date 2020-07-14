import React from 'react'
import { useSelector } from 'react-redux'
import DashSidebarNav from '../components/DashSidebarNav'
import DashWidgetSection from '../components/DashWidgetSection'

const Dashboard = () => {
     const currentUsersSavedEmojis = useSelector(state => state.emojisRed.currentUsersSavedEmojis)
     // debugger
     const renderUsersEmojis = currentUsersSavedEmojis.length > 0 && currentUsersSavedEmojis.map((emoji, index) => {
          // debugger
          return <li key={index}>{ emoji.character }</li>
     })
     return (
          <div className="dashboard"> 
               <div className="dash-sidebar-nav">
                    <DashSidebarNav />     
               </div>    
               <div className="dash-mid-section">
                    <h3>At a Glance</h3>
                    <ul>
                         { renderUsersEmojis }
                    </ul>
               </div>
               <div className="widget-section">  
                    <DashWidgetSection />
               </div>
               {/* DashMidSection
                    - Nav item as Title
                    - content pertaining to nav item ^
               WidgetSection
                    - Widgets
                    - Widget search form 
                    - Widgets list */}
          </div>
     )
}

export default Dashboard
