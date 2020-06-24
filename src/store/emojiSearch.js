// EMOJI SEARCH FEATURE - REDUCER
const initialState = {
     emojis: [],
     emojisCategories: [],
     emojisFilteredState: [],
     emojiSearchResults: [],
     loading: false
}

export default function manageEmojiSearch(state = initialState, action) {
     switch (action.type) {
          case START_LOAD_EMOJIS_REQUEST:
               return {
                    ...state,
                    loading: true
               }
          case ADD_EMOJIS:
               return {
                    ...state,
                    emojis: action.payload.emojis,
                    loading: false
               }
          case START_LOAD_CATEGORIES_REQUEST:
               return {
                    ...state,
                    loading: true
               }
          case ADD_CATEGORIES:
               return {
                    ...state,
                    emojisCategories: action.payload.emojisCategories,
                    loading: false
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

// EMOJI SEARCH FEATURE - ACTION TYPES
const START_LOAD_EMOJIS_REQUEST = "START_LOAD_EMOJIS_REQUEST"
const ADD_EMOJIS = "ADD_EMOJIS"
const START_LOAD_CATEGORIES_REQUEST = "START_LOAD_CATEGORIES_REQUEST"
const ADD_CATEGORIES = "ADD_CATEGORIES"
const QUERY_EMOJIS = "SEARCH_EMOJIS"
const FILTER_EMOJIS = "FILTER_EMOJIS"

// EMOJI SEARCH FEATURE - ACTION CREATORS

// load and add emojis 
export const startLoadEmojisRequest = () => ({
     type: START_LOAD_EMOJIS_REQUEST
})

export const addEmojis = emojis => ({
     type: ADD_EMOJIS,
     payload: {
          emojis
     }
})

// load and add categories 
export const startLoadCategories = () => ({
     type: START_LOAD_CATEGORIES_REQUEST
})

export const addCategories = emojisCategories => ({
     type: ADD_CATEGORIES,
     payload: {
          emojisCategories
     }
})

// query through emojis 
export const queryEmojis = (query, emojis) => {
     const searchResults = emojis.filter(emoji => emoji.unicodeName.startsWith(query) || emoji.unicodeName.includes(query))
     return {
          type: QUERY_EMOJIS,
          payload: {
               emojiSearchResults: searchResults
          }
     }
}

// filter through emojis
export const filterEmojis = (catName, emojis) => {
     const filteredResults = emojis.filter(emoji => emoji.group === catName)
     return {
          type: FILTER_EMOJIS,
          payload: {
               emojisFilteredState: filteredResults
          }
     }
}

//################################################