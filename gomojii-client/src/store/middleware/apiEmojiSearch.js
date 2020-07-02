//! importing necessary files and/or libraries
import { retrieveFrom } from '../../config'
import axios from 'axios'
import {
     startLoadEmojisRequest,
     addEmojis, 
     startLoadCategories, 
     addCategories,
     userSavesEmoji,
     addAllUsersSavedEmojis
} from '../manageEmojisReducer'

//todo: returns my endpoint urls from my config file
//todo: After retrieving the endpoints and access key, I pick them out using destructuring 
const { baseEndpoint, categoriesUrl } = retrieveFrom.thirdPartyApiEndpoints
const { baseUrl, users_path, emojis_path } = retrieveFrom.backendServerEndpoints
const { accessKey } = retrieveFrom.security

export const loadEmojis = () => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Fetching all emojis after a successful load
     return async dispatch => {
          dispatch(startLoadEmojisRequest())
          const response = await axios({ url: baseEndpoint + accessKey })
          const emojis = response.data
          dispatch(addEmojis(emojis))
     }
}

export const loadCategories = () => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Fetching all categories after a successful load
     return async dispatch => {
          dispatch(startLoadCategories())
          const response = await axios({ url: categoriesUrl + accessKey })
          const categories = response.data
          dispatch(addCategories(categories))
     }
}

export const saveEmoji = (slug, character) => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Fetch post request to save an emoji
     return async (dispatch, getState) => {
          const { data } = getState().authRed.userData.user
          const response = await axios
               .post(
                    `${baseUrl}${users_path}/${data.id}${emojis_path}`,
                    { slug, character },
                    { withCredentials: true }
               )
          const emojiData = response.data.emoji.data
          dispatch(userSavesEmoji(emojiData))
     }
}

export const loadUsersSavedEmojis = () => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Fetch request to get all of a current users saved emojis
     return async (dispatch, getState) => {
          const { userData } = getState().authRed
          // if (userData.user !== undefined) {
               const response = await axios(
                    {
                         url: `${baseUrl}${users_path}/${userData.user.data.id}`
                    },
                    { withCredentials: true }
               )
               const savedEmojis = response.data.user.data.attributes.emojis
               dispatch(addAllUsersSavedEmojis(savedEmojis))
          // } else {
          //      return null
          // }
          
     }    
}