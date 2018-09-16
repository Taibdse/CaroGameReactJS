import { combineReducers } from 'redux';

function detemineXIsNext(state = true, action) {
  if(action.type == 'CHANGE') return !state;
  return state;
}

const carogameReducer = combineReducers({
  detemineXIsNext
})

export default carogameReducer