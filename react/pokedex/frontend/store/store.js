import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => createStore(rootReducer);

export default configureStore;

// );
// import { applyMiddleware } from 'redux';
// import thunkFunc from '../middleware/thunk';
//
// export default const configureStore = createStore(
//   rootReducer, applyMiddleware(thunkFunc)
