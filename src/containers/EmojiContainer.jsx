import React, { Component } from 'react';
import EmojiSearchForm from '../components/EmojiSearchForm';
import EmojiList from '../components/EmojiList';
import SidebarNav from './SidebarNav';

class EmojiContainer extends Component {
     constructor(props) {
          super(props)

          this.BASE_URL = "https://emoji-api.com/emojis?"
          this.ACCESS_KEY = "access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321"

          this.state = {
               emojis: [],
               emojisCategories: [],
               emojisFiltered: [],
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
          // THIS FETCH WILL ONLY RETRIEVE THE EMOJIS BASED ON A QUERY 
          fetch(this.BASE_URL + `search=${query}&` + this.ACCESS_KEY)
               .then(res => res.json())
               .then(searchedData => {
                    this.setState({
                      // THIS OVERWRITES THIS COMPONENTS EMOJIS ARRAY STATE
                         emojiSearchResults: searchedData,
                         emojisFiltered: []
                    });
               })
     }

     handleAllEmojiClick = event => {
          const { emojis } = this.state
          if (event.target.textContent === "All Emojis") {
               this.setState({
                    emojisFiltered: emojis
               });
          }
     }

     handleCategoryClick = event => {
          const { emojis } = this.state
          this.setState({
               emojisFiltered: [...emojis.filter(emoji => emoji.group === event.target.dataset.name)],
               emojiSearchResults: []
          })
     }

     render() {
          let { emojis, emojisCategories, emojisFiltered, emojiSearchResults } = this.state
          return (
               <div className = "wrapper animate__animated animate__bounceInDown">
                    <div className="sidebar-nav">
                         <SidebarNav
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
                                   emojisFiltered={emojisFiltered}
                                   emojiSearchResults={emojiSearchResults} />
                         </div>
                    </div>
               </div>
          );
     }
}

export default EmojiContainer;