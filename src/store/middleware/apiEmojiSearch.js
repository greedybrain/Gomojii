import { retrieveFrom } from '../../config'
import {
     startLoadEmojisRequest,
     addEmojis, 
     startLoadCategories, 
     addCategories
} from '../emojiSearch'

const { baseUrl, categoriesUrl } = retrieveFrom.endpoints
const { accessKey } = retrieveFrom.security

export const loadEmojis = () => {
     // funtion returned in enhanced thunk action creator 
     return dispatch => {
          dispatch(startLoadEmojisRequest())
          fetch(baseUrl + accessKey)
               .then(response => response.json())
               .then(emojis => {
                    dispatch(addEmojis(emojis))
               })
     }
}

export const loadCategories = () => {
     // funtion returned in enhanced thunk action creator 
     return dispatch => {
          dispatch(startLoadCategories())
          fetch(categoriesUrl + accessKey)
               .then(response => response.json())
               .then(categories => {
                    dispatch(addCategories(categories))
               })
     }
}