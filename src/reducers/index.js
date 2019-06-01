import { combineReducers } from 'redux';
import authReducer from 'reducers/authReducer';
import recipeReducer from 'reducers/recipeReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    auth: authReducer,
    recipe: recipeReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
