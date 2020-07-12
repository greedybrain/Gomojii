import { combineReducers } from 'redux'
import manageEmojis from '../Store/Actions/manageEmojisReducer'
import manageAuth from '../Store/Actions/manageAuthReducer'

const rootReducer = combineReducers({
     emojisRed: manageEmojis,
     authRed: manageAuth
})

export default rootReducer
