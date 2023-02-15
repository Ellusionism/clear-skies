import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import morningReflection from './morning.reflection.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  morningReflection, // will store the answers for that day's morning reflection
});

export default rootReducer;
