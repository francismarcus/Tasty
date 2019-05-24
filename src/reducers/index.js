import { combineReducers } from 'redux';
import authReducer from 'reducers/authReducer';
import recipeReducer from 'reducers/recipeReducer';

export default combineReducers({
    auth: authReducer,
    recipe: recipeReducer,
});
