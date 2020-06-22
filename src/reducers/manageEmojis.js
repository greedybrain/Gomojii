const initialState = {
     emojis: [],
     emojisCategories: [],
     emojisFilteredState: [],
     emojiSearchResults: []
}

const BASE_URL = "https://emoji-api.com/emojis?"
const ACCESS_KEY = "access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321"

export default function manageEmojis(state = initialState, action) {
     switch (action.type) {
          case "GET_EMOJIS":
               fetch(BASE_URL + ACCESS_KEY)
                    .then(res => res.json())
                    .then(emojiData => {
                         this.setState({
                              emojis: emojiData
                         })
                    })
               return {
                    ...state,
                    emojis: [...emojis]
               }
          default:
               return state;
     }
}