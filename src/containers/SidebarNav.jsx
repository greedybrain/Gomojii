import React from 'react';
import Logo from '../components/Logo';

const SidebarNav = ({ emojis, handleCategoryClick }) => {
     // Inside of the sidenav we will have links/buttons displaying the names of each category/group

     // 1- Create onclick event for each link.
     // 2- Depending on the category that was clicked we will show all emojis relating to that category by changing the emojis array state in the EmojiContainer component

     const renderSubCategories = emojis.map((emoji, index) => {
          return <li onClick={handleCategoryClick} className="category" key={index}>{emoji.group}</li>
     })

     return ( 
          <>   
               <Logo />
               <ul>
                    { renderSubCategories }
               </ul>
          </>
     );
}

export default SidebarNav;