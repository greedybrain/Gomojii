//! importing necessary files and/or libraries
import { retrieveFrom } from '../../config'
import {
     startLoadEmojisRequest,
     addEmojis, 
     startLoadCategories, 
     addCategories
} from '../emojiSearch'

//todo: returns my endpoint urls from my config file
//todo: After retrieving the endpoints and access key, I pick them out using destructuring 
const { baseUrl, categoriesUrl } = retrieveFrom.endpoints
const { accessKey } = retrieveFrom.security

export const loadEmojis = () => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Fetching all emojis after a successful load
     return async dispatch => {
          dispatch(startLoadEmojisRequest())
          const response = await fetch(baseUrl + accessKey)
          const emojis = await response.json()
          dispatch(addEmojis(emojis))
     }
}

export const loadCategories = () => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Fetching all categories after a successful load
     return async dispatch => {
          dispatch(startLoadCategories())
          const response = await fetch(categoriesUrl + accessKey)
          const categories = await response.json()
          dispatch(addCategories(categories))
     }
}