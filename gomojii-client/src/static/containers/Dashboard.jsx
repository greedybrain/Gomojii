import React from 'react'
import DashSidebarNav from '../components/DashSidebarNav'
import DashWidgetSection from '../components/DashWidgetSection'

const Dashboard = () => {
     return (
          <div className="dashboard"> 
               <div className="dash-sidebar-nav">
                    <DashSidebarNav />     
               </div>    
               <div className="dash-mid-section">
                    DashMidSection
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
