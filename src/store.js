import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from  './reducers';

export default(initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(reduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
