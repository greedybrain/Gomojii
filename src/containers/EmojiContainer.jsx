import React, { Component } from 'react';
import EmojiSearchForm from '../components/EmojiSearchForm';
import EmojiList from '../components/EmojiList';
import SidebarFilter from '../components/SidebarFilter';

class EmojiContainer extends Component {
     constructor(props) {
          super(props)

          this.BASE_URL = "https://emoji-api.com/emojis?"
          this.ACCESS_KEY = "access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321"

          this.state = {
               emojis: [],
               emojisCategories: [],
               emojisFilteredState: [],
               emojiSearchResults: []
          }
     }

     componentDidMount() {
          this.handleGetEmojis()
          this.handleGetCategories()
     }

     handleGetEmojis = () => {
          // THIS INITIAL FETCH IS TO GET ALL EMOJIS 
          fetch(this.BASE_URL + this.ACCESS_KEY)
               .then(res => res.json())
               .then(emojiData => {
                    this.setState({
                         emojis: emojiData
                    })
               })
     }

     handleGetCategories = () => {
          // https://emoji-api.com/categories?access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321
          fetch("https://emoji-api.com/categories?" + this.ACCESS_KEY)
               .then(res => res.json())
               .then(emojiCategoryData => {
                    const categories = emojiCategoryData.filter(category => category.slug !== "component")
                    this.setState({
                         emojisCategories: categories
                    })
               })
     }

     handleEmojiSearch = (query) => {
          const { emojis } = this.state
          const searchResults = emojis.filter(emoji => emoji.character.includes(query) || emoji.unicodeName.includes(query))
          this.setState({
               emojiSearchResults: searchResults,
               emojisFilteredState: []
          });
     }

     handleAllEmojiClick = event => {
          const { emojis } = this.state
          if (event.target.textContent === "All Emojis") {
               this.setState({
                    emojisFilteredState: emojis
               });
          }
     }

     handleCategoryClick = event => {
          const { emojis } = this.state
          this.setState({
               emojisFilteredState: [...emojis.filter(emoji => emoji.group === event.target.dataset.name)],
               emojiSearchResults: []
          })
     }

     render() {
          let { emojis, emojisCategories, emojisFilteredState, emojiSearchResults } = this.state
          return (
               <div className = "wrapper animate__animated animate__bounceInDown">
                    <div className="sidebar-nav">
                         <SidebarFilter
                              handleAllEmojiClick={this.handleAllEmojiClick}
                              handleCategoryClick={this.handleCategoryClick}
                              emojisCategories={emojisCategories} />
                    </div>
                    <div className="form-and-list-cont">
                         <div className="form">
                              <EmojiSearchForm
                                   handleEmojiSearch={this.handleEmojiSearch} />
                         </div>
                         <div className="emoji-list">
                              <EmojiList
                                   emojis={emojis}
                                   emojisFilteredState={emojisFilteredState}
                                   emojiSearchResults={emojiSearchResults} />
                         </div>
                    </div>
               </div>
          );
     }
}

export default EmojiContainer;