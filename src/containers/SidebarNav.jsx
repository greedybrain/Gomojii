import React from 'react';
import Logo from '../components/Logo';

const SidebarNav = ({ emojisCategories, handleCategoryClick }) => {
     // Inside of the sidenav we will have links/buttons displaying the names of each category/group

     const renderCategoriesList = emojisCategories.map((cat, index) => {
          const slugCaps = cat.slug.slice(0,1).toUpperCase() + cat.slug.slice(1)
          return <li onClick={handleCategoryClick} key={index}>{slugCaps}</li>
     })
     return ( 
          <>   
               <Logo />
               <ul>
                    { renderCategoriesList }
               </ul>
          </>
     );
}

export default SidebarNav;