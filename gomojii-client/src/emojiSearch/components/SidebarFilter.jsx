import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { filterEmojis } from '../../store/manageEmojisReducer';

const SidebarFilter = () => {
     //todo: using react hooks useDispatch and useSelector to avoid using the connect function to attach this component to the store
     const state = useSelector(state => ({
          emojis: state.emojisRed.emojis,
          emojisCategories: state.emojisRed.emojisCategories
     }))
     const dispatch = useDispatch()

     //todo: customization of category names and icons
     const refEmojis = ["😃", "👩🏼‍🤝‍👨🏽", "🐶", "🍟", "🏔️", "🎳", "⌚", "♿", "🏁"];
     const customSlugs = ['Smileys', 'People & Body', 'Animal & Nature', 'Food & Drink', 'Travel', 'Activities', 'Items', 'Symbols', 'Flags']

     const { emojis, emojisCategories } = state
     
     //todo: this handles the rendering of all emojis when the item "All Emojis" is clicked
     const handleAllEmojiClick = event => {
          if (event.target.textContent === "All Emojis") dispatch(filterEmojis(event.target.textContent, emojis))
     }

     //todo: this handles the rendering of a particular set of emojis when a category is clicked
     const handleCategoryClick = event => {
          const category = event.target.dataset.name
          dispatch(filterEmojis(category, emojis))
     }
     
     //todo: this creates LI tags of all categories in the sidebar filter and attaches the necessary event listeners to each one.
     const renderCategoriesList = emojisCategories.map((cat, index) => {
          return (
               <li
                    onClick={handleCategoryClick}
                    key={index}
                    data-name={cat.slug}
               >
                    <div
                         className="acc-emoji"
                         data-name={cat.slug}
                    >
                         {refEmojis[index]}
                    </div>
                    <div
                         className="category"
                         data-name={cat.slug}
                    >
                         {customSlugs[index]}
                    </div>
               </li>
          )
     })

     //todo: this handles the actual rendering of all mapped LI's
     return ( 
          <> 
               <h2>Search Emojis <span role="img" aria-label="smiling emoji">😀</span></h2>
               <ul>
                    <li
                         onClick={handleAllEmojiClick}
                         data-name="all-emojis"
                    >
                         <div
                              className="acc-emoji"
                              data-name="all-emojis">
                              <span role="img" aria-label="present emoji">💁🏽</span>
                         </div>
                         <div
                              className="category"
                              data-name="all-emojis"
                         >
                              All Emojis
                         </div>
                    </li>
                    {renderCategoriesList}
               </ul>
               <div className="side-footer">
                    <span role="img" aria-label="copyright emoji">©️</span> 2020 GoMojii
               </div>
          </>
     );
}

export default SidebarFilter;