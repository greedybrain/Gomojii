import React from 'react'

const DashWidgetSearchForm = () => {
     return (
          <form onSubmit={ (event) => event.preventDefault() } >
               <div className="widget-search-cont">
                    <input
                         type="search"
                         placeholder="Search widgets" 
                    />
                    <button type="submit">
                         <span
                              role="img"
                              aria-label="magnifying glass emoji">
                              🔍
                         </span>
                    </button>
               </div>
          </form>
     )
}

export default DashWidgetSearchForm
