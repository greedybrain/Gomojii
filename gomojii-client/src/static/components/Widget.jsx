import React from 'react'
import { Link } from 'react-router-dom'

const Widget = ({ widget }) => {

     return (
          <>
               <div className="overlay"></div>
               <Link to={widget.path}>
                    <li className="widget-cont">
                         <div className="widget-icon">
                              <span>{ widget.icon }</span>
                         </div>
                         <div className="widget-name">
                              <span>{ widget.name }</span>
                         </div>
                    </li>
               </Link>
          </>
     )
}

export default Widget
