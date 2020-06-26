//! importing necessary files and/or libraries
import { retrieveFrom } from '../config'

//! AUTH - REDUCER

//todo: setting my initial state for user authentication
const { loggedInStatus } = retrieveFrom.userAttributes
const initialState = {
     user: {},
     loggedInStatus
}

//todo: this is my reducer handling all types of emojiSearch functions eg. adding emojis and searching through them
export default function manageAuth(state = initialState, action) {
     switch (action.type) {
          case CONFIRM_IF_LOGGED_IN: 
               return {
                    ...state,
                    user: action.payload.user,
                    loggedInStatus: "LOGGED_IN"
               }
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
          default:
               return state
     }
}

//! AUTH - ACTION TYPES
const SIGNUP_USER = "SIGNUP_USER"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"
const CONFIRM_IF_LOGGED_IN = "CONFIRM_IF_LOGGED_IN"

//! AUTH - ACTION CREATORS

//todo: checking if user is already logged in
export const checkIfUserAlreadyLoggedIn = user => ({
     type: CONFIRM_IF_LOGGED_IN,
     payload: {
          user
     }
})

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