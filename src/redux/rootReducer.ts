import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import ContactSlice, { namespace as ContactNamespace } from './sidebar/slice';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
  blacklist: [],
};

const rootReducer = combineReducers({
  [ContactNamespace]: ContactSlice,
});

export { rootPersistConfig, rootReducer };
