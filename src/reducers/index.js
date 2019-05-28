import { combineReducers } from 'redux';
import authReducer from 'reducers/authReducer';
import recipeReducer from 'reducers/recipeReducer';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    auth: authReducer,
    recipe: recipeReducer,
    firestore: firestoreReducer
});
