import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visbilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})