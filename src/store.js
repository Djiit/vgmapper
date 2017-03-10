import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from  './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default(initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(reduxThunk)
    )
  );
}
