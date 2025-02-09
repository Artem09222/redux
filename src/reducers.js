import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  dummy: (state = {}) => state, // временный пустой редьюсер
});

export default rootReducer;
