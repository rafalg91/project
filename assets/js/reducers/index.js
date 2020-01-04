import { combineReducers } from 'redux'
import workers from './workers'
import skills from './skills'

export default combineReducers({
  workers,
  skills
});