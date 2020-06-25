//! importing necessary files and/or libraries
import { retrieveFrom } from '../../config'
import axios from 'axios'
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
          const response = await axios({ url: baseUrl + accessKey })
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