import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { boardReducer } from './reducers/boardReducer';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  board: boardReducer,
});

const persistedState = loadFromLocalStorage();

const middleware = [
  thunkMiddleware,
];

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware)),
);

store.subscribe(() => {
  saveToLocalStorage({
    board: store.getState().board
  });
});

export default store;



