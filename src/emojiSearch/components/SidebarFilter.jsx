import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../static/components/Logo';
import { filterEmojis } from '../../store/emojiSearch';

const SidebarFilter = ({ handleCategoryClick, handleAllEmojiClick }) => {
     const emojis = useSelector(state => state.emojis)
     const dispatch = useDispatch()
     const emojisCategories = useSelector(state => state.emojisCategories)

     const refEmojis = ["😃", "👩🏼‍🤝‍👨🏽", "🐶", "🍟", "🏔️", "🎳", "⌚", "♿", "🏁"];
     const customSlugs = ['Smileys', 'People & Body', 'Animal & Nature', 'Food & Drink', 'Travel', 'Activities', 'Items', 'Symbols', 'Flags']

     handleCategoryClick = event => {
          dispatch(filterEmojis(event.target.dataset.name, emojis))
     }
     
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
     return ( 
          <>   
               <Logo />
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
                    <span role="img" aria-label="copyright emoji">©️</span> 2020 EmojiWorld
               </div>
          </>
     );
}

export default SidebarFilter;