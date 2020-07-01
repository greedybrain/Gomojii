//! EMOJI SEARCH FEATURE - REDUCER

//todo: setting my initial state for the emojiSearch Feature
const initialState = {
     emojis: [],
     emojisCategories: [],
     emojisFilteredState: [],
     emojiSearchResults: [],
     currentUsersSavedEmojis: [],
     emojisLoading: false,
     categoriesLoading: false,
     // lastEmojisFetch: null,
     // lastCategoriesFetch: null
}

//todo: this is my reducer handling all types of emojiSearch functions eg. adding emojis and searching through them
export default function manageEmojis(state = initialState, action) {
     switch (action.type) {
          case START_LOAD_EMOJIS_REQUEST:
               return {
                    ...state,
                    emojisLoading: true,
               }
          case ADD_EMOJIS:
               return {
                    ...state,
                    emojis: action.payload.emojis,
                    emojisLoading: false,
                    // lastEmojisFetch: Date.now()
          }
          case USER_SAVES_EMOJI:
               return {
                    ...state,
                    currentUsersSavedEmojis: [...state.currentUsersSavedEmojis, action.payload.emoji]
               }
          case LOAD_ALL_USERS_SAVED_EMOJIS:
               return {
                    ...state,
                    currentUsersSavedEmojis: action.payload.currentUsersSavedEmojis
               }
          case START_LOAD_CATEGORIES_REQUEST:
               return {
                    ...state,
                    categoriesLoading: true,
               }
          case ADD_CATEGORIES:
               return {
                    ...state,
                    emojisCategories: action.payload.emojisCategories,
                    categoriesLoading: false,
                    // lastCategoriesFetch: Date.now()
               }
          case QUERY_EMOJIS:
               return {
                    ...state,
                    emojiSearchResults: action.payload.emojiSearchResults,
                    emojisFilteredState: []
               }
          
          case FILTER_EMOJIS:
               return {
                    ...state,
                    emojisFilteredState: action.payload.emojisFilteredState,
                    emojiSearchResults: []
               }
          default:
               return state;
     }
}

//! EMOJI SEARCH FEATURE - ACTION TYPES
const START_LOAD_EMOJIS_REQUEST = "START_LOAD_EMOJIS_REQUEST"
const ADD_EMOJIS = "ADD_EMOJIS"
const USER_SAVES_EMOJI = "USER_SAVES_EMOJI"
const LOAD_ALL_USERS_SAVED_EMOJIS = "LOAD_ALL_USERS_SAVED_EMOJIS"
const START_LOAD_CATEGORIES_REQUEST = "START_LOAD_CATEGORIES_REQUEST"
const ADD_CATEGORIES = "ADD_CATEGORIES"
const QUERY_EMOJIS = "QUERY_EMOJIS"
const FILTER_EMOJIS = "FILTER_EMOJIS"

//! EMOJI SEARCH FEATURE - ACTION CREATORS

//todo: load and add emojis 
export const startLoadEmojisRequest = () => ({
     type: START_LOAD_EMOJIS_REQUEST
})

export const addEmojis = emojis => ({
     type: ADD_EMOJIS,
     payload: {
          emojis
     }
})

//todo: user saves emoji
export const userSavesEmoji = emoji => ({
     type: USER_SAVES_EMOJI,
     payload: {
          emoji
     }
})

export const loadAllUsersSavedEmojis = currentUsersSavedEmojis => ({
     type: LOAD_ALL_USERS_SAVED_EMOJIS,
     payload: {
          currentUsersSavedEmojis
     }
})

//todo: load and add categories 
export const startLoadCategories = () => ({
     type: START_LOAD_CATEGORIES_REQUEST
})

export const addCategories = emojisCategories => ({
     type: ADD_CATEGORIES,
     payload: {
          emojisCategories: emojisCategories.filter(cat => cat.slug !== 'component')
     }
})

//todo: query through emojis 
export const queryEmojis = (query, emojis) => ({
     type: QUERY_EMOJIS,
     payload: {
          emojiSearchResults: emojis.filter(emoji => emoji.unicodeName.startsWith(query) || emoji.unicodeName.includes(query))
     }
})

//todo: filter through emojis
export const filterEmojis = (catName, emojis) => ({
     type: FILTER_EMOJIS,
     payload: {
          emojisFilteredState: emojis.filter(emoji => emoji.group === catName)
     }
})

//!################################################