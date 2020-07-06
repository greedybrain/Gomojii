//! AUTH - REDUCER

//todo: setting my initial state for user authentication
const initialState = {
     userData: {},
     loggedInStatus: "NOT_LOGGED_IN",
}

//todo: this is my reducer handling all types of emojiSearch functions eg. adding emojis and searching through them
export default function manageAuth(state = initialState, action) {
     switch (action.type) {
          case PROCEED_IF_LOGGED_IN:
               return {
                    ...state,
                    userData: action.payload.userData,
                    loggedInStatus: "LOGGED_IN"
               }
          case SIGNUP_USER:
               return {
                    ...state,
                    userData: action.payload.userData,
                    loggedInStatus: "LOGGED_IN"
               }
          case LOGIN_USER:
               return {
                    ...state,
                    userData: action.payload.userData,
                    loggedInStatus: "LOGGED_IN",
               }
          case LOGOUT_USER:
               return {
                    ...state,
                    userData: {},
                    loggedInStatus: "NOT_LOGGED_IN"
               }
          default:
               return state
     }
}

//! AUTH - ACTION TYPES
const PROCEED_IF_LOGGED_IN = "PROCEED_IF_LOGGED_IN"
const SIGNUP_USER = "SIGNUP_USER"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"

//! AUTH - ACTION CREATORS

//todo: checking if user is already logged in
export const proceedIfUserLoggedIn = (userData, loggedInStatus) => ({
     type: PROCEED_IF_LOGGED_IN,
     payload: {
          userData,
          loggedInStatus
     }
})

//todo: signup user
export const signupUser = userData => ({
     type: SIGNUP_USER,
     payload: {
          userData
     }
})

//todo: login user
export const loginUser = userData => ({
     type: LOGIN_USER,
     payload: {
          userData
     }
})

//todo: logout user
export const logoutUser = () => ({
     type: LOGOUT_USER
})

//!################################################