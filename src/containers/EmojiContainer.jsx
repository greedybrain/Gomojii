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
               filtered: []
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
                    this.setState({
                         emojisCategories: emojiCategoryData
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
                         emojis: searchedData
                    })
               })
     }

     handleCategoryClick = event => {
          const { emojis } = this.state
          let filteredEmojis = [...emojis.filter(emoji => emoji.group === event.target.textContent)]
          this.setState({ filtered: filteredEmojis })
     }

     render() {
          const {emojis, emojisCategories, filtered} = this.state
          return (
               <div className="wrapper">
                    <div className="sidebar-nav">
                         <SidebarNav handleCategoryClick={this.handleCategoryClick} emojisCategories={emojisCategories} filtered={filtered} />
                    </div>
                    <div className="form-and-list-cont">
                         <div className="form">
                              <EmojiSearchForm handleEmojiSearch={this.handleEmojiSearch} />
                         </div>
                         <div className="emoji-list">
                              <EmojiList emojis={emojis} />
                         </div>
                    </div>
               </div>
          );
     }
}

export default EmojiContainer;