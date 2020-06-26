import { combineReducers } from 'redux'
import manageEmojis from './manageEmojisReducer'
import manageAuth from './manageAuthReducer'

const rootReducer = combineReducers({
     allEmojis: manageEmojis,
     manageAuthReducer: manageAuth
})

export default rootReducer

