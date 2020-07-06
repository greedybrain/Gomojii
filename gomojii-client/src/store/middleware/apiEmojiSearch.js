//! importing necessary files and/or libraries
import { retrieveFrom } from '../../config'
import axios from 'axios'
import {
     startLoadEmojisRequest,
     addEmojis, 
     startLoadCategories, 
     addCategories,
     userSavesEmoji,
     addEmojiSaveError,
     addEmojiSaveSuccessMessage
} from '../manageEmojisReducer'
import { helper } from '../../helper'

//todo: returns my endpoint urls from my config file
//todo: After retrieving the endpoints and access key, I pick them out using destructuring 
const { baseEndpoint, categoriesUrl } = retrieveFrom.thirdPartyApiEndpoints
const { baseUrl, users_path, emojis_path } = retrieveFrom.backendServerEndpoints
const { accessKey } = retrieveFrom.security
const { currentUser } = helper

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
          const { userData } = getState().authRed
          const response = await axios
               .post(
                    `${baseUrl}${users_path}/${currentUser(userData).id}${emojis_path}`,
                    { slug, character },
                    { withCredentials: true }
               )
          let emojiData; 
          let successMsg;
          let errorCaught;
          if (response.data.emoji) {
               emojiData = response.data.emoji
               successMsg = response.data.success
               dispatch(addEmojiSaveSuccessMessage(successMsg))
               dispatch(userSavesEmoji(emojiData))
          } else {
               errorCaught = response.data.error
               dispatch(addEmojiSaveError(errorCaught))
          }
     }
}