//! AUTH - REDUCER

//todo: setting my initial state for user authentication
const initialState = {
     username: '',
     email: '',
     password: '',
     loggedInStatus: "NOT_LOGGED_IN",
     user: {}
}

//todo: this is my reducer handling all types of emojiSearch functions eg. adding emojis and searching through them
export default function manageEmojiSearch(state = initialState, action) {
     switch (action.type) {
          case SIGNUP_USER:
               return {
                    ...state,
                    user: action.payload.user,
                    loggedInStatus: "LOGGED_IN"
               }
          case LOGIN_USER:
               return {
                    ...state,
                    user: action.payload.user,
                    loggedInStatus: "LOGGED_IN",
               }
          case LOGOUT_USER:
               return {
                    ...state,
                    user: {},
                    loggedInStatus: "NOT_LOGGED_IN"
               }
     }
}

//! AUTH - ACTION TYPES
const SIGNUP_USER = "SIGNUP_USER"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"

//! AUTH - ACTION CREATORS

//todo: signup user
export const signupUser = user => ({
     type: SIGNUP_USER,
     payload: {
          user
     }
})

//todo: login user
export const loginUser = user => ({
     type: LOGIN_USER,
     payload: {
          user
     }
})

//todo: logout user
export const logoutUser = () => ({
     type: LOGOUT_USER
})

//!################################################