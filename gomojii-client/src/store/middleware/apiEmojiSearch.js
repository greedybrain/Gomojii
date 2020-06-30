//! importing necessary files and/or libraries
import { retrieveFrom } from '../../config'
import axios from 'axios'
// import moment from 'moment'
import {
     startLoadEmojisRequest,
     addEmojis, 
     startLoadCategories, 
     addCategories
} from '../manageEmojisReducer'

//todo: returns my endpoint urls from my config file
//todo: After retrieving the endpoints and access key, I pick them out using destructuring 
const { baseEndpoint, categoriesUrl } = retrieveFrom.thirdPartyApiEndpoints
const { accessKey } = retrieveFrom.security

export const loadEmojis = () => {
     //todo: funtion returned in enhanced thunk action creator 
     //todo: Fetching all emojis after a successful load
     return async dispatch => {
          // const { lastEmojisFetch } = getState().emojisRed
          // const diffInHours = moment().diff(moment(lastEmojisFetch), 'minutes')
          // if (diffInHours < 10) return;

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