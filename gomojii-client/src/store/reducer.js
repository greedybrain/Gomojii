import { combineReducers } from 'redux'
import manageEmojis from './manageEmojisReducer'
import manageAuth from './manageAuthReducer'

const rootReducer = combineReducers({
     emojisRed: manageEmojis,
     authRed: manageAuth
})

export default rootReducer
