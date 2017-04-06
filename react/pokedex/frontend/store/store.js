import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkFunc from '../middleware/thunk';

const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunkFunc))
);

export default configureStore;
