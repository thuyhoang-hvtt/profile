import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk';

const initialState = {
  parallax: {
    mouseX: 0,
    mouseY: 0
  },
  section: {
    index: 0,
    anchor: ''
  },
}

const rootReducer = combineReducers({ root: reducer })

export const store = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
} 

