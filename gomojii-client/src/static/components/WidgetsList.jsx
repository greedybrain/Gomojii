import React from 'react'
import { widgets } from '../../widgetData'
import Widget from './Widget'

const WidgetsList = () => {
     const renderWidgets = widgets.map((widget, index) => {
          return <Widget key={index} widget={widget} />
     })

     return (
          <ul>
               {renderWidgets}
               <li className="coming-soon">More coming soon...</li>
          </ul>
     )
}

export default WidgetsList
