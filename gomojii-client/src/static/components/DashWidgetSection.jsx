import React from 'react'
import DashWidgetSearchForm from './DashWidgetSearchForm'
import WidgetsList from './WidgetsList'

const DashWidgetSection = () => {
     return (
          <>
               <h3>Widgets</h3>
               <div className="widget-search-form">
                    <DashWidgetSearchForm />
               </div>
               <div className="widgets">
                    <WidgetsList />
               </div>
          </>
     )
}

export default DashWidgetSection
