//! AUTH - REDUCER

//todo: setting my initial state for user authentication
const initialState = {
     email: '',
     username: '',
     password: '',
     userData: {},
     loggedInStatus: "NOT_LOGGED_IN",
}

//todo: this is my reducer handling all types of emojiSearch functions eg. adding emojis and searching through them
export default function manageAuth(state = initialState, action) {
     switch (action.type) {
          case SET_USER_EMAIL:
               return {
                    ...state,
                    email: action.payload.email
               }
          case SET_USER_USERNAME: 
               return {
                    ...state,
                    username: action.payload.username
               }
          case SET_USER_PASSWORD:
               return {
                    ...state,
                    password: action.payload.password
               }
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
const SET_USER_EMAIL = "SET_USER_EMAIL"
const SET_USER_USERNAME = "SET_USER_USERNAME"
const SET_USER_PASSWORD = "SET_USER_PASSWORD"
const SIGNUP_USER = "SIGNUP_USER"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"

//! AUTH - ACTION CREATORS
export const setUserEmail = email => ({
     type: SET_USER_EMAIL,
     payload: {
          email
     }
})

export const setUserUsername = username => ({
     type: SET_USER_USERNAME,
     payload: {
          username
     }
})

export const setUserPassword = password => ({
     type: SET_USER_PASSWORD,
     payload: {
          password
     }
})

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