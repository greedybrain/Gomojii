//! importing necessary files and/or libraries
import { retrieveFrom } from '../../config'
import axios from 'axios'
import { signupUser, loginUser, logoutUser, proceedIfUserLoggedIn } from '../manageAuthReducer'
import { clearEmojisOnLogout } from '../manageEmojisReducer'

//todo: returns my endpoint urls from my config file
//todo: After retrieving the endpoints and access key, I pick them out using destructuring 
const { baseUrl, loggedIn, registrations, sessions, logout } = retrieveFrom.backendServerEndpoints

export const validateSession = (loggedInStatus) => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Checking if user is logged in
     return async dispatch => {
          const loggedInPath = baseUrl + loggedIn
          const response = await axios
               .get(
                    loggedInPath,
                    { withCredentials: true }
               )
          const userData = response.data
          if (userData.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
               loggedInStatus = "LOGGED_IN"
               dispatch(proceedIfUserLoggedIn(userData, loggedInStatus))
          } else if (!userData.logged_in && loggedInStatus === "LOGGED_IN") {
               loggedInStatus = "NOT_LOGGED_IN"
          }
     }
}

export const createNewUser = (email, username, password) => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Creating a user after a successful fetch
     return async dispatch => {
          const signupPath = baseUrl + registrations
          const response = await axios
               .post(
                    signupPath,
                    { email, username, password },
                    { withCredentials: true }
               )
          const user = response.data
          dispatch(signupUser(user))
     }
}

export const getExistingUser = (email, password) => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Retrieving existing user after successful fetch
     return async dispatch => {
          const loginPath = baseUrl + sessions
          const response = await axios
               .post(
                    loginPath,
                    { email, password },
                    { withCredentials: true }
               )
          const user = response.data
          console.log(user)
          dispatch(loginUser(user))
     }
}

export const endUsersSession = () => {
     //todo: function returned in enhanced thunk action creator 
     //todo: Creating delete request to logout a user
     return async dispatch => {
          const logoutPath = baseUrl + logout
          await axios
               .delete(
                    logoutPath,
                    { withCredentials: true }
               )
          dispatch(clearEmojisOnLogout())
          dispatch(logoutUser())
     }
}